const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const code = `/* 原始代码 */`;
const ast = parser.parse(code);

traverse(ast, {
  CallExpression(path) {
    // 查找可疑的函数调用
  },
  MemberExpression(path) {
    // 分析数组访问模式
  }
});