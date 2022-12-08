import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import React from 'react'
import '@testing-library/jest-dom'
import BrowserRouter, { MemoryRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Procurements from "./pages/Procurements";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";

test('Navigation links are displayed', () => {
    render(<App />, {wrapper: BrowserRouter})

    userEvent.setup().click(screen.getByText(/Dashboard/i));
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    userEvent.setup().click(screen.getByText(/Procurements/i))
    expect(screen.getByText(/Procurements/i)).toBeInTheDocument()

    userEvent.setup().click(screen.getByText(/Resources/i))
    expect(screen.getByText(/Resources/i)).toBeInTheDocument()

    userEvent.setup().click(screen.getByText(/Projects/i))
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
 })

test('Navigation links are working', () => {
  render(<App />)
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Procurements/i)).toBeInTheDocument()
    expect(screen.getByText(/Resources/i)).toBeInTheDocument()
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
  })

  test('Dasboard contains title', () => {
    render(<Dashboard/>);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  })

  test('Procurements contains title', () => {
    render(<Procurements/>);
    expect(screen.getByText("Procurements")).toBeInTheDocument();
  })

  test('Resources contains title', () => {
    render(<Resources/>);
    expect(screen.getByText("Resources")).toBeInTheDocument();
  })

  test('Projects contains title', () => {
    render(<Projects/>);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  })
