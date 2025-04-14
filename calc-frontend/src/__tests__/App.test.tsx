import {expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import { createMemoryRouter, createRoutesFromElements, RouterProvider } from 'react-router'

import { AuthProvider } from '../App/AuthContext'
import RoutesList from '../App/RoutesList'
import { Toaster } from '@/components/ui/sonner'

test('full app rendering', () => {

  const router = createMemoryRouter(createRoutesFromElements(RoutesList), {
    initialEntries:['/error'],
  })

  render(
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>,
    {}
  );
  
  // check if heading is visible
  const heading = screen.getByRole('link', {name: 'Calc Visualizer'})
  expect(heading).toBeInTheDocument()
})