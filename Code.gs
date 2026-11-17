// Google Sheetsi tabeli ID
const tabeliId = "11loekvlAgL7ejYSfHVBsZ8K_1EYDoDHBwESeLUz40ZM";

function doGet(e){
  let leht = SpreadsheetApp.openById(tabeliId).getSheetByName("Näod");

  // Uute andmete lisamine veebivormi kaudu
  if(e && e.parameter && e.parameter.nimi !== undefined){
    let nimi = String(e.parameter.nimi).trim();
    let suurus = Number(e.parameter.suurus);
    let habemekarvad = Number(e.parameter.habemekarvad);

    if(!nimi || nimi.length > 50 || !Number.isFinite(suurus) ||
       suurus < 40 || suurus > 140 || !Number.isInteger(habemekarvad) ||
       habemekarvad < 0 || habemekarvad > 150){
      throw new Error("Vigased andmed.");
    }

    leht.appendRow([nimi, suurus, habemekarvad]);
  }

  // Kõigi andmeridade lugemine ja JSON-ina tagastamine
  let andmed = [];
  if(leht.getLastRow() > 1){
    andmed = leht.getRange(2, 1, leht.getLastRow() - 1, 3).getValues();
  }
  return ContentService.createTextOutput(JSON.stringify(andmed))
    .setMimeType(ContentService.MimeType.JSON);
}
