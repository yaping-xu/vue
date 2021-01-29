/* @flow */
// nodeOps存储的是封装的一些dom操作
import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
// 存储的是处理指令和ref的模块
import baseModules from 'core/vdom/modules/index'
// 存储的是处理平台相关的模块
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })
