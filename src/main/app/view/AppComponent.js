import tpl from './appComponent.tpl'
import './appComponent.less'
import {BaseView} from '../../../core/common'
import {viewInject, viewModel} from '../../../core/decorators'

export default new BaseView({

  template: tpl,

  @viewModel('FooModel')
  model: null,

  @viewInject('DoFooSth')
  behavior: null,

  ready() {
    console.log('Behavior in view', this.behavior)
    console.log('Model in view', this.model)
  }
})
