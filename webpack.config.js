var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
            path: path.resolve(__dirname , "public/"),
            publicPath: '/public/',
            filename:'build.js'      
    } ,
        module: {
             rules: [
                             {
                                     test: /\.js$/, 
                                    exclude: /node_modules/,
                                  loader: "babel-loader"
                             },
    {
                                     test: /\.s[ac]ss$/, 
                                    exclude: /node_modules/,
                                  loader: "sass-loader"
                             },
 {
                                    test: /\.css$/, 
                                   exclude: /node_modules/,
                                  loader: ['style-loader','css-loader']
                             }
                      ]     
        },
 
      
};
