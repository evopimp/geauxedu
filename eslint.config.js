import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules for React hooks
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    // Add or customize your rules here
    // Example: "semi": ["error", "always"],
  },
});
