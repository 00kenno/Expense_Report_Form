function initializeData () {
  
  //会計担当者へ/////////////////////////////

  //修正可能箇所#1 適当なタイトルを設定してください．
  ExpenseReportForm.setTitle("経費精算申請フォーム");

  //修正可能箇所#2 スプシのリンクを張ってください．(ex."https://docs.google.com/spreadsheets/d/.../edit")
  ExpenseReportForm.setSpreadSheetUrl("https://docs.google.com/spreadsheets/d/.../edit");

  //修正可能箇所#3 申請先のスプシの「シート名(ApplyTo)」と「項目(Category)」を追加してください．
  //ただし，「シート名」は確実にスプシの「シートの名前」と一致している必要があります．
  ExpenseReportForm.addApplyTo("運営");
  ExpenseReportForm.addCategory("運営", "理大祭");
  ExpenseReportForm.addCategory("運営", "鳥コン");
  ExpenseReportForm.addCategory("運営", "新歓");
  ExpenseReportForm.addCategory("運営", "TF");
  ExpenseReportForm.addCategory("運営", "外部イベント");
  ExpenseReportForm.addCategory("運営", "ラジコン");
  ExpenseReportForm.addCategory("運営", "その他");

  ExpenseReportForm.addApplyTo("設計");
  ExpenseReportForm.addCategory("設計", "桁");
  ExpenseReportForm.addCategory("設計", "その他");

  ExpenseReportForm.addApplyTo("フラチ");
  ExpenseReportForm.addCategory("フラチ", "ハング");
  ExpenseReportForm.addCategory("フラチ", "レンタカー");

  ExpenseReportForm.addApplyTo("翼班");
  ExpenseReportForm.addCategory("翼班", "木材");
  ExpenseReportForm.addCategory("翼班", "スタイロ");
  ExpenseReportForm.addCategory("翼班", "プランク");
  ExpenseReportForm.addCategory("翼班", "フィルム");
  ExpenseReportForm.addCategory("翼班", "消耗品");
  ExpenseReportForm.addCategory("翼班", "レーザーカット");
  ExpenseReportForm.addCategory("翼班", "その他");

  ExpenseReportForm.addApplyTo("接合班");
  ExpenseReportForm.addCategory("接合班", "かんざし");
  ExpenseReportForm.addCategory("接合班", "積層");
  ExpenseReportForm.addCategory("接合班", "治具");
  ExpenseReportForm.addCategory("接合班", "木フラ");
  ExpenseReportForm.addCategory("接合班", "工具・ボルトなど");
  ExpenseReportForm.addCategory("接合班", "尾翼");
  ExpenseReportForm.addCategory("接合班", "ウィングレット");
  ExpenseReportForm.addCategory("接合班", "消耗品");
  ExpenseReportForm.addCategory("接合班", "その他");

  ExpenseReportForm.addApplyTo("コクピ班");
  ExpenseReportForm.addCategory("コクピ班", "キャノピー");
  ExpenseReportForm.addCategory("コクピ班", "御神体");
  ExpenseReportForm.addCategory("コクピ班", "カウル");
  ExpenseReportForm.addCategory("コクピ班", "フレーム");
  ExpenseReportForm.addCategory("コクピ班", "ハッチ");
  ExpenseReportForm.addCategory("コクピ班", "消耗品");
  ExpenseReportForm.addCategory("コクピ班", "その他");

  ExpenseReportForm.addApplyTo("電装班");
  ExpenseReportForm.addCategory("電装班", "基板");
  ExpenseReportForm.addCategory("電装班", "マイコン");
  ExpenseReportForm.addCategory("電装班", "センサ類");
  ExpenseReportForm.addCategory("電装班", "サーボ関連");
  ExpenseReportForm.addCategory("電装班", "ケーブル・コネクタ類");
  ExpenseReportForm.addCategory("電装班", "抵抗・コンデンサ");
  ExpenseReportForm.addCategory("電装班", "LED・ダイオード");
  ExpenseReportForm.addCategory("電装班", "電源関係");
  ExpenseReportForm.addCategory("電装班", "消耗品");
  ExpenseReportForm.addCategory("電装班", "その他電子部品");
  ExpenseReportForm.addCategory("電装班", "その他");

  /////////////////////////////////////////

  return ExpenseReportForm.syncData();
}

function submit (records) {
  initializeData();
  return ExpenseReportForm.addData(records);
}

function doGet () {
  initializeData();
  return ExpenseReportForm.execute();
}