# Hanna & Balázs – RSVP site

## 1. Google Sheet (where the answers go)
1. Create a new Google Sheet.
2. Extensions → Apps Script. Replace the contents with `apps-script/Code.gs`, then save.
3. Deploy → New deployment → gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorize (Advanced → Go to project → Allow), then copy the Web app URL ending in `/exec`.
5. In `index.html`, paste it into `const SCRIPT_URL = "";`.

The first answer creates a `Válaszok` tab with a header row. After editing `Code.gs`, use
Deploy → Manage deployments → Edit → Version: New version, so the URL stays the same.

## 2. Hosting (GitHub Pages)
1. New repository named `eskuvo`, **Public**.
2. Add file → Upload files: `index.html` and the `images` folder. Commit.
3. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. After 1–2 minutes the site is at `https://YOUR-GITHUB-USERNAME.github.io/eskuvo/`.

## 3. QR code
1. `pip install segno`
2. Put the site URL into `URL` in `make_qr.py`, then run `python make_qr.py`.
3. `qr.svg` is for the printer, `qr.png` for a quick phone test.

## Placeholders to fill in `index.html`
`[dátum]`, `[helyszín]`, `[határidő]`, and the `MENUS` list in the script.
