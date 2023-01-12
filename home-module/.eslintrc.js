module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
	],
	// "parser": "@babel/eslint-parser"
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},

	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['.', 'node_modules'],
			},
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension,

			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: ['plugin:@typescript-eslint/recommended'],

			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
		},
	],
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				semi: true,
				singleQuote: true,
				bracketSpacing: true,
			},
		],
		'import/no-unresolved': 'error',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'react/prop-types': 0,
		// "sort-imports": [
		// 	"error",
		// 	{
		// 		"ignoreCase": false,
		// 		"ignoreDeclarationSort": false,
		// 		"ignoreMemberSort": false,
		// 		"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
		// 		"allowSeparatedGroups": false
		// 	}
		// ]
	},
	ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
};
