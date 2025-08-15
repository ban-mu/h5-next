const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计稿375
      propList: ["*"], 
      selectorBlackList: [".ignore", ".no-rem"], 
      minPixelValue: 1,
      mediaQuery: false, // 媒体查询内的 px 不转换
      exclude: /node_modules/i
    }
  },
};

export default config;
