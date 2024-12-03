const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://element-plus.org/zh-CN",
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: "center",
  },
});
