// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as helpers from 'yeoman-test';
import * as path from 'path';

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
				'icon': './assets/images/extension.svg',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['TypeScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension',
				'fields': [
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
				'icon': './assets/images/extension.svg',
				'caption': 'Visual Studio Code Extension',
				'description': 'Creates a new Visual Studio Code Extension',
				'languages': ['JavaScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension'
			});

			result.push({
				'id': 'ext-color-theme',
				'icon': './assets/images/colortheme.svg',
				'caption': 'Visual Studio Code Color Theme',
				'description': 'Creates a new Visual Studio Code Color Theme',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Color Theme'],
				'projectname': 'MyColorTheme'
			});			

			result.push({
				'id': 'ext-language-support',
				'icon': './assets/images/languagesupport.svg',
				'caption': 'Visual Studio Code Language Support',
				'description': 'Creates a project to add a new language to Visual Studio Code',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Language Support'],
				'projectname': 'MyLanguageSupport'
			});						

			result.push({
				'id': 'ext-code-snippets',
				'icon': './assets/images/codesnippets.svg',
				'caption': 'Visual Studio Code Snippets',
				'description': 'Creates a project to provide Code Snippets',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Code Snippets'],
				'projectname': 'MyCodeSnippets'
			});				
			
			result.push({
				'id': 'ext-key-map',
				'icon': './assets/images/keymap.svg',
				'caption': 'Visual Studio Code Keymap',
				'description': 'Creates a new keymap',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Keymap'],
				'projectname': 'MyKeymap'
			});		
			
			result.push({
				'id': 'ext-extension-pack',
				'icon': '',
				'caption': 'Visual Studio Code Extension Pack',
				'description': 'Creates a new extension pack',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtensionPack'
			});									
			return (result);
		},
		/**
		 * This function is called when the user executes a repository item
		 * @param id ID of the item to be executed
		 * @param params All parameters gathered on the UI
		 */
		async execute(id: string, params: any): Promise<string> {
			return new Promise<string>((resolve, reject) => {
				let outputpath = params.outputpath;
				let prompts = {};
				if ((id === 'ext-command-ts') || (id === 'ext-command-js')) {
					prompts =
					{
						type: id,
						name: params.projectname,
						displayName: params.displayName,
						description: params.description,
						gitInit: params.gitInit,
						pkgManager: params.pkgManager
					};

				}

				process.chdir(outputpath);
				let newappfolder = path.join(outputpath, params.projectname);
				//@ts-ignore		
				helpers.run(path.join(context.extensionPath, 'node_modules', 'generator-code', 'generators', 'app'), { cwd: outputpath })
					.withOptions({
						skipInstall: false
					})
					.withPrompts(prompts) // Mock the prompt answers
					.toPromise().then(function () {
						resolve(newappfolder);
						vscode.window.showInformationMessage('Finished!!');
					}, (reason) => {
						reject(reason);
					});
			});
		}
	};
	return (api);
}

// this method is called when your extension is deactivated
export function deactivate() { }
