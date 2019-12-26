const autobar = require("./plugins/autobar");

module.exports = ctx => ({
  title: "AthenaBlog",
  base:'/Athenablog/',
  description: "Input knowledge, Output dream.",
  port: 8080,
  publicPath:"./",
  plugins: [ [autobar, {pinyinNav: false}] ],
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/AthenaEdu/Athenablog" }]
  }
});
