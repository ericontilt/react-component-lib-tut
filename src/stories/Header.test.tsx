import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('<Header />', () => {
  let onLogin: ReturnType<typeof jest.fn>
  let onLogout: ReturnType<typeof jest.fn>
  let onCreateAccount: ReturnType<typeof jest.fn>

  beforeEach(() => {
    onLogin = jest.fn()
    onLogout = jest.fn()
    onCreateAccount = jest.fn()
  })

  test('renders logged out state', () => {
    render(
      <Header
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
    )

    expect(screen.getByText(/log in/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  test('sign up button invokes onCreateAccount handler', () => {
    render(
      <Header
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
    )

    userEvent.click(screen.getByText(/sign up/i))

    expect(onCreateAccount).toHaveBeenCalledTimes(1)
  })

  test('renders logged in state', () => {
    render(
      <Header
        user={{ name: 'John Doe' }}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
    )

    expect(screen.getByText(/log out/i)).toBeInTheDocument()
  })
})
