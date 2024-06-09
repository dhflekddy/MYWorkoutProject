import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const isDevelopment = process.env.NODE_ENV !== 'production';
/**
 * 이건 그냥 외우시면 됩니다. path라고 해서 node에서 경로를 쉽게 조작하기 위해서 제공하는 것입니다. node설치시 path는 자동설치됩니다.
 */

const config: Configuration = {
  name: 'myProject',
  mode: isDevelopment ? 'development' : 'production',//실제 서비스에서는 'production'으로 설정
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {//바벨이 처리할 확장자 목록
    extensions: ['.js', '.jsx','.ts','.tsx','.json','.jpg'],
    alias: {
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@views': path.resolve(__dirname, './src/views'),
      // '@utils': path.resolve(__dirname, './src/utils'),
      '@typings': path.resolve(__dirname, './src/typings'),
      '@constant':path.resolve(__dirname, './src/constant'),    
      "@types":path.resolve(__dirname, './src/types'),

    },
  },
  entry: {//이 entry와 아랫부분에 나오는 output이 가장 중요합니다
    app: './client',
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['IE 10'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
            },
            production: {
              plugins: ['@emotion'],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
        
      },
      // asset modules 설정 추가
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
  ],
  /**
   * /path.join시 경로를 알아서 합쳐줍니다. __dirname은 현재폴더 경로입니다.
   * path.join(__dirname, 'dist')의 의미: 현재 폴더 아래에 있는 dist폴더를 말하는 것임. 
   * 즉, entry된 파일들을 이 위치에 [name].js라는 이름으로 내보내라는 것임. 
   * */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, // 개발중인 프로젝트의 라우팅이 작동되지 않는 문제를 해결하는 devServer의 속성
    port:8080,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    proxy: {
      '/api/': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        ws: true,
      },
    },
  }
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        useURLPolyfill: true,
      },
    }),
  );
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
}
if (!isDevelopment && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;
