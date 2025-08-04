<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let doc: XMLDocument | undefined;
  export let editCount = -1;
  export let host: HTMLElement;

  type Plugin = { id: string; name: string };
  type Process = {
    id: string;
    version: string;
    name: string;
    description: string;
    plugins: Plugin[];
  };

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
    const src = "/processes.xml";
    try {
      const res = await fetch(src, { cache: "no-cache" });
      const responseText = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(responseText, "application/xml");

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

<h4>Engineering Processes</h4>

{#if loading}
  <p>Loading…</p>
{:else if errorMsg}
  <p>{errorMsg}</p>
{:else if processes.length === 0}
  <p>No processes found.</p>
{:else}
  {#each processes as p}
    <div>
      <div><b>ID:</b> {p.id}</div>
      <div><b>Version:</b> {p.version}</div>
      <div><b>Description:</b> {p.description}</div>
      <div><b>Plugins:</b>
        {#if p.plugins.length === 0}
          <span>No Plugins defined</span>
        {:else}
          <ul>
            {#each p.plugins as pl}
              <p>{pl.name} (id: {pl.id})</p>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/each}
{/if}

<style>
</style>
