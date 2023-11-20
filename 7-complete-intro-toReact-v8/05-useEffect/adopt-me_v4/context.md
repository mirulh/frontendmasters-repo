### This is the continuation of adopt-me project

## Deep dive into all of the components used in .eslintrc.json

# - What is eslintrc.json file?

- `eslintrc.json` file is a configuration file used by ESLint, a popular JavaScript linter, to define and enforce coding style and best practices to improve code quality

## Components -

# 1.

"extends": [
"eslint:recommended",
"plugin:import/errors",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended",
"prettier"
],

**eslint:recommended** ->> This extends the ESLint core configuration that includes a set of rules that are considered to be helpful in many projects. `These rules cover common errors` and best practices to improve code quality

**plugin:import/errors** ->> This extends the configuration provided by the ESLint plugin for handling ES6 import/export syntax. It includes rules that `help in detecting import/export error in your code`.

**plugin:react/recommended** ->> This extends the recommended configuration provided by the ESLint plugin for React. It includes rules specifically tailored for React applications, `focusing on best practices and common pitfalls`.

**plugins:jsx-a11y/recommended** ->> This extends the recommended configuration provided by the ESLint plugin for accessibility in React applications. It includes rules related to JSX elements to `ensure accessibility best practices are followed`.

**prettier** ->> This does not extend ESLint rules directly. Instead, it allows ESLint to understand and work harmoniously with Prettier, a code formatting tool. It `ensures that ESLint doesn't enforce rules that conflict with Prettier's formatting`.

---

# 2.

"rules": {
"react/prop-types": 0,
"react/react-in-jsx-scope": 0
},

**react/prop-types:0** ->> This rule comes from the "eslint-plugin-react" package and it's related to React. It specifically deals with prop type validation. `Setting it to "0" turns off this rule, which means ESLint won't warn or throw errors if you don't specify prop types` for your React components.

_Usage_: This might be useful in projects where you're not using prop types or when you're using an alternative like Typescript for type checking.

**react/react-in-jsx-scope:0** ->> This rules also comes from 'eslint-plugin-react' and is related to the scope of React in JSX files. `When set to "0", it disables the requirement for importing React when using JSX`. This rule being set to "0" allows using JSX without explicitly importing React.

_Usage_: Setting these rules to "0" effectively turns them off, implying that the code won't be flagged for violating these specific rules by ESLint.

## Additional note:

The numerical values in ESLint configuration have different meanings:

- '0' means off/disabled
- '1' means a warning
- '2' means an error

---

# 3.

"plugins": ["react", "import", "jsx-a11y"],

In ESLint, the "plugins" key in the .eslintrc.json file is used to specify the plugins that contain additional rules that you want to apply to your codebase

**react** ->> This plugin (eslint-plugin-react) provides ESLint rules specifies to React. It includes rules related to JSX, prop types, hooks, and other best practices when writing React code.

**import** ->> This plugin (eslint-plugin-import) focuses on linting ES6 import/export syntax, ensuring correct imports and exports within your JavaScript code.

**jsx-a11y** ->> This plugin (eslint-plugin-a11y) concentrates on providing accessibility rules for JSX elements. It helps in identifying and fixing accessibility issues ensuring usable for people with disabilities

## Additional note:

- Linting is the automated checking of your source code for programmatic and stylistic errors.

- what is a11y ->> ![alt text](./a11y.png)

# 4.

"parserOptions": {
"ecmaVersion": 2022,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},

In ESLint, the "parserOptions" is used to configure settings related to parsing JavaScript code.

**ecmaVersion:2022** ->> This property specifies the ECMAScript version you're using in your code, in this case, version 2022. This means ESLint should parse the code based on the ECMAScript 2022 specification

**sourceType:module** ->> This property defines the JavaScript module system used in your code. Setting it to "module" indicates that your code uses ECMAScript modules ('import'/'export' syntax).

**ecmaFeatures:{ jsx:true }** ->> This property is used to enable specific language features in JavaScript. In this case, it enables the use of JSX syntax within your code by setting "jsx" to "true"

_Usage_: By enabling this feature, ESLint understands and validates JSX syntax, allowing it to apply JSX-specific rules and checks your code

# Additional note:

- Parsing defined as the process of turning some kind of data into another kind of data. In practice, this is almost always turning a string, or binary data, into a data structure inside a Program.

- ESLint stand for ECMAScript Lint, is a static code analysis tool for identifying problematic patterns found in JS code.

# 5.

// environment
"env": {
"es6": true,
"browser": true,
"node": true
},

The env is used to specify which environments your code is designed to run in. Each environment represents a set of global variables available in that environment, and ESLint uses this information to understand the context in which your code operates.

**es6:true** ->> This environment flag indicates that your code uses ECMAScript 6 (ES6) syntax and features. `By setting this to "true", ESLint recognizes and allows the use of ES6 specific syntax like arrow functions, let, and const declarations, classes, modules, and other ES6 enhancements.`

**browser:true** ->> This flag signifies that your code is intended to run in a browser environment. `When set to "true", ESLint understands that your code may utilize browser-specific global variables and APIs.`

_Usage_: It enables ESLint to validate your code against potential issues related to browser specific code.

**node:true** ->> This flag indicates that your code is meant to run in a Node.js environment. Setting it to "true" allows ESLint to recognize Node.js global variables and APIs (like 'process','module','require', etc.)

_Usage_: This enables ESLint to perform checks specific to Node.js environments and helps avoid potential errors related to Node.js specific code.

# 6.

"settings": {
"react": {
"version": "detect"
},
"import/resolver": {
"node": {
"extensions": [".js", ".jsx"]
}
}
}

The settings is used to provide additional configuration settings for ESLint and various plugins or modules used in the project.

**react: {version:detect}** ->> This setting is related to the ESLint plugin for React (eslint-plugin-react). Here, "version" is set to "detect". This configuration tells ESLint to automatically detect the version of React used in your project. `When set to 'detect', ESLint attempts to infer the React version based on the installed dependencies in your project.`

_Usage_: This is particularly helpful when working with different projects that might use different version of React without explicitly specifying them in the ESLint configuration.

**import/resolve: {node: {extensions:['.js','.jsx']}}** ->>
This setting is associated with the eslint-plugin-import, specifically the resolver configuration for handling imports.

Here, the resolver is configured for Node.js. `By specifying the "extension:['.js','.jsx']", ESLint understands that when importing modules or files within your code, it should consider files with the extensions .js and .jsx`
