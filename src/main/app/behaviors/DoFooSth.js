import {izi} from '../../../core/common'

export default class DoFooSth {

  constructor() {
    this.model = izi.inject('FooModel');
  }

  changeFooToBar() {
    this.model.foo = 'Bar';
  }
}
