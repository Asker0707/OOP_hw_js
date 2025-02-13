// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
    {
        languageOptions: {
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'warn',
        },
        ignores: [
            'node_modules/**',
            'dist/**',
            'coverage/**',
            '**/*.test.js',
            '**/*.spec.js',
        ],
    },
    {
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'eqeqeq': 'error',

        }
    },
]);