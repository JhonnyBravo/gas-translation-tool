function doGet() {
    const parameters = new QueryParameters();
    const response: any = HtmlService.createTemplateFromFile("index");

    response.parameters = parameters;
    return response.evaluate().setTitle("Translation Tool");
}

/**
 * 外部 Web ページから HTML を取得する。
 * @param {string} url 取得対象とする Web ページの URL を指定する。
 * @return {string} response 取得したページの HTML 文字列を返す。
 */
function getContent(url: string) {
    const response = UrlFetchApp.fetch(url).getContentText();
    return response;
}

/**
 * 英語を日本語へ翻訳する。
 * @param {string} original 翻訳対象とする原文を指定する。
 * @return {string} response 訳文を返す。
 */
function getTranslation(original: string) {
    const response = LanguageApp.translate(original, "en", "ja");
    return response;
}
