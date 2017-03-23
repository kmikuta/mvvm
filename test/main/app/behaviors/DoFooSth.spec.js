import FooModel from '../../../src/main/app/model/FooModel'
import DoFooSth from '../../../src/main/app/behavior/DoFooSth'

describe('DoFooSth', () => {
  const model, behavior

  beforeEach(() => {
      model = new FooModel()

      behavior = new DoFooSth()
      behavior.model = model
  });

  it('should change foo to bar', () => {
      // given
      expect(model.foo).to.be('Foo')

      // when
      behavior.changeFooToBar()

      // then
      expect(model.foo).to.be('Bar')
  });
})
