import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  test('renders skills title', () => {
    render(<Skills />);
    expect(screen.getByText('My Skills')).toBeInTheDocument();
  });
});
