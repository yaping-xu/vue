/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
// baseCompile 是模板编译的核心函数
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 1. 把模板编译成ast 抽象语法树
  // 抽象语法树，用来以树形方式描述代码结构
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    // 2. 优化语法树
    optimize(ast, options)
  }
  // 3. 把抽象语法树生成字符串形式的 js 代码
  const code = generate(ast, options)
  return {
    ast,
    // 渲染函数，注意：此时render是字符串形式的
    render: code.render,
    // 静态渲染函数，生成静态 VNode 树
    staticRenderFns: code.staticRenderFns
  }
})
