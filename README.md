# MetaForgeVerse Website

🌐 Official website for MetaForgeVerse

## Production URL
https://metaforgeverse.com

## Structure
```
website/
├── index.html          # Main page
├── assets/             # Images, fonts, etc
├── index-*.js          # Compiled JavaScript
├── index-*.css         # Compiled CSS
└── metaforgeverse-icon.svg
```

## Deployment
This website is served by NGINX in Docker container.

Changes are deployed automatically when pushed to main branch.

## Server
- IP: 34.91.151.99
- NGINX Docker container: tettra_nginx
- Mount: /home/tarlannuriyev20/tettra-project/website → /app_website

## Quick Deploy
```bash
cd ~/tettra-project/website
git pull origin main
docker restart tettra_nginx
```
