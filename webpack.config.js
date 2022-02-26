const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [//ローダーは下から適用される
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
            ]
        }]
    },
}
