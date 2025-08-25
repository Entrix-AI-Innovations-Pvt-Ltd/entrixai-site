import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '@/app/page';

// Mock framer-motion to avoid issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
      <h1 {...props}>{children}</h1>
    ),
    p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
      <p {...props}>{children}</p>
    ),
    header: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
      <header {...props}>{children}</header>
    ),
  },
}));

describe('HomePage', () => {
  it('renders hero headline and Join Waitlist button', () => {
    render(<HomePage />);

    expect(screen.getByText(/emotionally intelligent AI co-pilot/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /join waitlist/i })).toBeInTheDocument();
  });

  it('has Explore Features link that points to features section', () => {
    render(<HomePage />);

    const exploreLink = screen.getByRole('link', { name: /explore features/i });
    expect(exploreLink).toHaveAttribute('href', '#features');
  });
});
