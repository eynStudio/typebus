
import { getFromContainer } from '../src/container'
import { Bus } from '../src/Bus'

describe('container', () => {
  it('should get bus from container', () => {
    const bus = getFromContainer(Bus)
    console.log('bus', bus)
    expect(bus).not.toBeNull()
  });
})
