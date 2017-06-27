TotalAthletes.gs
function totalAthletes() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  ss.insertSheet("Total", 1);
  var destSheet = ss.getSheetByName("Total");
  var testRange = destSheet.getRange('A1')

  var sheetnames = ["M18-24", "M25-29", "M30-34", "M35-39", "M40-44", "M45-59", "M60-64", "M65-69",
  "F18-24", "F25-29", "F30-34", "F35-39", "F40-44", "F45-59", "F60-64", "F65-69",];
  var s = sheetnames.length
Logger.log(s);  
//Logger.log(testData);

  var hasHeaders
Logger.log(hasHeaders);

for (i = 0 ; i < sheetnames.length; i++){
Logger.log(sheetnames[i]);



// Sets null value for hasHeaders. Once value is added this will make sure that the 
// column headders aren't copied



var Ass = ss.getSheetByName(sheetnames[i]);
Logger.log(Ass);
  var testData = testRange.getValue();
  if (testData != "") {
  hasHeaders = 1;
  }
Logger.log("headers? " + hasHeaders);
// Checks to see if the destination sheet has headers, and triggers the function
// To copy headers or not. 



if (Ass == null) {
i+1
}
// Checks to see if the sheet name exists in the current spreadsheet
else
{

Logger.log(Ass.getSheetName());

  
if (hasHeaders == 1) {

 var source = Ass.getRange(2, 1, Ass.getLastRow(), Ass.getLastColumn());
 }
 else
 {
 var source = Ass.getRange(1, 1, Ass.getLastRow(), Ass.getLastColumn());
 }
 

  var destRange = destSheet.getRange(destSheet.getLastRow()+1,1);
  source.copyTo (destRange, {contentsOnly: true});
}
}

destSheet.setFrozenRows(1);
destSheet.activate().getRange(1, 1, 1, ss.getLastColumn()).setFontWeight("Bold");
}

