/**
 * BACKEND CODE FOR BITYMITE CONTACT FORM
 * 
 * Instructions:
 * 1. Create a new Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any code in the editor and paste this entire code.
 * 4. Save the project (File > Save).
 * 5. Run the 'setupSheet' function once to create the headers (Select 'setupSheet' in the toolbar and click Run).
 * 6. Click 'Deploy' > 'New Deployment'.
 * 7. Select 'Web app' as current type.
 * 8. Description: "Bitymite Backend".
 * 9. Execute as: "Me" (your email).
 * 10. Who has access: "Anyone" (IMPORTANT).
 * 11. Click Deploy and copy the 'Web App URL'.
 */

// CONFIGURATION
const EMAIL_TO = "bitymite@proton.com"; // CHANGE THIS to your company email
const EMAIL_SUBJECT = "New Lead: Bitymite Contact Form";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName('Leads') || doc.getSheets()[0];

    // Parse the incoming JSON data
    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);

    // 1. Save to Google Sheet
    const newRow = [
      new Date(),       // Timestamp
      data.name,        // Name
      data.email,       // Email
      data.message      // Message
    ];
    sheet.appendRow(newRow);

    // 2. Send Email Notification
    if (data.email) {
      MailApp.sendEmail({
        to: EMAIL_TO,
        subject: EMAIL_SUBJECT,
        htmlBody: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <hr/>
          <p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
          <hr/>
          <p><em>Saved to Google Sheet at: ${new Date().toLocaleString()}</em></p>
        `
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved and email sent.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Run this once to setup the sheet headers
function setupSheet() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = doc.getSheetByName('Leads') || doc.getSheets()[0];
  sheet.setName('Leads');
  sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
}
