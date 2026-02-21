# 🚀 Dynamic Popup Setup Guide

Follow these steps to connect your website popup to a Google Sheet.

## Step 1: Prepare the Google Sheet
1. Create a new Google Sheet.
2. Rename the first sheet (tab) to `PopupData`.
3. In the first row (headers), add the following:
   - **Column A**: `PUBLISHED`
   - **Column B**: `IMAGE_LINK`
   - **Column C**: `ACTION_LINK`
4. In the second row (data):
   - **PUBLISHED**: Type `TRUE` (all caps) to show the popup, or anything else to hide it.
   - **IMAGE_LINK**: Paste your Google Drive image link (ensure it is set to "Anyone with the link can view").
   - **ACTION_LINK**: Paste your WhatsApp or other destination link (e.g., `https://wa.me/91XXXXXXXXXX`).

## Step 2: Add the Google Apps Script
1. Inside your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any existing code and paste the following:

```javascript
/**
 * Serves the popup data as JSON for the website.
 */
function doGet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("PopupData");
    
    // Get all data from the sheet
    const data = sheet.getDataRange().getValues();
    
    // Check if we have at least headers and one row of data
    if (data.length < 2) {
      return createJsonResponse({ published: false, error: "No data found" });
    }

    // Row 2 (index 1) contains our popup settings
    const publishedValue = data[1][0];
    const imageLink = data[1][1];
    const actionLink = data[1][2];

    const result = {
      published: publishedValue.toString().toUpperCase() === "TRUE",
      imageUrl: imageLink || "",
      actionUrl: actionLink || ""
    };

    return createJsonResponse(result);
  } catch (e) {
    return createJsonResponse({ published: false, error: e.toString() });
  }
}

/**
 * Helper to create JSON response with CORS support
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy the Script
1. Click the **Deploy** button (top right) > **New deployment**.
2. Select type: **Web app**.
3. Description: `Popup API`.
4. Execute as: **Me**.
5. Who has access: **Anyone** (this is important so your website can fetch it).
6. Click **Deploy**.
7. Copy the **Web App URL** provided.

## Step 4: Connect to Website
1. Go to your code: `src/components/DynamicPopup.jsx`.
2. Locate this line (line 6):
   ```javascript
   const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied in Step 3.

---

### Pro Tips:
- **Image Link**: Works best with Google Drive "Direct Links". The code automatically tries to convert standard Drive links.
- **Caching**: The popup is set to show once per browser session. To see it again after closing, close the tab and reopen it, or clear your session storage.
- **Styling**: The popup uses a premium blur effect and smooth animations powered by `framer-motion`.
