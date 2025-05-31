# 経費精算申請フォーム

## 概要
- 1回で複数項目を送信できるようにした改良版フォームです．
- Googleスプレッドシートと直接接続します．
- 項目選択（「ラジコン」「理大祭」など）は未実装

## 既知の問題
- アイテムが存在しない状況があり得る．
- 一括入力欄の赤枠が外れない．

## 引継ぎの方法

|N|CAPTION|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|1|スプレッドシートが存在するGoogleドライブを開く|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|2|「新規」→「その他」→「Google Apps Script」から新しくプロジェクトを作成する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|3|「スクリプトを作成」を選択する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|4|「無題のプロジェクト」の名前を変更する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|5|「＋」→「HTML」からファイルを追加する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|6|名前を「index」に変更する（「index.html」となれば良い」）|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|7|同様に「script」「style」を追加する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|8|もとからある内容を全て消去し[ここ](/src)にある内容を全てコピーする|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|9|「コード.gs」内の「会計担当者へ」の指示に従って必要事項を入力する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|10|「Ctrl+S」もしくはフロッピーディスクのボタンをクリックして保存する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|11|「デプロイ」→「新しいデプロイ」で新しいデプロイを作成する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|12|「種類の選択」の右側にある歯車マークをクリックし「ウェブアプリ」を選択する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|13|「説明」に新しい説明文（「1回目のデプロイ」など）を追加する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|

|14|「アクセスできるユーザー」を「全員」に変更する|
|:--|:--|
||<img src="https://file.51pptmoban.com/d/file/2023/06/04/b3925630992729172938c08655e5cfd0.jpg" style="max-height=500px;">|
