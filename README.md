# Curious Magpie — Keramiek Atelier

Static website for Curious Magpie, the ceramics atelier of Marjolein IJbema.

🌐 **Live site:** [https://MarjoleinIJbema.github.io/curiousmagpiesite/](https://MarjoleinIJbema.github.io/curiousmagpiesite/)

## View locally

This is a plain HTML/CSS site — no build step required.

### Option 1: Python (built-in on macOS/Linux)

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Node / npx

```bash
npx serve .
```

### Option 3: Just open the file

Open `index.html` directly in your browser. Note: some browsers may restrict loading local SVG files this way.

## Structure

```
index.html              Home page
producten/index.html    Products overview
agenda/index.html       Market dates & events
contact/index.html      Contact information
css/styles.css          All styles
js/nav.js               Mobile navigation
ekster.svg              Logo (magpie illustration)
favicon.ico             Browser tab icon
```

## Deployment

The site is hosted on GitHub Pages, served directly from the `main` branch (no build step, no Actions workflow needed).

🌐 **Live site:** [https://markijbema.github.io/curiousmagpiesite/](https://markijbema.github.io/curiousmagpiesite/)

To deploy: push to `main`. Changes go live within a minute.
