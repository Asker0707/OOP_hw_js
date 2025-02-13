import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const entry = './src/index.js';
export const output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
};

export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true, // Включение кэширования
                },
            },
        },
    ],
};

export const plugins = [
    new ESLintPlugin({
        // Отключение ESLint в режиме разработки для повышения производительности
        lintDirtyModulesOnly: true,
        context: resolve(__dirname, 'src'),
    }),
];

export const mode = 'development';