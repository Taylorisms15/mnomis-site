async function includeHTML() {
  const base = (window.__MNOMIS_BASE__ || "/").replace(/\/$/, "");
  const includeElements = document.querySelectorAll('[data-include]');
  for (const el of includeElements) {
    const file = el.getAttribute('data-include');
    // file is stored as a path like "components/Header.html" (no leading slash)
    const url = `${base}/${file}`.replace(/\/\//g,"/");
    try {
      const resp = await fetch(url, { cache: 'no-cache' });
      if (!resp.ok) throw new Error(`Failed to load ${url}`);
      el.innerHTML = await resp.text();
    } catch (e) {
      el.innerHTML = "";
      console.error(e);
    }
  }
}
document.addEventListener('DOMContentLoaded', includeHTML);
