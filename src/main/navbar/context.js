import izi from 'izi-js'
import MenuViewModel from './model/MenuViewModel'
import NavbarView from './view/NavbarView'

export default () => {
  return izi.bakeBeans({
    model: new MenuViewModel(),
    view: izi.instantiate(NavbarView).withArgs(izi.inject('model'))
  })
}
