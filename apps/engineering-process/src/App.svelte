<script lang="ts">
  import type { Process, Plugin } from '@oscd-transnet-plugins/shared';
  import EngineeringProcessesList from './views/engineering-processes-list.view.svelte';
  import EngineeringProcessDetail from './views/engineering-process-detail.view.svelte';

  let processes: Process[] = [];
  let selected: Process | null = null;
  let loading = true;
  let errorMsg = "";

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
      const responseText = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(responseText, "application/xml");

      const parseErr = xml.querySelector("parsererror");
      if (parseErr) throw new Error("Invalid XML file format.");

      processes = parseProcessesFromXml(xml);
    } catch (e) {
      errorMsg = (e as Error).message ?? "Failed to load processes.";
    } finally {
      loading = false;
    }
  }

  loadXml();

  function startProcess(proc: Process) {
    //TODO: Implement process start logic
    console.log("Start process:", proc);
  }
</script>

{#if selected}
  <EngineeringProcessDetail
    proc={selected}
    on:back={() => (selected = null)}
    on:start={(e) => startProcess(e.detail)}
  />
{:else}
  <EngineeringProcessesList
    processes={processes}
    loading={loading}
    errorMsg={errorMsg}
    on:view={(e) => (selected = e.detail)}
    on:start={(e) => startProcess(e.detail)}
  />
{/if}
