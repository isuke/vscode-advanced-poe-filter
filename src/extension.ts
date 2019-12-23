import * as vscode from 'vscode'

import OutlineProvider from './OutlineProvider'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(
      [
        { language: 'advancedpoefilter', pattern: '**/*.advancedfilter' },
        { language: 'advancedpoefilter', scheme: 'untitled' },
      ],
      new OutlineProvider()
    )
  )
}

export function deactivate() {}
