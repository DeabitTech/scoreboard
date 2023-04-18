import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Country from "./index";

describe('Country', () => {
    it('renders correctly the country, showing country name and flag', async () => {
        const { getByAltText } = await render(
            <Country countryName={
               `Italy`
            } />
        );

        expect(screen.getByText(/Italy/i)).toBeVisible()
        const flag = getByAltText('Italy');
        expect(flag).toHaveAttribute('src', 'https://www.sciencekids.co.nz/images/pictures/flags680/Italy.jpg')
    });
});
