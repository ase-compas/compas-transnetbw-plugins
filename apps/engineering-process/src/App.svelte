<script lang="ts">
  import {onMount} from "svelte";
  import {Process, Plugin} from '@oscd-transnet-plugins/shared'
  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;

  let processes: Process[] = [];
  let errorMsg = "";
  let loading = true;

  const txt = (el: Element | null) => (el?.textContent ?? "").trim();

  function parseProcessesFromXml(xml: XMLDocument): Process[] {
    const procNodes = Array.from(xml.getElementsByTagName("process"));
    return procNodes.map((p) => {
      const plugins: Plugin[] = Array.from(p.getElementsByTagName("plugin")).map((pl) => ({
        id: txt(pl.querySelector("id")),
        name: txt(pl.querySelector("name")),
      }));

      return {
        id: txt(p.querySelector(":scope > id")),
        version: txt(p.querySelector(":scope > version")),
        name: txt(p.querySelector(":scope > name")),
        description: txt(p.querySelector(":scope > description")),
        plugins,
      };
    });
  }

  async function loadXml() {
    loading = true;
    const src = new URL('./assets/processes.xml', import.meta.url).href;
    try {
      const res = await fetch(src, { cache: "no-cache" });
      console.log("res", res);
      const responseText = await res.text();
      console.log("responseText", responseText);
      const parser = new DOMParser();
      const xml = parser.parseFromString(responseText, "application/xml");
      console.log("xml", xml);

      const parseErr = xml.querySelector("parsererror");
      if(parseErr) throw new Error("Invalid XML file format.");

      processes = parseProcessesFromXml(xml);
    } catch (error) {
      errorMsg = (error as Error).message;
    } finally {
      loading = false;
    }
  }

  onMount(loadXml);
</script>

<div class="page-content">
  <p class="heading">Engineering Processes</p>

  {#if loading}
    <p>Loading…</p>
  {:else if errorMsg}
    <p>{errorMsg}</p>
  {:else if processes.length === 0}
    <p>No processes found.</p>
  {:else}
    <div class="processes-list">
      {#each processes as p}
        <div class="processes-list__process">
          <div class="process__info">
            <p class="process__name">{p.id}</p>
            <p class="process__description">{p.description}</p>
          </div>
          <div class="process__actions">
            <button>
              START PROCESS
            </button>
            <button>
              VIEW PROCESS
            </button>
          </div>
<!--          <div><b>Plugins:</b>-->
<!--            {#if p.plugins.length === 0}-->
<!--              <span>No Plugins defined</span>-->
<!--            {:else}-->
<!--              <ul>-->
<!--                {#each p.plugins as pl}-->
<!--                  <p>{pl.name} (id: {pl.id})</p>-->
<!--                {/each}-->
<!--              </ul>-->
<!--            {/if}-->
<!--          </div>-->
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  * {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .page-content {
    margin: 2rem;
  }

  .heading {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .processes-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .processes-list__process {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #f9f9f9;
  }

  .process__info {
    display: flex;
    gap: 1rem;
  }

  .process__name {
    font-weight: 700;
    color: #004552;
  }

  .process__description {
    color: #555;
  }

  .process__actions {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 1rem;

  }

  .process__actions > button {
    cursor: pointer;
    color: #FFFFFF;
    background-color: #1a3e4a;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 5px;
  }
</style>
