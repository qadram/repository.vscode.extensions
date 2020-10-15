// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as helpers from 'yeoman-test';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let api = {
		/**
		 * Should return an array with all the items to be shown on the repository 
		 */
		getItems(): Array<any> {
			let result: Array<any> = [];

			//Every item can have extra fields, to prompt the user for additional information
			result.push({
				'id': 'ext-command-ts',
				'icon': './assets/images/pwa.svg',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['TypeScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension',
				'fields': [
					{
						"name": "name",
						"label": "Extension identifier",
						"type": "string"
					},
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean"
					},
					{
						"name": "pkgManager",
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
				'id': 'ext-command-js',
				'icon': '',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['JavaScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension'
			});
			return (result);
		},
		/**
		 * This function is called when the user executes a repository item
		 * @param id ID of the item to be executed
		 * @param params All parameters gathered on the UI
		 */
		execute(id: string, params: any) {
			let outputpath = params.outputpath;
			let prompts = {};
			if ((id === 'ext-command-ts') || (id === 'ext-command-js')) {
				prompts =
				{
					type: id,
					name: params.name,
					displayName: params.displayName,
					description: params.description,
					gitInit: params.gitInit,
					pkgManager: params.pkgManager
				};

			}

			process.chdir(outputpath);
			//@ts-ignore		
			helpers.run('./node_modules/generator-code/generators/app', { cwd: outputpath })
				.withPrompts(prompts) // Mock the prompt answers
				.toPromise().then(function () {
					vscode.window.showInformationMessage('Finished!!');
				});
		}
	};
	return (api);
}

// this method is called when your extension is deactivated
export function deactivate() { }
