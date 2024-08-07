import LoginPage from '@/app/pages/login';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

jest.mock('react-query', () => ({
  useMutation: () => ({
    mutate: jest.fn(),
    isLoading: false,
  }),
}));


describe('Login Module', () => {
  it('Validation check', () => {
    render(<LoginPage />)

    const label = screen.getByTestId('login-page-label').innerHTML;

    expect(label).toEqual('Store Login')
  })
})