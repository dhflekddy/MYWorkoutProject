/**
 * 이건 그냥 외우시면 됩니다. path라고 해서 node에서 경로를 쉽게 조작하기 위해서 제공하는 것입니다. node설치시 path는 자동설치됩니다.
 */
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'myprojecct',
  mode: 'development',//실제 서비스에서는 'production'으로 설정
  devtool: 'inline-source-map',//devtool: 'eval' 로설정하면 빠르게 하겠다는 것
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {//이 entry와 아랫부분에 나오는 output이 가장 중요합니다
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: { browsers: ['last 2 chrome versions'] },
            debug: true,
          }],
          ["@babel/preset-react", {"runtime": "automatic"}],
          // '@babel/preset-react',
        ],
        plugins: [
          'react-refresh/babel',
          '@babel/plugin-proposal-class-properties',
        ],
      },
      exclude: path.join(__dirname, 'node_modules'),
    },

    //img, 폰트사용하기 위해 추가함
    {
      // write image files under 10k to inline or copy image files over 10k
      test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'images/[name].[ext]',
          },
        },
      ],
    },

    {
      // write files under 10k to inline or copy files over 10k
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
//위에서 부터 여기까지 이미지, 폰트 사용위해 추가한 설정들
  
  ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  /**
   * /path.join시 경로를 알아서 합쳐줍니다. __dirname은 현재폴더 경로입니다.
   * path.join(__dirname, 'dist')의 의미: 현재 폴더인 lecture폴더 아래에 있는 dist폴더를 말하는 것임. 
   * 즉, entry된 파일들을 이 위치에 [name].js라는 이름으로 내보내라는 것임. 
   * */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  }
};





