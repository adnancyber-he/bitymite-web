# Backend Setup Guide (Google Sheets + Email)

Since this is a static website, we use **Google Apps Script** as a serverless backend to handle form submissions. This is free, secure, and reliable.

## Step 1: Create the Backend

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet named **"Bitymite Leads"**.
2. Shows the menu bar, click on **Extensions** > **Apps Script**.
3. A code editor will open. Delete any code currently there.
4. Open the file `backend/Code.gs` in this project, copy **all the code**, and paste it into the Google Apps Script editor.
5. (Optional) Change the `EMAIL_TO` variable at the top of the script to your actual email address.
6. Press `Ctrl + S` (or disk icon) to Save. Name the project "Bitymite Backend".

## Step 2: Initialize the Sheet

1. In the Apps Script toolbar, you will see a dropdown menu that says `myFunction` (or similar). Change it to `setupSheet`.
2. Click **Run**.
3. It will ask for permissions ("Review Permissions"). Click it, choose your account, click **Advanced** > **Go to Bitymite Backend (unsafe)** > **Allow**.
   * *Note: It says "unsafe" because you are the developer and it hasn't been verified by Google yet. This is normal for personal scripts.*
4. Go back to your Google Sheet. You should see headers: `Timestamp`, `Name`, `Email`, `Message`.

## Step 3: Deploy as Web App

1. In the Apps Script editor, click the **Deploy** button (top right) > **New deployment**.
2. Click the styling "Select type" (gear icon) > **Web app**.
3. **Description**: `Version 1`.
4. **Execute as**: `Me` (should show your email).
5. **Who has access**: Change this to **Anyone** (Critical step!).
6. Click **Deploy**.
7. Copy the **Web App URL** (it starts with `https://script.google.com/macros/s/...`).

## Step 4: Connect to Website

1. Go to your project code: `src/components/Contact.jsx`.
2. Find the variable `SCRIPT_URL`.
3. Paste your Web App URL inside the quotes.
   ```javascript
   const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_LONG_ID_HERE/exec";
   ```
4. Save the file.

Done! Your contact form will now save data to the Sheet and email you immediately.
