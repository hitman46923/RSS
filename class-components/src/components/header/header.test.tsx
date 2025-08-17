import { render, screen } from '@testing-library/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders input and buttons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  it('allows typing in input', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'React');

    expect(input).toHaveValue('React');
  });
});