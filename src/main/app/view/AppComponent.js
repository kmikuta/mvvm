import {iziInjectMixin} from '../../../core/common';
import tpl from './appComponent.tpl'
import './appComponent.css' // should be less

export default {
  mixins: [iziInjectMixin],
  iziInject: {
    behavior: 'DoFooSth',
    data: {
      model: 'FooModel'
    }
  },
  template: tpl,
  ready() {
    console.log(this.behavior)
    console.log(this.model)
  }
}
