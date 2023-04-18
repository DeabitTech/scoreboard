import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import Match from "./index";

describe('Match', () => {
    it('renders correctly', () => {
        render(<Match match={
            {
                gameId: 5,
                startedGame: false,
                homeTeam: {
                    name: 'Italy',
                    score: 0
                },
                awayTeam: {
                    name: 'Australia',
                    score: 0
                }
            }
        } />);
    expect(screen.getByText(/Italy/i)).toBeVisible()
    expect(screen.getByText(/Australia/i)).toBeVisible()
    });
});
