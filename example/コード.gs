function initializeData () {
  
  //会計担当者へ/////////////////////////////

  // #1 適当なタイトルを設定してください．
  ExpenseReportForm.setTitle("経費精算申請フォーム");

  // #1.5 タイトル上の画像とファビコンを設定してください．
  // ※デフォルトで鳥科仕様になっているため，鳥科で利用する場合には設定不要です．
  // 以下の関数のコメントアウトを解除して，タイトル上に表示される画像とファビコンを設定できます．
  // 引数なしで実行すると，鳥科のロゴとファビコンが表示されなくなります．
  // ExpenseReportForm.setTitleLogoUrl(); // 設定例 : "https://lh3.googleusercontent.com/d/{画像のファイルID}"
  // ExpenseReportForm.setFabiconUrl(); // 設定例 : "https://drive.google.com/uc?id={画像のファイルID}&.png"（こちらは拡張子必須です）

  // #2 申請先のスプシの「シート名(ApplyTo)」と「項目(Category)」を追加してください．
  // スプシにない「シート名」は自動的にその名前で作成されます．
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
  ExpenseReportForm.addCategory("電装班", "マイコン・IC・メモリなど");
  ExpenseReportForm.addCategory("電装班", "センサーなど");
  ExpenseReportForm.addCategory("電装班", "モーター・スピーカーなど");
  ExpenseReportForm.addCategory("電装班", "ケーブル・コネクタなど");
  ExpenseReportForm.addCategory("電装班", "LED・ディスプレイなど");
  ExpenseReportForm.addCategory("電装班", "抵抗・コンデンサーなど");
  ExpenseReportForm.addCategory("電装班", "電源・バッテリーなど");
  ExpenseReportForm.addCategory("電装班", "筐体・構造材料など");
  ExpenseReportForm.addCategory("電装班", "消耗品・固定具など");
  ExpenseReportForm.addCategory("電装班", "3Dプリンタ用品など");
  ExpenseReportForm.addCategory("電装班", "その他");
  ExpenseReportForm.addCategory("電装班", "シミュレーター");

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