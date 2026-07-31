# Suhayb — Portfolio

## Fayllada

| Fayl | Waa maxay |
|---|---|
| `index.html` | Bogga hore (Home) — hero + terminal |
| `about.html` | About + Skills |
| `projects.html` | Shaqooyinka/projects-kaaga |
| `ventures.html` | Nas100Devotee + EASTLINK |
| `contact.html` | Xiriirka (email, LinkedIn, iwm) |
| `styles.css` | Midabada, fonts-ka, layout-ka — **hal fayl, dhammaan bogagga wada isticmaalaan** |
| `script.js` | Animation-ka (typed terminal, scroll reveal, mobile menu) |
| `_headers` | Security headers (Netlify keliya ayey u shaqeeyaan) |

## Sida loo bedelo qoraalka (ugu fudud)

1. Fur fayl kasta `.html` ah adigoo isticmaalaya text editor (VS Code — bilaash, [code.visualstudio.com](https://code.visualstudio.com))
2. Raadi qoraalka aad rabto inaad bedesho (Ctrl+F), bedel, keydso (Ctrl+S)
3. Si aad u aragto isbedelka, fur fayl-ka `.html` browser-ka (double-click ama right-click → Open with browser)

## Sida loo bedelo midabada

Fur `styles.css`, dhererka 1-13-aad waxaad ka arki doontaa:

```css
:root{
  --turmeric: #E8A33D;   /* midabka dhalaalaya ee ugu weyn */
  --malt: #8B5E3C;       /* midabka labaad */
  --cream: #F3E9DA;      /* qoraalka */
  --bg: #100D0A;         /* dhabaha */
}
```

Bedel hex code-yadan oo kaliya — dhammaan bogagga way isu bedeli doonaan (waayo dhammaantood `styles.css` isku fayl bay wadaagaan).

## Sida loogu daro project cusub (`projects.html`)

Nuqul ka samee mid ka mid ah `.project-card` blocks-ka, ka dibna bedel:

```html
<div class="project-card" data-reveal>
  <div class="project-num mono">07</div>
  <h3>Magaca Project-ka</h3>
  <p>Sharaxaad kooban oo ku saabsan waxa aad dhistay.</p>
  <div class="project-links">
    <span class="pill">Tech-ka aad isticmaashay</span>
  </div>
</div>
```

## Email-ka

Email-ku (`cirka201056@gmail.com`) waa la "obfuscate" gareeyay (waxaa loo qorsheeyay JS gudaha) si bots-ku aan si fudud u soo scrape gareyn. Haddii aad rabto inaad bedesho, raadi `cirka201056` iyo `gmail.com` gudaha `<script>` tag-yada footer-ka bogagga oo dhan.

## Deployment (bilaash)

- **GitHub Pages**: shub dhammaan fayllada repo, dab Settings → Pages
- **Netlify**: drag-and-drop foolderka — `_headers` file-ku wuu shaqeyn doonaa toos ah
- **Vercel**: import folder-ka ama repo-ga

Ha ilaawin: link-yada LinkedIn/GitHub/X ee `contact.html` iyo `index.html` weli waa placeholder (`href="#"`) — bedel iyagoo la geliyo URL-yadaada dhabta ah.

## Contact form (Formspree) — tallaabo lama huraan ah

Form-ka `contact.html` hadda wuxuu u dirayaa `https://formspree.io/f/YOUR_FORM_ID` — waa placeholder oo aan shaqeynayn ilaa aad samayso account:

1. Tag [formspree.io](https://formspree.io) → sign up bilaash (100 fariin/bishii)
2. Samee form cusub, ku qor email-kaaga (`cirka201056@gmail.com`)
3. Ka koobi **Form ID**-ga (tusaale `xyzabc12`)
4. Fur `contact.html`, raadi `YOUR_FORM_ID`, ku bedel ID-gaaga

## Favicon iyo Social preview (Open Graph)

- `favicon.svg` — calaamadda tab-ka browser-ka, waxaad bedeli kartaa letter-ka iyo midabka
- `og-image.png` — sawirka muuqda marka link-kaaga la share gareeyo WhatsApp/LinkedIn/Twitter. Haddii aad rabto mid cusub, ii soo dir sawir ama sheeg isbedel

## 404 Page

`404.html` — GitHub Pages si toos ah ayey isticmaashaa faylkan marka link khaldan la booqdo. Ma baahna wax dheeraad ah.

## .nojekyll

Fayl faaruq ah oo GitHub Pages u sheegaya inaanu Jekyll (build engine-kiisa) u isticmaalin — muhiim si dhammaan fayllada (sida `_headers`) ay u muuqdaan si sax ah.
