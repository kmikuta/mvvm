import AppModule from './app/startup'
import NavbarModule from './navbar/startup'

export default class MainModule {

  constructor() {
    this.name = 'main'
    this.modules = []

    this.modules.push(new AppModule())
    this.modules.push(new NavbarModule())
  }
}
