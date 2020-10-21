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
				'description': 'A template to create a new Visual Studio Code Extension using TypeScript as programming language.',
				'languages': ['TypeScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension',
				'fields': [
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Extension)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					},
					{
						"name": "pkgManager",
						"label": "Package manager",
						"type": "dropdown",
						"default": "npm",
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
				'description': 'A template to create a new Visual Studio Code Extension using JavaScript as programming language.',
				'languages': ['JavaScript'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtension',
				'fields': [
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Extension)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					},
					{
						"name": "pkgManager",
						"label": "Package manager",
						"type": "dropdown",
						"default": "npm",
						"options": [
							"npm",
							"yarn"
						]
					}
				]
			});

			result.push({
				'id': 'ext-colortheme',
				'icon': './assets/images/colortheme.svg',
				'caption': 'Visual Studio Code Color Theme',
				'description': 'Generates a new Visual Studio Code Color Theme from scratch or based on an existing TextMate theme.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Color Theme'],
				'projectname': 'MyColorTheme',
				'fields': [
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Color Theme)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "themeImportType",
						"label": "Import or convert an existing TextMate color theme?",
						"type": "dropdown",
						"default": "No, start fresh",
						"options": [
							"No, start fresh",
							"Yes, import an existing theme but keep it as tmTheme file.",
							"Yes, import an existing theme and inline it in the Visual Studio Code color theme file."
						]
					},
					{
						"name": "themeURL",
						"label": "Enter the location (URL (http, https) or file name) of the tmTheme file",
						"type": "string",
						"placeholder": "e.g., http://www.monokai.nl/blog/wp-content/asdev/Monokai.tmTheme."
					},
					{
						"name": "themeName",
						"label": "Theme Name",
						"type": "string",
						"placeholder": "What's the name of your theme shown to the user? (i.e. Green)"
					},
					{
						"name": "themeBase",
						"label": "Select a base theme:",
						"type": "dropdown",
						"default": "Dark",
						"options": [
							"Dark",
							"Light",
							"High Contrast"
						]
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-language',
				'icon': './assets/images/languagesupport.svg',
				'caption': 'Visual Studio Code Language Support',
				'description': 'Creates a project to add support for a new programming language to Visual Studio Code.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Language Support'],
				'projectname': 'MyLanguageSupport',
				'fields': [
					{
						"name": "tmLanguageURL",
						"label": "Language URL",
						"type": "string",
						"placeholder": "URL or file to import, or none for new."
					},
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Color Theme)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "languageId",
						"label": "Language id",
						"type": "string",
						"placeholder": "Enter the id of the language. The id is an identifier and is single, lower-case name such as \'php\', \'javascript\'"
					},
					{
						"name": "languageName",
						"label": "Language name",
						"type": "string",
						"placeholder": "Enter the name of the language. The name will be shown in the VS Code editor mode selector"
					},
					{
						"name": "languageExtensions",
						"label": "File extensions",
						"type": "string",
						"placeholder": "Enter the file extensions of the language. Use commas to separate multiple entries (e.g. .ruby, .rb)"
					},
					{
						"name": "languageScopeName",
						"label": "Scope names",
						"type": "string",
						"placeholder": "Enter the root scope name of the grammar (e.g. source.ruby)"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-snippets',
				'icon': './assets/images/codesnippets.svg',
				'caption': 'Visual Studio Code Snippets',
				'description': 'Code snippets are templates that make it easier to enter repeating code patterns, use this item to create a project that provide them.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Code Snippets'],
				'projectname': 'MyCodeSnippets',
				'fields': [
					{
						"name": "snippetPath",
						"label": "Folder name for import or none for new",
						"type": "string",
						"placeholder": "Folder location that contains Text Mate (.tmSnippet) and Sublime snippets (.sublime-snippet) or press ENTER to start with a new snippet file."
					},
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Color Theme)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "languageId",
						"label": "Language id",
						"type": "string",
						"placeholder": "Enter the language for which the snippets should appear. The id is an identifier and is single, lower-case name such as 'php', 'javascript'"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-keymap',
				'icon': './assets/images/keymap.svg',
				'caption': 'Visual Studio Code Keymap',
				'description': 'Creates a new extension that provides a keymap.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Keymap'],
				'projectname': 'MyKeymap',
				'fields': [
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Color Theme)"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});

			result.push({
				'id': 'ext-extensionpack',
				'icon': './assets/images/extensionpack.svg',
				'caption': 'Visual Studio Code Extension Pack',
				'description': 'Creates a new extension pack to bundle several extensions together.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Extension'],
				'projectname': 'MyExtensionPack',
				'fields': [
					{
						"name": "addExtensions",
						"label": "Add the currently installed extensions to the extension pack?",
						"type": "boolean",
						"default": "true",
					},
					{
						"name": "displayName",
						"label": "Display Name",
						"type": "string",
						"placeholder": "The display name for the extension used in the VS Code gallery (i.e. My Extension Pack)"
					},
					{
						"name": "description",
						"label": "Description",
						"type": "string",
						"placeholder": "This helps people discover your package, as it's listed in 'npm search'"
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
			});
			result.push({
				'id': 'ext-localization',
				'icon': './assets/images/localization.svg',
				'caption': 'Visual Studio Code Language Pack (Localization)',
				'description': 'Creates a new language pack to localize Visual Studio Code.',
				'languages': ['JSON'],
				'platforms': ['Linux', 'macOS', 'Windows', 'ARM'],
				'types': ['Language Pack'],
				'projectname': 'MyLanguagePack',
				'fields': [
					{
						"name": "lpLanguageId",
						"label": "Language id",
						"type": "string",
						"placeholder": "Enter the language identifier as used on transifex (e.g. bg, zh-Hant)",
					},
					{
						"name": "lpLanguageName",
						"label": "Language name",
						"type": "string",
						"placeholder": "Enter the language name in English (e.g. 'Bulgarian', 'Dutch')."
					},
					{
						"name": "lpLocalizedLanguageName",
						"label": "Localized language name",
						"type": "string",
						"placeholder": "Enter the language name in its original language"
					},
					{
						"name": "pkgManager",
						"label": "Package manager",
						"type": "dropdown",
						"default": "npm",
						"options": [
							"npm",
							"yarn"
						]
					},
					{
						"name": "gitInit",
						"label": "Initialize git repository",
						"type": "boolean",
						"default": true
					}
				]
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
				else if (id === 'ext-language') {
					prompts =
					{
						type: id,
						name: params.projectname,
						tmLanguageURL: params.tmLanguageURL,
						displayName: params.displayName,
						description: params.description,
						languageId: params.languageId,
						languageName: params.languageName,
						languageExtensions: params.languageExtensions,
						languageScopeName: params.languageScopeName,
						gitInit: params.gitInit
					};
				}
				else if (id === 'ext-snippets') {
					prompts =
					{
						type: id,
						name: params.projectname,
						snippetPath: params.snippetPath,
						displayName: params.displayName,
						description: params.description,
						languageId: params.languageId,
						gitInit: params.gitInit
					};
				}
				else if (id === 'ext-keymap') {
					prompts =
					{
						type: id,
						name: params.projectname,
						displayName: params.displayName,
						description: params.description,
						gitInit: params.gitInit
					};
				}
				else if (id === 'ext-colortheme') {
					let themeimporttypes: Map<string, string> = new Map();
					themeimporttypes.set('No, start fresh', 'new');
					themeimporttypes.set('Yes, import an existing theme but keep it as tmTheme file.', 'import-keep');
					themeimporttypes.set('Yes, import an existing theme and inline it in the Visual Studio Code color theme file.', 'import-inline');


					let themebases: Map<string, string> = new Map();
					themebases.set('Dark', 'vs-dark');
					themebases.set('Light', 'vs');
					themebases.set('High Contrast', 'hc-black');
					prompts =
					{
						type: id,
						name: params.projectname,
						displayName: params.displayName,
						description: params.description,
						themeImportType: themeimporttypes.get(params.themeImportType),
						themeURL: params.themeURL,
						themeName: params.themeName,
						themeBase: themebases.get(params.themeBase),
						gitInit: params.gitInit
					};
				}
				else if (id === 'ext-extensionpack') {
					prompts =
					{
						type: id,
						name: params.projectname,
						addExtensions: params.addExtensions,
						displayName: params.displayName,
						description: params.description,
						gitInit: params.gitInit
					};
				}
				if (id === 'ext-localization') {
					prompts =
					{
						type: id,
						name: params.projectname,
						lpLanguageId: params.lpLanguageId,
						lpLanguageName: params.lpLanguageName,
						lpLocalizedLanguageName: params.lpLocalizedLanguageName,
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
