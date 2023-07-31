import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ShowMore from '../components/ShowMore';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary matchers

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../utils', () => ({
  // Mock the updateSearchParams function
  updateSearchParams: jest.fn((key, value) => `/?${key}=${value}`),
}));

describe('ShowMore Component', () => {
  beforeEach(() => {
    // Clear the mock implementation before each test
    jest.clearAllMocks();
  });

  it('renders the Show More button', () => {
    // Prepare the props for ShowMore component
    const pageNumber = 1;
    const isNext = false;

    // Set up the mock implementation for useRouter
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
    }));

    // Render the component
    render(<ShowMore pageNumber={pageNumber} isNext={isNext} />);

    // Get the Show More button
    const showMoreButton = screen.queryByText('Show More');

    expect(showMoreButton).toBeInTheDocument();
  });

  it('does not show the Show More button when isNext is true', () => {
    // Prepare the props for ShowMore component
    const pageNumber = 1;
    const isNext = true;

    // Set up the mock implementation for useRouter
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
    }));

    // Render the component
    render(<ShowMore pageNumber={pageNumber} isNext={isNext} />);

    // Check if the Show More button is not present in the DOM
    const showMoreButton = screen.queryByText('Show More');
    expect(showMoreButton).toBeNull();
  });

  it('handles navigation correctly when Show More button is clicked', () => {
    // Prepare the props for ShowMore component
    const pageNumber = 1;
    const isNext = false;

    // Set up the mock implementation for useRouter
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));

    // Render the component
    render(<ShowMore pageNumber={pageNumber} isNext={isNext} />);

    // Get the Show More button
    const showMoreButton = screen.getByText('Show More');

    // Simulate a click on the Show More button
    fireEvent.click(showMoreButton);

    // Check if the handleNavigation function was called correctly
    const newLimit = (pageNumber + 1) * 6;
    const newPathName = `/?limit=${newLimit}`;
    expect(mockPush).toHaveBeenCalledWith(newPathName, { scroll: false });
  });
});