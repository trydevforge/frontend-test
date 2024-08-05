import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Products from '@/app/pages/products'

describe('Products', () => {
  it('renders listing page', () => {
    render(<Products />)

    const heading = screen.getByTestId('heading')

    expect(heading).toBeInTheDocument()
  })
})