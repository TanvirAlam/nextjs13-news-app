import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../../src/pages'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        expect(screen.queryByTestId('test-text')).toBeInTheDocument()
    })
})