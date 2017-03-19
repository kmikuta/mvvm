import context from './context'

export default class AppModule {

  constructor() {
    this.name = 'app'
    this.context = context()
  }
}
