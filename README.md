# Prajwal & Prajna - Premium Traditional South Indian Wedding Website

A luxurious, culturally authentic, fully responsive single-page wedding invitation website created for **Prajwal** and **Prajna**.

---

## 🌺 Overview & Authentic Cultural Features

- **Traditional South Indian Aesthetic:**
  - Rich traditional color palette: Deep Royal Maroon (`#5a0c19`), Antique Gold (`#d4af37`), Vermilion Red (`#b32029`), Cream Silk Ivory (`#faf6ed`), and Temple Green (`#1b4332`).
  - Traditional Brass *Nilavilakku* lamps with animated flickering flames.
  - Auspicious *Mango Leaf Toran* (Mavina Ele Thorana) & Fresh Marigold garlands.
  - Hanging fragrant *Jasmine Garlands* (Mallige Dande / Gajra).
  - Auspicious Kolam / Rangoli & Mandala geometric dividers.
  - Kundan & Zari gold borders with ornate corner filigree.
  - Subtle falling Jasmine petals canvas particle animation.
  - Traditional Sanskrit invocations: *॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ॥* & *॥ ಮಾಂಗಲ್ಯಂ ತಂತು ನಾನೇನ ॥*.

- **Functional Features:**
  1. **Royal Opening Invitation Screen:** Interactive envelope with flickering Nilavilakku lamps and an animated "Open Invitation" button.
  2. **Live Wedding Countdown (IST):** Accurate countdown to **26 November 2026 at 9:31 AM IST** updating every second. Automatically reveals celebration wishes once the Muhurtham arrives.
  3. **Real Couple Photo Gallery:** Showcases the real couple photographs of Prajwal & Prajna with an interactive full-screen Lightbox viewer (zoom, keyboard arrows, and mobile touch swipe).
  4. **Google Maps Venue Integration:** Embedded responsive map, "Get Directions" and "Open in Google Maps" buttons pointing directly to the destination link `https://share.google/lgsBTNFpqHIBjumBe`, plus a one-click "Copy Address" button.
  5. **Add to Google Calendar:** Automatically formats and opens Google Calendar with the exact start time (`9:31 AM IST`, 26 Nov 2026), venue, and map directions.
  6. **WhatsApp Invitation Sharing:** One-click sharing button with pre-formatted invitation text that dynamically attaches the deployed website URL.
  7. **Family Blessings & Thank-You Section:** Traditional floral backdrop honoring family blessings without invented names.
  8. **No RSVP / Registration:** Pure invitation-only format for maximum guest privacy and ease of use.

---

## 📁 Project Structure

```
prajwal-prajna-wedding/
├── index.html                   # Main single-page invitation document
├── style.css                    # Traditional South Indian luxury stylesheet
├── script.js                    # Countdown, gallery lightbox, map & sharing logic
├── package.json                 # Project scripts (npm start / dev)
├── vercel.json                  # One-click deployment configuration for Vercel
├── netlify.toml                 # One-click deployment configuration for Netlify
├── README.md                    # Documentation & deployment guide
└── assets/
    └── images/
        ├── couple-traditional.jpg # Real couple portrait in silk traditional attire
        ├── couple-nature.jpg      # Real couple hand-in-hand in serene nature
        ├── groom-prajwal.jpg      # Groom individual portrait
        └── bride-prajna.jpg       # Bride individual portrait
```

---

## 🚀 How to Run Locally

### Option 1: Direct Open
Simply double-click `index.html` in your file explorer. It opens in Google Chrome, Microsoft Edge, Safari, or Firefox instantly!

### Option 2: Using Python's Built-in Server
Open PowerShell / Terminal in this folder and run:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 3: Using Node.js
```bash
npm start
```
or
```bash
npx serve . -l 3000
```

---

## 📸 How to Upload / Replace Couple Photographs

1. **Replace Existing Photos:**
   - Put your photos in `assets/images/` with the same names:
     - `couple-traditional.jpg` (Hero & traditional attire)
     - `couple-nature.jpg` (Outdoor / nature portrait)
     - `groom-prajwal.jpg` (Groom portrait)
     - `bride-prajna.jpg` (Bride portrait)

2. **Add More Photos to the Gallery:**
   - Copy new photo files to `assets/images/my-new-photo.jpg`.
   - Open `script.js` and add an entry to the `GALLERY_PHOTOS` array:
     ```javascript
     {
       src: 'assets/images/my-new-photo.jpg',
       title: 'Haldi Ceremony',
       caption: 'Golden moments with family'
     }
     ```
   - In `index.html`, duplicate one of the `.gallery-item-card` elements in the `#gallery` section and update `data-index` accordingly.

---

## 🌐 How to Deploy for Free with a Shareable Public URL

You can host this website in under 2 minutes with a free public URL that guests can open from WhatsApp on their phones:

### Method A: Instant Netlify Drag-and-Drop (No coding required)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (sign in or create a free account).
2. Drag and drop the `prajwal-prajna-wedding` folder into the Netlify Drop box in your browser.
3. Within 15 seconds, Netlify will give you a live HTTPS public link (e.g. `https://prajwal-prajna-wedding.netlify.app`).
4. You can also customize the domain name under Site Settings > Domain Management.

### Method B: Deploying with Vercel
1. Install Vercel CLI (or connect via GitHub):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the 3 prompts. It will instantly deploy and output your public URL (e.g., `https://prajwal-prajna-wedding.vercel.app`).

### Method C: GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 📲 WhatsApp Sharing Preview

When you click **"Share Wedding Invitation"**, the message is pre-filled with:

```text
You're cordially invited to the wedding of Prajwal & Prajna!

Date: 26 November 2026
Muhurtham: 9:31 AM
Venue: Udupi Grameena Sabhabhavana, Moodubelle Road, Kuntalanagara.

We would be delighted to have your presence and blessings.

Wedding Invitation: [Your Live Deployed URL]
```
The URL is inserted dynamically based on where the website is hosted.

---

*॥ ಶುಭಮಸ್ತು • Mangalam Bhavatu ॥*
