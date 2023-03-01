import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with developer name', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  const developerNameElement = screen.getByText(/Developer Name/i);
  expect(headerElement).toBeInTheDocument();
  expect(developerNameElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const aboutLinkElement = screen.getByRole('link', { name: /About Me/i });
  const portfolioLinkElement = screen.getByRole('link', { name: /Portfolio/i });
  const contactLinkElement = screen.getByRole('link', { name: /Contact/i });
  const resumeLinkElement = screen.getByRole('link', { name: /Resume/i });
  expect(aboutLinkElement).toBeInTheDocument();
  expect(portfolioLinkElement).toBeInTheDocument();
  expect(contactLinkElement).toBeInTheDocument();
  expect(resumeLinkElement).toBeInTheDocument();
});

test('renders default About Me section', () => {
  render(<App />);
  const defaultSectionElement = screen.getByRole('region', { name: /About Me/i });
  expect(defaultSectionElement).toBeInTheDocument();
});

test('switches to Portfolio section when Portfolio link is clicked', () => {
  render(<App />);
  const portfolioLinkElement = screen.getByRole('link', { name: /Portfolio/i });
  const portfolioSectionElement = screen.getByRole('region', { name: /Portfolio/i });
  expect(portfolioSectionElement).not.toBeVisible();
  userEvent.click(portfolioLinkElement);
  expect(portfolioSectionElement).toBeVisible();
});

// and so on for the remaining acceptance criteria
