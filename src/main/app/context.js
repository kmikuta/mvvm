import izi from 'izi-js'
import AppView from './view/AppView'

export default () => {
  return izi.bakeBeans({
    view: new AppView()
  })
}
