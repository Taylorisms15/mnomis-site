async function includeHTML() {
  const includeElements = document.querySelectorAll('[data-include]');
  for (const el of includeElements) {
    const file = el.getAttribute('data-include');
    try {
      const resp = await fetch(file, { cache: 'no-cache' });
      if (!resp.ok) throw new Error(`Failed to load ${file}`);
      el.innerHTML = await resp.text();
    } catch (e) {
      el.innerHTML = "";
      console.error(e);
    }
  }
}
document.addEventListener('DOMContentLoaded', includeHTML);
