import * as vscode from 'vscode'

export default class OutlineProvider implements vscode.DocumentSymbolProvider {
  static readonly pattern: RegExp = /^(Show|Hide|Unset|Var|Prop)[^\n]+"([^\n]+)"$/gm

  public provideDocumentSymbols(document: vscode.TextDocument, _token: vscode.CancellationToken): vscode.SymbolInformation[] {
    let matchList: Array<any> = []
    let match: RegExpExecArray | null
    while ((match = OutlineProvider.pattern.exec(document.getText()))) {
      if (match) {
        matchList.push({
          activity: match[1],
          name: match[2],
          index: match.index,
        })
      }
    }

    return matchList.map((match) => {
      return new vscode.SymbolInformation(match.name, vscode.SymbolKind.String, '', new vscode.Location(document.uri, document.positionAt(match.index)))
    })
  }
}
