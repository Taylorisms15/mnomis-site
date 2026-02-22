v5 Patch contents

Goal
- Keep the illustrative brief (your preference)
- Restore your real logo immediately (your repo has /mnomis-logo.png at root)
- Bring back discrete green highlights
- Improve executive feel by tightening spacing and visual rhythm, without changing your information architecture

Files
1) components/Header.html
   - Loads /mnomis-logo.png (repo root) first, then /assets/mnomis-logo.png.

2) assets/brief-visual.svg
   - Premium illustrative Brief with subtle green accents.

3) css/styles.v5.patch.css
   - Append to your existing css/styles.css.

4) HOME_HERO_VISUAL_REPLACEMENT.html
   - Replace the hero visual block in index.html with this.

Apply in GitHub
- Replace components/Header.html with the one in this zip.
- Add assets/brief-visual.svg to your repo at assets/brief-visual.svg.
- Append css/styles.v5.patch.css to css/styles.css.
- In index.html, replace the hero visual container with the snippet.

Optional
- Apply the same hero snippet on /overview/index.html and /output/index.html.
