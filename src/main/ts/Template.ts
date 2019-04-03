/**
 * HTML ファイルを挿入する。
 * @param {string} fileName 差し込み対象とする HTML ファイルの名前を指定する。
 * @return {string} content 指定したファイルの HTML 文字列を返す。
 */
function includeHtml(fileName: string): string {
    const response = HtmlService.createHtmlOutputFromFile(fileName);
    return response.getContent();
}

/**
 * HTML テンプレートファイルを挿入する。
 * @param {string} fileName 差し込み対象とするテンプレートファイルの名前を指定する。
 * @param {Object} parameters パラメータとしてテンプレートファイルへ渡すオブジェクトを指定する。
 * @return {any} content 指定したファイルの HTML 文字列を返す。
 */
function includeTemplate(fileName: string, parameters: Object): any {
    const response: any = HtmlService.createTemplateFromFile(fileName);

    if (parameters !== undefined) {
        response.parameters = parameters;
    }

    return response.evaluate().getContent();
}
