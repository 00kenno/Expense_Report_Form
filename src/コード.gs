/*
鳥科26代電装班長 永田賢之介
X: https://x.com/MeganeKinoko_
*/

//コード.gs

let ApplyToList = new Array();
let CategoryList = new Array();

//会計担当者へ/////////////////////////////

//修正可能箇所#1 適当なタイトルを設定してください．
const Title = "経費申請フォーム";

//修正可能箇所#2 部員全員が確認できる編集権限なしのスプシのリンクを張ってください．(ex."https://docs.google.com/spreadsheets/d/.../edit")
const SpreadSheetReadOnly = "https://docs.google.com/spreadsheets/d/.../edit";
  
//修正可能箇所#3 役持ちなどに渡す編集権限ありのスプシのリンクを貼ってください．#2のリンクと同一でも可です．(ex."https://docs.google.com/spreadsheets/d/.../edit")
const SpreadSheetReadWrite ="https://docs.google.com/spreadsheets/d/.../edit";

//修正可能箇所#4 申請先のスプシの「シート名(ApplyTo)」と「項目(Category)」を追加してください．ただし，「シート名」は確実にスプシの「シートの名前」と一致している必要があります．

//初期値: 
//ApplyToList.push("運営");
//CategoryList.push(["理大祭", "鳥コン", "新歓", "TF", "外部イベント", "ラジコン", "その他"]);
//ApplyToList.push("設計");
//CategoryList.push(["桁", "その他"]);
//ApplyToList.push("フラチ");
//CategoryList.push(["ハング", "レンタカー", "その他"]);
//ApplyToList.push("翼班");
//CategoryList.push(["木材", "スタイロ", "プランク", "フィルム", "消耗品", "レーザーカット", "その他"]);
//ApplyToList.push("接合班");
//CategoryList.push(["かんざし", "積層", "治具", "木フラ", "工具・ボルトなど", "尾翼", "ウィングレット", "消耗品", "その他"]);
//ApplyToList.push("コクピ班");
//CategoryList.push(["キャノピー", "御神体", "カウル", "フレーム", "ハッチ", "消耗品", "その他"]);
//ApplyToList.push("電装班");
//CategoryList.push(["基盤", "センサ類", "サーボ関連", "ケーブル類", "コネクタ類", "消耗品", "その他電子部品", "その他"]);

ApplyToList.push("運営");
CategoryList.push(["理大祭", "鳥コン", "新歓", "TF", "外部イベント", "ラジコン", "その他"]);
ApplyToList.push("設計");
CategoryList.push(["桁", "その他"]);
ApplyToList.push("フラチ");
CategoryList.push(["ハング", "レンタカー", "その他"]);
ApplyToList.push("翼班");
CategoryList.push(["木材", "スタイロ", "プランク", "フィルム", "消耗品", "レーザーカット", "その他"]);
ApplyToList.push("接合班");
CategoryList.push(["かんざし", "積層", "治具", "木フラ", "工具・ボルトなど", "尾翼", "ウィングレット", "消耗品", "その他"]);
ApplyToList.push("コクピ班");
CategoryList.push(["キャノピー", "御神体", "カウル", "フレーム", "ハッチ", "消耗品", "その他"]);
ApplyToList.push("電装班");
CategoryList.push(["基盤", "センサ類", "サーボ関連", "ケーブル類", "コネクタ類", "工具", "消耗品", "その他電子部品", "その他"]);

////////////////////////////////////////////////


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
    applyTo: ApplyToList,
    category: CategoryList
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
