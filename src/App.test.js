import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import React from 'react'
import '@testing-library/jest-dom'

test("User click on dashboard renders dashboard page", async () => {
    render(<App />)
    await userEvent.click(screen.getByText(/Dashboard/i))
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Dashboard")
})

test("User click on Procurements renders dashboard page", async () => {
    render(<App />)
    await userEvent.click(screen.getByText(/Procurements/i))
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Procurements")
})

test("User click on Projects renders dashboard page", async () => {
    render(<App />)
    await userEvent.click(screen.getByText(/Projects/i))
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Projects")
})

test("User click on Resources renders dashboard page", async () => {
    render(<App />)
    await userEvent.click(screen.getByText(/Resources/i))
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Resources")
})
