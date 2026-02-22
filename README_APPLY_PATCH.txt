v6 Patch

What this fixes
1) Logo not working
   Your site is served under /mnomis.com/ (example: https://www.mnomis.com/mnomis.com/...)
   Any paths that start with /... point to the domain root and will break.
   This patch makes paths base-aware so the logo loads correctly.

2) Green buttons
   The primary CTA button becomes green (executive, not neon).

Files
- js/basepath.js
  Injects a <base> tag automatically when the URL starts with /mnomis.com/.
- js/include.js
  Fetches components using the computed base path.
- components/Header.html
  Uses relative paths for logo and nav so it works under /mnomis.com/.
- css/styles.v6.patch.css
  Append to your existing css/styles.css to make CTAs green and strengthen design presence.

How to apply
A) JS
- Replace your existing js/include.js with the one in this patch.
- Add js/basepath.js to your repo.
- In every page <head>, load basepath.js BEFORE include.js, for example:
  <script src="js/basepath.js"></script>
  <script src="js/include.js" defer></script>

B) Header
- Replace components/Header.html with the one in this patch.
- Update your include placeholders to use relative include paths (no leading slash):
  data-include="components/Header.html"
  data-include="components/Footer.html"

C) CSS
- Append css/styles.v6.patch.css to the end of css/styles.css.

Result
- Logo renders under https://www.mnomis.com/mnomis.com/
- Nav links work from any page
- Primary buttons are green and feel more intentional
