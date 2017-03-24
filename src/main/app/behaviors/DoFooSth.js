import {inject} from '../../../core/decorators'

export default class DoFooSth {

  @inject('FooModel')
  model = null // TODO check why it does not work with this assignment

  constructor() {
    console.log('Model in behavior', this.model)
  }

  changeFooToBar() {
    this.model.foo === 'Foo' ?
      this.model.foo = 'Bar' :
      this.model.foo = 'Foo'
  }
}
