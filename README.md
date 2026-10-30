# Cosmos to Core: installable app

This folder is the complete app. Put it on any website that uses **https**, and students can install it on Chromebooks, Windows and Mac laptops. Once it is installed and has opened once while online, it also works **offline**.

## What's in the folder

| File / folder | What it is |
|---|---|
| `index.html` | The app itself |
| `config.js` | **Teacher settings.** Open it in any text editor to change them (see below) |
| `manifest.webmanifest` and the `.png` icons | Make it installable with its own name and icon |
| `sw.js` | Makes it work offline and delivers updates |
| `LICENSE-….txt` | Licenses for the 3D library and fonts (built into `index.html`) |

There are no subfolders: upload all of these files side by side.

## Step 1: Put it online (choose one)

**Option A: Your district's web server (recommended).** Send this folder to your tech department and ask them to host it at an https address, for example `https://www.yourdistrict.org/cosmos/`. They can also handle Step 2.

**Option B: GitHub Pages (free).**
1. Make a free account at github.com. Then create a new **public** repository, for example `cosmos-to-core`.
2. On the repository page, choose **Add file → Upload files**. Drag in **everything inside this folder** (not the folder itself), then click **Commit changes**.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then click **Save**.
4. After a few minutes your app is at `https://YOUR-USERNAME.github.io/cosmos-to-core/`.

**Option C: Netlify Drop (free, quickest test).** Go to app.netlify.com/drop and drag this folder onto the page. It gives you an https address in seconds. Make a free account so the site doesn't expire.

> A free GitHub Pages or Netlify address is public: anyone with the link can open it. The app has no logins and collects nothing. Students' level choices and Journey progress are saved only on their own device.

## Step 2: Get it onto student devices

**Managed Chromebooks (best).** Your Google Workspace admin can install it for every student, with no action needed from students:
1. In the Google Admin console, go to **Devices → Chrome → Apps & extensions → Users & browsers**.
2. Select the students' organizational unit.
3. Choose **Add (+) → Add by URL** and paste the app's address.
4. Set the installation policy to **Force install + pin to ChromeOS taskbar**, then click **Save**.

Use the final address exactly as it appears in the browser, one that doesn't redirect anywhere else.

**Any Chromebook or laptop, by hand.** Open the address in Chrome or Edge. Then either click **Install app** at the top of the page, or click the install icon at the right end of the address bar. Cosmos to Core then opens in its own window and appears with the computer's other apps.

## Teacher settings

Open `config.js` in a text editor:

```js
showRealRegentsQuestions: true
```

Change it to `false` to hide the clusters from released Regents exams, for example if your own tests use past Regents questions. Save the file and upload it again. Students get the change the next time they open the app while online.

## Updating the app

Upload the new files over the old ones, replacing everything. The next time students open the app online, it downloads the update in the background and shows a **Reload** button.

## What works offline

Everything in the app works offline: the 3D views, the Journey, labs, simulations, stories and the built-in practice. Links to outside documents need the internet, such as the official Reference Tables PDF and the released Regents exams on nysedregents.org.

## Differences from the version on Claude

- **AI-generated practice** and **"Find it with AI"** town search are not included, because they need Claude. Everything else is the same.
- Teacher settings come from `config.js` instead of the Teacher button.

## Credits and licenses

3D graphics: three.js (MIT license). Map data handling: topojson-client (ISC license). Fonts: Figtree and Instrument Serif (SIL Open Font License). The license files are included in this folder.
