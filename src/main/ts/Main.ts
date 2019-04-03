function doGet() {
    const parameters = new QueryParameters();
    const response: any = HtmlService.createTemplateFromFile("index");

    response.parameters = parameters;
    return response.evaluate().setTitle("Translation Tool");
}

/**
 * 外部 Web ページから HTML を取得する。
 * @param {Object} objForm パラメータを入力したフォームを受取る。
 * @return {string} response 取得したページの HTML 文字列を返す。
 */
function getContent(objForm) {
    const address = objForm.address;
    const response = UrlFetchApp.fetch(address).getContentText();
    return response;
}

/**
 * 英語を日本語へ翻訳する。
 * @param {Object} objForm パラメータを入力したフォームを受取る。
 * @return {string} response 翻訳した文字列を返す。
 */
function getTranslation(objForm) {
    const original = objForm.original;
    const response = LanguageApp.translate(original, "en", "ja");
    return response;
}
