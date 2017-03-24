import Vue from 'vue'
import izi from "izi-vue"

const { MainView, iziInjectMixin } = izi.createVueHelpers(Vue);

class BaseView {

  constructor(componentJSON) {
    for (let prop in componentJSON) {
      this[prop] = componentJSON[prop]
    }

    this.mixins = this['mixins'] || []
    this.mixins.push(iziInjectMixin)
  }
}

export {Vue, izi, MainView, BaseView}
