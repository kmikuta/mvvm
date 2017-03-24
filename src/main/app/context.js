import {izi, MainView} from '../../core/common';
import AppComponent from './view/AppComponent'
import DoFooSth from './behaviors/DoFooSth'
import FooModel from './model/FooModel'

export default () => izi.bakeBeans({
  FooModel,
  DoFooSth,
  MainView: izi.instantiate(MainView).withProps({
    component: AppComponent,
    el: '#app',
    proxyMethods: true
  })
})
