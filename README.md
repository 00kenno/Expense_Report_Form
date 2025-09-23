# 経費精算申請フォーム

## 概要
- 東京理科大学鳥人間サークル鳥科の経費精算申請フォームです．
- Googleスプレッドシートと直接接続します．
- 複数項目の送信，税率計算，申請先や購入場所の個別設定などに対応しています．
- 何かあれば制作者に[XのDM](https://x.com/MeganeKinoko_)やメール(irongolem0100@gmail.com)などで連絡してください．
> [!NOTE]
> このリポジトリ内のdocsはGitHub Pagesで公開されており，フォームのファビコンはここから取得しています．

## 更新履歴
- 2025-09-17:
  - 「割引額」入力欄の未入力チェックを無効化．
- 2025-07-11:
  - ライブラリのデプロイを利用する形式に変更．
- 2025-07-07:
  - 項目(Category)選択機能を実装．
  - アイテムが常に1つ以上存在するように修正．
  - 未入力欄の赤枠表示の問題を修正．
  - 警告メッセージの色を修正．
- 2025-05-31:
  - ファイルをアップロード．

## 引継ぎの方法
---

|0|Googleドライブを開く|
|:--|:--|
||会計用アカウントでログインしてください．|
||<img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">**<a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">Googleドライブ</a>**|

---

|1|スプレッドシートの準備|
|:--|:--|
||画像下部のバーからシートを必要数作成し，適当なシート名に変更してください．作成したシートのシート名は後で使用します．|
||<img src="img/01_spreadsheet_preparation.png" style="max-height:500px;max-width:600px;">|

また，すべてのシートに以下のようなヘッダーを準備してください．
|タイムスタンプ|名前|項目|品名|単価|個数|単価×個数|別途消費税|送料・電車賃・代引き手数料|割引|請求金額|購入場所|購入目的|
|--|--|--|--|--|--|--|--|--|--|--|--|--|
|-|-|-|-|-|-|-|-|-|-|-|-|-|

---

|2|新しいプロジェクトの作成|
|:--|:--|
||「新規」→「その他」→「Google Apps Script」をクリックしてください．|
||<img src="img/02_create_gas.png" style="max-height:500px;max-width:600px;">|
||「スクリプトを作成」をクリックしてください．|
||<img src="img/03_create_script_confirm.png" style="max-height:500px;max-width:600px">|

---

|3|プロジェクト名の変更|
|:--|:--|
||「無題のプロジェクト」をクリックしてください．|
||<img src="img/04_click_to_change_name.png" style="max-height:500px;max-width:600px;">|
||プロジェクト名を変更し，「名前を変更」をクリックしてください．|
||<img src="img/05_change_project_name.png" style="max-height:500px;max-width:600px;">|

---

|4|ライブラリの追加|
|:--|:--|
||「ライブラリ」の右にある「＋」をクリックしてください．|
||<img src="img/06_add_library.png" style="max-height:500px;max-width:600px;">|
||スクリプトIDを入力し，「検索」をクリックしてください．（スクリプトIDは以下でコピーできます．）|
||<img src="img/07_enter_script_id.png" style="max-height:500px;max-width:600px;">|
||最新の「バージョン」（一番大きな数字）を選択し，「追加」をクリックしてください．（IDは変更しないでください．）|
||<img src="img/08_searched_library.png" style="max-height:500px;max-width:600px;">|
||ライブラリが追加されます．|
||<img src="img/09_added_library.png" style="max-height:500px;max-width:600px;">|

**スクリプトIDはこちらからコピーできます．**
```
1lqOvEXcBEAAfzkD4aZGJjShQuhE7bcA3JlCZrCoaVzm-0qRNzXQG-14h
```

---

|5|GitHub（<a href="https://github.com/00kenno/Expense_Report_Form/blob/main/example/%E3%82%B3%E3%83%BC%E3%83%89.gs" target="_blank" rel="noopener noreferrer">/example/コード.gs</a>）または以下のコードスニペットから「コード.gs」の例をコピーする|
|:--|:--|
||<img src="img/10_copy_code_gs.png" style="max-height:500px;max-width:600px;">|

**コード.gs**
```
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
```

---

|6|「コード.gs」の編集|
|:--|:--|
||「コード.gs」の内容を全て消去してください．|
||<img src="img/11_clear_code_gs.png" style="max-height:500px;max-width:600px;">|
||「5」でコピーした内容を貼り付けてください．|
||<img src="img/12_paste_code_gs.png" style="max-height:500px;max-width:600px;">|

以下のような関数を用いて，フォームをカスタマイズします．
- ExpenseReportForm.setTitle()
  - タイトルを設定します．
- ExpenseReportForm.setSpreadSheetUrl()
  - スプシのURLを設定します．
> アドレスバーからコピーすると`https://docs.google.com/spreadsheets/d/.../edit?gid=xxxxxxxxx#gid=xxxxxxxxx`となっていることがほとんどですが，**"?"以下を省いた`https://docs.google.com/spreadsheets/d/.../edit`を設定してください．**
- ExpenseReportForm.addApplyTo()
  - 申請先（班）を追加します．**「1」で作成したシートの名前と完全に一致させてください．**
- ExpenseReportForm.addCategory()
  - 項目を追加します．

---

|7|プロジェクトの保存|
|:--|:--|
||「Ctrl+S」もしくはフロッピーディスクのボタンをクリックしてください．|
||<img src="img/13_save_project.png" style="max-height:500px;max-width:600px;">|

---

|8|初回デプロイ|
|:--|:--|
||「新しいデプロイ」をクリックしてください．|
||<img src="img/14_new_deploy.png" style="max-height:500px;max-width:600px;">|
||「種類の選択」の右側にある歯車マークをクリックし，「ウェブアプリ」をクリックしてください．|
||<img src="img/15_select_deploy_type.png" style="max-height:500px;max-width:600px;">|
||「新しい説明文」を設定してください．|
||<img src="img/16_deploy_message.png" style="max-height:500px;max-width:600px;">|
||「アクセスできるユーザー」を「全員」に変更し，「デプロイ」をクリックしてください．|
||<img src="img/17_user_access.png" style="max-height:500px;max-width:600px;">|
||「アクセスを承認」をクリックしてください．|
||<img src="img/18_apply_access.png" style="max-height:500px;max-width:600px;">|
||会計用アカウントを選択してください．|
||<img src="img/19_select_account.png" style="max-height:500px;max-width:600px;">|
||「Google hasn’t verified this app」と表示される画面で，左下の「Advanced」をクリックしてください．|
||<img src="img/20_enter_advanced.png" style="max-height:500px;max-width:600px;">|
||開いたメニューにある「Go to（設定したプロジェクト名）」（ここでは「Go to マイフォーム」 ）をクリックしてください．|
||<img src="img/21_go_to_project.png" style="max-height:500px;max-width:600px;">|
||「Allow」をクリックし，Googleアカウントへのアクセスを承認してください．|
||<img src="img/22_allow_access.png" style="max-height:500px;max-width:600px;">|
||デプロイが更新されます．「ウェブアプリ」のURLからフォームにアクセスできます．「完了」を押すと閉じることができます．|
||<img src="img/23_complete_deploy.png" style="max-height:500px;max-width:600px;">|
||フォームへアクセスするURLは「デプロイを管理」からも取得できます．|
||<img src="img/24_manage_deploys.png" style="max-height:500px;max-width:600px;">|
||「ウェブアプリ」のURLからフォームにアクセスできます．|
||<img src="img/25_deploys.png" style="max-height:500px;max-width:600px;">|

---

## デプロイの更新
申請先（班）や項目を追加した場合に，その変更を適用する際はデプロイを更新する必要があります．  
以下の手順で，同じURLを使い続けつつ，変更を加えることができます．

---

|0|ファイルの変更|
|:--|:--|
||「コード.gs」に変更を加え，プロジェクトを保存します．|
||<img src="img/13_save_project.png" style="max-height:500px;max-width:600px;">|

---

|1|デプロイを編集|
|:--|:--|
||「デプロイを管理」を開いた後，ペンのマークの「編集」をクリックします．|
||<img src="img/26_modify_deploy.png" style="max-height:500px;max-width:600px;">|
||バージョンを「新バージョン」に，説明も違うものに変更し，「デプロイ」をクリックします．|
||<img src="img/27_modified_deploy.png" style="max-height:500px;max-width:600px;">|
||デプロイが更新されます．「ウェブアプリ」のURLは同じですが，内容は変更されているはずです．|
||<img src="img/28_updated_deploy.png" style="max-height:500px;max-width:600px;">|

---
