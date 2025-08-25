import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WaitlistForm } from '@/components/waitlist-form';

// Mock fetch
global.fetch = jest.fn();

describe('WaitlistForm', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('shows error for invalid email', async () => {
    render(<WaitlistForm />);

    const emailInput = screen.getByPlaceholderText(/you@company.com/i);
    const submitButton = screen.getByRole('button', { name: /join waitlist/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('shows success state after valid submission', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<WaitlistForm />);

    const emailInput = screen.getByPlaceholderText(/you@company.com/i);
    const submitButton = screen.getByRole('button', { name: /join waitlist/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thanks for joining the waitlist/i)).toBeInTheDocument();
    });
  });
});
