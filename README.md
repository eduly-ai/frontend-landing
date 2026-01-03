# Eduly Landing Page

> Game your brain into learning. Ultra-short educational content that fights brain rot with knowledge.

## Live Site

Visit [eduly.ai](https://eduly.ai)

## Local Development

No build tools required! Just open `index.html` in your browser.

For a local server (optional):
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve
```

Then visit `http://localhost:8000`

## Project Structure

```
├── index.html          # Home page
├── motivation.html     # Why Eduly exists
├── technical.html      # How it works
├── examples.html       # Content examples
├── contact.html        # Contact & community
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Navigation & animations
├── assets/
│   └── favicon.svg     # Site favicon
├── CNAME               # Custom domain config
└── README.md           # This file
```

## Deployment to GitHub Pages

### Option 1: Deploy to `eduly.github.io`

1. Create a repository named `eduly.github.io` in the `eduly` GitHub organization
2. Push this code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/eduly/eduly.github.io.git
   git push -u origin main
   ```
3. GitHub Pages will auto-deploy from `main`

### Option 2: Deploy to a different repo

1. Push to any repo in your org
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Save

### Custom Domain Setup (eduly.ai)

1. The `CNAME` file is already configured with `eduly.ai`
2. In your domain registrar (e.g., Namecheap, Cloudflare), add DNS records:

   **For apex domain (eduly.ai):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: eduly.github.io
   ```

3. In GitHub repo Settings → Pages → Custom domain, enter `eduly.ai`
4. Check "Enforce HTTPS" once DNS propagates (can take up to 24 hours)

## Customization

### Update Discord Link
Replace `https://discord.gg/eduly` in all HTML files with your actual Discord invite link.

### Update Social Links
- Twitter: Search for `twitter.com/edulyai` and replace
- GitHub: Already points to `github.com/eduly`

### Contact Form
The contact form uses [Formspree](https://formspree.io). To enable:
1. Create a free Formspree account
2. Create a new form
3. Replace `your-form-id` in `contact.html` with your form ID

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --bg-primary: #0c0c0c;      /* Main background */
  --accent: #39ff14;           /* Neon green accent */
  /* ... more variables ... */
}
```

## Tech Stack

- Pure HTML5
- CSS3 (no preprocessors)
- Vanilla JavaScript
- Google Fonts (Space Grotesk + IBM Plex Sans)
- No build tools, no dependencies

## License

MIT - Feel free to use this as a template for your own projects.

---

Built with ⚡ by the Eduly team
