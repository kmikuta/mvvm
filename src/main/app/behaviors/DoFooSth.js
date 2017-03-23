import FooModel from '../model/FooModel'
import {model} from '../../../core/decorators'

export default class DoFooSth {

  @model(FooModel)
  model

  changeFooToBar() {
    this.model.foo = 'Bar';
  }
}
