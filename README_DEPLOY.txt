GitHub-ready site package

Important
- Put ONE logo here: assets/mnomis-logo.png (lowercase, no spaces)
- Delete or ignore root logo files like "Mnomis Logo.png" to avoid confusion

Why the logo broke
- Case sensitivity and spaces: "Mnomis Logo.png" is not the same as "mnomis-logo.png"
- GitHub Pages is served under /mnomis.com/ so root paths can break

This build
- Uses assets/mnomis-logo.png everywhere
- Sets base href automatically when URL starts with /mnomis.com/
- Green button now has white text

Deploy
- Unzip into your repo root so index.html is at repo root
- Commit and push
