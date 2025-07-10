# 経費精算申請フォーム

## 概要
- Googleスプレッドシートと直接接続する改良版フォームです．
- 複数項目の送信，税率計算，申請先や購入場所の個別設定などに対応しています．
> このリポジトリ内のdocsはGitHub Pagesで公開されており，フォームのファビコンはここから取得しています．

## 更新履歴
- 2025-05-31:
  - ファイルをアップロード．
- 2025-07-07:
  - 項目(Category)選択機能を実装．
  - アイテムが常に1つ以上存在するように修正．
  - 未入力欄の赤枠表示の問題を修正．
  - 警告メッセージの色を修正．

## 引継ぎの方法

|N|CAPTION|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|0|会計用アカウントでGoogleドライブを開く|
|:--|:--|
||<img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">**<a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">Googleドライブ</a>**|

|1|スプレッドシートを準備する|
|:--|:--|
||ヘッダーを準備することを勧める．|

|2|「新規」→「その他」→「Google Apps Script」から新しくプロジェクトを作成する|
|:--|:--|
||<img src="img/01_create_gas.png" style="max-height:500px;max-width:600px;">|

|3|「スクリプトを作成」を選択する|
|:--|:--|
||<img src="img/02_create_script_confirm.png" style="max-height:500px;max-width:600px">|

|4|「無題のプロジェクト」の名前を変更する|
|:--|:--|
||<img src="img/03_click_to_change_name.png" style="max-height:500px;max-width:600px;">|
||<img src="img/04_change_name.png" style="max-height:500px;max-width:600px;">|

|5|GitHub（<a href="https://github.com/00kenno/Expense_Report_Form/tree/main/example" target="_blank" rel="noopener noreferrer">/example</a>）から「コード.gs」の内容をコピーする|
|:--|:--|
||<img src="img/05_open_src.png" style="max-height:500px;max-width:600px;">|
||<img src="img/06_open_code_gs.png" style="max-height:500px;max-width:600px;">|
||<img src="img/07_copy_code_gs.png" style="max-height:500px;max-width:600px;">|

|6|「コード.gs」の内容を全て消去し，コピーした内容を貼り付ける|
|:--|:--|
||<img src="img/08_clear_code_gs.png" style="max-height:500px;max-width:600px;">|
||<img src="img/09_paste_code_gs.png" style="max-height:500px;max-width:600px;">|

|7|「Ctrl+S」もしくはフロッピーディスクのボタンをクリックしてプロジェクトを保存する|
|:--|:--|
||<img src="img/10_save_code_gs.png" style="max-height:500px;max-width:600px;">|


|20|コードの準備完了|
|:--|:--|
||<img src="img/25_code_ready.png" style="max-height:500px;max-width:600px;">|

|21|「デプロイ」から「新しいデプロイ」をクリックする|
|:--|:--|
||<img src="img/26_new_deploy.png" style="max-height:500px;max-width:600px;">|

|22|「種類の選択」の右側にある歯車マークをクリックし，「ウェブアプリ」をクリックする|
|:--|:--|
||<img src="img/27_select_deploy_type.png" style="max-height:500px;max-width:600px;">|

|23|「説明」に新しい説明文（ここでは「〇〇代会計への引継ぎ」 ）を追加する|
|:--|:--|
||<img src="img/28_enter_deploy_message.png" style="max-height:500px;max-width:600px;">|

|24|「アクセスできるユーザー」を「全員」に変更する|
|:--|:--|
||<img src="img/29_user_access.png" style="max-height:500px;max-width:600px;">|

|25|「デプロイ」をクリックする|
|:--|:--|
||<img src="img/30_confirm_deploy.png" style="max-height:500px;max-width:600px;">|

|26|「アクセスを承認」をクリックする|
|:--|:--|
||<img src="img/31_apply_access.png" style="max-height:500px;max-width:600px;">|

|27|会計用アカウントを選択|
|:--|:--|
||<img src="img/32_select_account.png" style="max-height:500px;max-width:600px;">|

|28|「Google hasn’t verified this app」と表示される画面で，左下の「Advanced」をクリックする|
|:--|:--|
||<img src="img/33_enter_advanced.png" style="max-height:500px;max-width:600px;">|

|29|開いたメニューにある「Go to（設定したプロジェクト名）」（ここでは「Go to マイフォーム」 ）をクリックする|
|:--|:--|
||<img src="img/34_go_to_project.png" style="max-height:500px;max-width:600px;">|

|30|「Allow」をクリックし，Googleアカウントへのアクセスを承認する|
|:--|:--|
||<img src="img/35_allow_access.png" style="max-height:500px;max-width:600px;">|

|31|「完了」をクリックし，デプロイを完了する|
|:--|:--|
||<img src="img/36_complete_deploy.png" style="max-height:500px;max-width:600px;">|


