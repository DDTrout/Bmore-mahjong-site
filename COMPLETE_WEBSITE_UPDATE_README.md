# Bmore Mahjong - Complete Website Events Update

This is an update to the existing full Bmore Mahjong website, not a separate Events website.

## What changed
- The existing full site sections remain: header/navigation, hero, About, Events, History, and Connect.
- Monthly events remain $25 per person with the existing registration link.
- Pop-Up events are $35 per person and use the same registration link.
- Harford Vineyard & Winery: Sunday, October 4, 2026.
- Joanna's Cafe: Tuesday, October 27, 2026.
- Monthly and Pop-Up venue logos are now placed in consistent white logo tiles beside each venue name for a cleaner, more professional presentation.

## GitHub update
Replace your existing `src/App.jsx` with the included `src/App.jsx`.
Add or replace these files in your existing `public` folder:
- `Peabody Logo.png`
- `Blue Pit Logo.png`
- `Union Craft Logo.png`
- `Harford Vineyard Logo.png`
- `Joannas Cafe Logo.png`

Keep your existing `BMM LOGO.png` in the public folder. The site already references it for the Bmore Mahjong brand logo.

Commit and push to GitHub. Your connected Vercel project should redeploy automatically.

## Preview
Open `full-site-preview.html` to preview the update in the context of the complete website. The BM circle in the preview stands in for the existing Bmore Mahjong logo; your deployed React site continues to use `/BMM LOGO.png`.
