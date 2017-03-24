import {izi} from './common'

function inject(type) {
  return function(target, prop, descriptor) {
    descriptor.initializer = () => izi.inject(type)
  }
}

function viewInject(type) {
  return function(target, prop, descriptor) {
    const objInstance = target

    if (!objInstance.iziInject) {
      objInstance.iziInject = {}
    }

    objInstance.iziInject[prop] = type

    descriptor.initializer = () => objInstance
  }
}

function viewModel(type) {
  return function(target, prop, descriptor) {
    const objInstance = target

    if (!objInstance.iziInject) {
      objInstance.iziInject = {}
    }

    if (!objInstance.iziInject.data) {
      objInstance.iziInject.data = {}
    }

    objInstance.iziInject.data[prop] = type

    descriptor.initializer = () => objInstance
  }
}

export {inject, viewInject, viewModel}
