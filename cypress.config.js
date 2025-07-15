const { defineConfig } = require("cypress");

const test = 1

module.exports = defineConfig({
  projectId: "tc27t9",
  e2e: {
    baseUrl: "https://element-plus.org/zh-CN",
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: "center",
  },
});
