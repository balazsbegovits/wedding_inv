const SHEET_NAME = "Válaszok";
const HEADERS = ["Időpont", "Család", "Részt vesz", "Létszám", "Hagyományos", "Vegetáriánus", "Gyerekmenü", "Vendégek", "Éjszakára marad", "Allergia", "Üzenet"];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  sheet.appendRow([
    new Date(),
    asText(data.family),
    data.attending,
    data.headcount,
    data.traditional,
    data.vegetarian,
    data.kids,
    asText(data.guests),
    data.overnight,
    asText(data.allergies),
    asText(data.message)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function asText(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
