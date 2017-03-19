import tpl from './navbarView.tpl'
import './navbarView.css'

export default class NavbarView {

  constructor(model) {
    this.model = model

    this.render()
  }

  render() {
    if (!this.rootEl) {
      this.rootEl = document.querySelector('header')
      this.rootEl.innerHTML = tpl

      this.buildData()
    }
  }

  buildData() {
    const menuList = this.rootEl.querySelector('.menu-navbar ul.menu-list')

    this.model.items.forEach(item => {
      const menuItem = document.createElement('li')
      menuItem.className = 'menu-item'

      const anchor = document.createElement('a')
      anchor.href = item.href
      anchor.innerHTML = item.name

      menuItem.appendChild(anchor)
      menuList.appendChild(menuItem)
    })
  }

  getRootEl() {
    return this.rootEl
  }
}
