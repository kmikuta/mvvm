import {izi} from './common'

function model(type) {
  return function(target, prop, descriptor) {
    descriptor.initializer = () => izi.inject(type)
  }
}

export {model}
