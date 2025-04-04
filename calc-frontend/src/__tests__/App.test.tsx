import {expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import { createMemoryRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import { AuthProvider } from '../App/AuthContext'

import RoutesList from '../App/RoutesList'

//@ts-ignore implicit any type
import mathquillFunc from "../../node_modules/mathquill/build/mathquill";

test('full app rendering', () => {


  const router = createMemoryRouter(createRoutesFromElements(RoutesList), {
    initialEntries:['/'],
  })

  render(<AuthProvider><RouterProvider router = {router} /></AuthProvider>, {})
  
  // check if heading is visible
  const heading = screen.getByRole('link', {name: 'Calc Visualizer'})
  expect(heading).toBeInTheDocument()
})