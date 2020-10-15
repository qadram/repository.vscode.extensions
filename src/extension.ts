// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let api = {
		getItems(): Array<any> {
			let result: Array<any> = [];

			result.push({
				'icon': './assets/images/pwa.svg',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['TypeScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension',
				'fields': [
					{
						"name": "identifier",
						"label": "Extension identifier",
						"type": "string"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string"
					},
					{
						"name": "initializegit",
						"label": "Initialize git repository",
						"type": "boolean"
					},
					{
						"name": "packagemanager",
						"label": "Package manager",
						"type": "dropdown",
						"options": [
							"npm",
							"yarn"
						]
					}
				]
			});

			result.push({
				'icon': '',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['JavaScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension'
			});
			return (result);
		}
	};
	return (api);
}

// this method is called when your extension is deactivated
export function deactivate() { }
