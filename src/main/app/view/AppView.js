import tpl from './appView.tpl'
import './appView.css'

export default class AppView {

  constructor() {
    this.render()
  }

  render() {
    if (!this.rootEl) {
      this.rootEl = document.getElementById('app')
      this.rootEl.innerHTML = tpl
    }
  }

  getRootEl() {
    return this.rootEl
  }
}
