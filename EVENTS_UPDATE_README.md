# Bmore Mahjong Events Update - October 2026 Pop-Ups

This update changes only the Events section and adds the venue logo files supplied for the website.

## Changes included

- Monthly Events remain $25 per person.
- Pop-Up Events remain $35 per person.
- Added a **Register & Pay for Pop-Up Events** button.
- The pop-up button uses the same registration form as the monthly event button:
  `https://forms.gle/o1Hwyrj5sqdB4cM27`
- Added Harford Vineyard & Winery pop-up date: **Sunday, October 4, 2026**.
- Added Joanna's Cafe pop-up date: **Tuesday, October 27, 2026**.
- Event times for both pop-ups remain listed as "Event time coming soon."
- Added the supplied logo to each monthly venue card:
  - Peabody Heights Brewery
  - Blue Pit BBQ
  - Union Craft Brewing
- Added the supplied logo to each pop-up card:
  - Harford Vineyard & Winery
  - Joanna's Cafe

## Files to add/replace in GitHub

Replace:

- `src/App.jsx`

Add or replace these files inside `public/`:

- `Peabody Logo.png`
- `Blue Pit Logo.png`
- `Union Craft Logo.png`
- `Harford Vineyard Logo.png`
- `Joannas Cafe Logo.png`

The other website files do not need to change for this update.

## Deploy

1. Upload/replace the files above in your existing GitHub repository.
2. Commit the changes.
3. Push to GitHub.
4. Vercel should redeploy automatically if the project is connected to that repository.
5. Check the Events section on the Vercel preview URL before confirming the production site.

`events-preview.html` is included only as a visual preview and does not need to be uploaded to the website repository.
