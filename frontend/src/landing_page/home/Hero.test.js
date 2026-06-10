import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<BrowserRouter><Hero /></BrowserRouter>);
    const image = screen.getByAltText('Hero image');
    expect(image).toBeInTheDocument();
  });

  test('renders heading text', () => {
    render(<BrowserRouter><Hero /></BrowserRouter>);
    const heading = screen.getByText(/Invest in everything/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders subheading text', () => {
    render(<BrowserRouter><Hero /></BrowserRouter>);
    const subtext = screen.getByText(/Online platform to invest/i);
    expect(subtext).toBeInTheDocument();
  });

  test('renders signup button with correct link', () => {
    render(<BrowserRouter><Hero /></BrowserRouter>);
    const signupLink = screen.getByText(/Sign up for free/i);
    expect(signupLink).toBeInTheDocument();
    expect(signupLink.closest('a')).toHaveAttribute('href', '/signup');
  });
});
