import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import React from 'react'
import '@testing-library/jest-dom'
import BrowserRouter from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()
    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Dashboard/i));
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    await user.click(screen.getByText(/Procurements/i))
    expect(screen.getByText(/Procurements/i)).toBeInTheDocument()

    await user.click(screen.getByText(/Resources/i))
    expect(screen.getByText(/Resources/i)).toBeInTheDocument()

    await user.click(screen.getByText(/Projects/i))
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
  })
