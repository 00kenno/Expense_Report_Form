/*
鳥科26代電装班長により作成
X: https://x.com/MeganeKinoko_
*/

//base.gs

let Title = "";
let SpreadSheetUrl = "";
let ApplyToList = [];
let CategoryList = [];

function setTitle (title) {
  Title = title;
}

function setSpreadSheetUrl (urlParameter) {
  SpreadSheetUrl = urlParameter;
}

function addApplyTo (applyTo) {
  ApplyToList.push(applyTo);
  CategoryList.push([]);
}

function addCategory (applyTo, category) {
  let applyToIndex = ApplyToList.indexOf(applyTo);
  if (applyToIndex !== -1) {
    CategoryList[applyToIndex].push(category);
  }
}

function excute () {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput.setTitle(Title);
  htmlOutput.setFaviconUrl("https://00kenno.github.io/Expense_Report_Form/TORICA_LOGO_Fabicon.ico");
  htmlOutput.addMetaTag("viewport", "width=device-width, initial-scale=1");
  return htmlOutput;
}

function include (filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function syncData () {
  return {
    ssUrl: SpreadSheetUrl,
    applyTo: ApplyToList,
    category: CategoryList
  };
}

function addData (records) { // スプレッドシートに値を送信する関数
  var ss = SpreadsheetApp.openByUrl(SpreadSheetUrl); // スプレッドシートをURLで取得
  const lock = LockService.getScriptLock();
  if (lock.tryLock(10000)) {
    for (let i = 0; i < records.length; i++) {
      var sheet = ss.getSheetByName(records[i].applyTo); // スプレッドシートのシートをそのシートの名前で取得
      const now = new Date(); // 日時を取得
      sheet.appendRow([
        now.toLocaleString(),
        records[i].name,
        records[i].category,
        records[i].product,
        records[i].unitPrice,
        records[i].quantity,
        Number(records[i].unitPrice) * Number(records[i].quantity),
        records[i].tax,
        records[i].otherCosts,
        records[i].reduction,
        Number(records[i].itemPrice) + Number(records[i].otherCosts),
        records[i].retailer,
        records[i].purpose
      ]); // 1行分のデータをシート末尾に追加
    }
    lock.releaseLock();
    return records.length;
  }
  else {
    return -1;
  }
}
