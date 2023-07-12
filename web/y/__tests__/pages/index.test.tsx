import { render } from '@testing-library/react'

import HomePage from '../../pages'

describe('<HomePage />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot()
  })
})
