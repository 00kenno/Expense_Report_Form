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

|1|スプレッドシートの編集権限のあるアカウントでGoogleドライブを開く|
|:--|:--|
||<img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">**<a href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer">Googleドライブ</a>**|

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

|5|GitHubから「コード.gs」の内容をコピーする|
|:--|:--|
||<img src="img/05_open_src.png" style="max-height:500px;max-width:600px;">|
||<img src="img/06_open_code_gs.png" style="max-height:500px;max-width:600px;">|
||<img src="img/07_copy_code_gs.png" style="max-height:500px;max-width:600px;">|

|6|「コード.gs」の内容を全て消去し，コピーした内容を貼り付ける|
|:--|:--|
||<img src="img/08_clear_code_gs.png" style="max-height:500px;max-width:600px;">|
||<img src="img/09_paste_code_gs.png" style="max-height:500px;max-width:600px;">|

|7|プロジェクトを保存する|
|:--|:--|
||<img src="img/10_save_code_gs.png" style="max-height:500px;max-width:600px;">|

|8|もとからある内容を全て消去し[ここ](/src)にある内容を全てコピーする|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|9|「コード.gs」内の「会計担当者へ」の指示に従って必要事項を入力する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|10|「Ctrl+S」もしくはフロッピーディスクのボタンをクリックして保存する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|11|「デプロイ」→「新しいデプロイ」で新しいデプロイを作成する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|12|「種類の選択」の右側にある歯車マークをクリックし「ウェブアプリ」を選択する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|13|「説明」に新しい説明文（「1回目のデプロイ」など）を追加する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|

|14|「アクセスできるユーザー」を「全員」に変更する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height:500px;max-width:600px;">|
