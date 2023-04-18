import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Scoreboard from "./index"

describe('Scoreboard', () => {
    it('renders correctly all available matches', async () => {
        render(<Scoreboard />)

        expect(await screen.findByText(/Argentina/i)).toBeVisible()
        expect(await screen.findByText(/Australia/i)).toBeVisible()
        expect(await screen.findByText(/Spain/i)).toBeVisible()
        expect(await screen.findByText(/Brazil/i)).toBeVisible()
    })
})
