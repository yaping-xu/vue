import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// Vue原型注册了_init()方法
initMixin(Vue)
// Vue原型上加上 $data/$props/$delete/$set/$watch
stateMixin(Vue)
// Vue原型 初始化事件相关函数 $on/$once/$off/$emit
eventsMixin(Vue)
// Vue原型 初始化生命周期相关函数 _update/$forceUpdate/$destroy
lifecycleMixin(Vue)
// Vue原型初始化 一些_b/_d等内部函数/$nextTick/_render
renderMixin(Vue)

export default Vue
