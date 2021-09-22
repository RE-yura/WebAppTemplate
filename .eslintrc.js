module.exports = {
  extends: "@ofk/eslint-config-recommend",
  // When using in TypeScript. Delete it when using in JavaScript.
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "eslint-comments/no-unlimited-disable": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
  },
};
//   root: true,
//   env: {
//     es6: true,
//     node: true,
//     browser: true,
//     commonjs: true,
//   },
//   globals: {
//     Atomics: "readonly",
//     SharedArrayBuffer: "readonly",
//     React: "writable",
//   },
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   settings: {
//     react: {
//       version: "detect",
//     },
//   },
//   plugins: ["react-hooks", "react", "@typescript-eslint", "prettier", "@emotion"],
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/eslint-recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "prettier",
//   ],
//   rules: {
//     "react/prop-types": "off",
//     "prettier/prettier": "error",
//     "react/react-in-jsx-scope": "off",
//     "@typescript-eslint/explicit-module-boundary-types": "off",
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       {
//         vars: "all",
//         args: "none",
//         ignoreRestSiblings: true,
//         argsIgnorePattern: "^_",
//       },
//     ],
//     "no-console": ["warn", { allow: ["info", "warn", "error"] }],
//     "@emotion/jsx-import": "off",
//     "@emotion/pkg-renaming": "error",
//   },
//   // "prettier/prettier": [
//   //   "warn",
//   //   {
//   //     endOfLine: "auto",
//   //   },
//   // ],
//   overrides: [
//     {
//       files: ["*.js"],
//       rules: {
//         "@typescript-eslint/no-var-requires": "off",
//         "@typescript-eslint/explicit-function-return-type": "off",
//       },
//     },
//   ],
// };
