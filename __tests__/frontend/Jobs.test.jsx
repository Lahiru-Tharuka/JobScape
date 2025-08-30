import React from 'react';
import { render, screen } from '@testing-library/react';
import Jobs from '../../frontend/src/pages/Jobs.jsx';
import * as redux from 'react-redux';

jest.mock('react-redux');

const mockDispatch = jest.fn();

beforeEach(() => {
  redux.useDispatch.mockReturnValue(mockDispatch);
  redux.useSelector.mockImplementation(selector => selector({ jobs: { jobs: [], loading: false, error: null } }));
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders job page hero text', () => {
  render(<Jobs />);
  expect(screen.getByText(/Find Your Dream Job/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Discover opportunities that match your skills and aspirations/i)
  ).toBeInTheDocument();
});
