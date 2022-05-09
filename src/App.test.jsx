import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Should test router for Rick and Morty API', () => {
  it('Should fetch a list of characters from API', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/Rick And Morty Characters List/i);
    const link = await screen.findByText(/Rick sanchez/i);
    userEvent.click(link);
    await screen.findByAltText(/image of rick sanchez/i);
  });

  it('Should load a character detail page', async () => {
    render(
      <MemoryRouter initialEntries={['/character/420']}>
        <App />
      </MemoryRouter>
    );
    screen.debug();
    await screen.findByText('Plutonian Host');
    await screen.findByAltText(/image of plutonian host/i);
  });
});
