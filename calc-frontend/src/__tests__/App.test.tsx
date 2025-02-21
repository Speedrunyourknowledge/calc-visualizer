// @vitest-environment jsdom

import {expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import { createMemoryRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import { MathJaxContext } from 'better-react-mathjax'

import RoutesList from '../App/RoutesList'

test('full app rendering', () => {

  const router = createMemoryRouter(createRoutesFromElements(RoutesList), {
    initialEntries:['/'],
  })

  render(<RouterProvider router = {router} />, {wrapper: MathJaxContext})
  
  // check if heading is visible
  const heading = screen.getByRole('link', {name: 'Calc Visualizer'})
  expect(heading).toBeInTheDocument()
})