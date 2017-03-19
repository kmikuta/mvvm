import context from './context'

export default class NavbarModule {

  constructor() {
    this.name = 'app'
    this.context = context()
  }
}
