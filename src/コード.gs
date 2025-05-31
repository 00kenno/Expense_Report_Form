/*
26代電装班長 永田賢之介
X: https://x.com/MeganeKinoko_
*/

//会計担当者へ////////////////////////

//修正可能箇所#1 適当なタイトルを設定してください．
const Title = "経費申請フォーム";

//修正可能箇所#2 部員全員が確認できる編集権限なしのスプシのリンクを張ってください．(ex."https://docs.google.com/spreadsheets/d/.../edit")
const SpreadSheetReadOnly = "https://docs.google.com/spreadsheets/d/.../edit";
  
//修正可能箇所#3 役持ちなどに渡す編集権限ありのスプシのリンクを貼ってください．(ex."https://docs.google.com/spreadsheets/d/.../edit")
const SpreadSheetReadWrite ="https://docs.google.com/spreadsheets/d/.../edit";

//修正可能箇所#4 申請先のスプシの「シート」を列記してください．ただし，これらは確実に「シートの名前」と一致している必要があります．
//初期値：const ApplyToList = ["運営", "設計", "フラチ", "翼班", "接合班", "コクピ班", "電装班"];
const ApplyToList = ["運営", "設計", "フラチ", "翼班", "接合班", "コクピ班", "電装班"];

////////////////////////////////////


function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput.setTitle(Title);
  htmlOutput.setFaviconUrl("https://00kenno.github.io/Expense_Report_Form/TORICA_LOGO_Fabicon.ico");
  htmlOutput.addMetaTag("viewport", "width=device-width, initial-scale=1");
  return htmlOutput;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function constData () {
  return {
    ssReadOnly: SpreadSheetReadOnly,
    applyTo: ApplyToList
  };
}

function addData(records) { // スプレッドシートに値を送信する関数
  var ss = SpreadsheetApp.openByUrl(SpreadSheetReadWrite); // スプレッドシートをURLで取得
  const lock = LockService.getScriptLock();
  if (lock.tryLock(10000)) {
    for (let i = 0; i < records.length; i++) {
      var sheet = ss.getSheetByName(records[i].applyTo); // スプレッドシートのシートをそのシートの名前で取得
      const now = new Date(); // 日時を取得
      sheet.appendRow([
        now.toLocaleString(),
        records[i].name,
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
