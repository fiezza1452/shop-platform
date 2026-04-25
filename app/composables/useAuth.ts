interface User {
  name: string
  email: string
}

export function useAuth() {
  const isLoggedIn = useState<boolean>('auth_logged_in', () => false)
  const user = useState<User | null>('auth_user', () => null)

  function login(email: string, name: string) {
    user.value = { email, name }
    isLoggedIn.value = true
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
    navigateTo('/')
  }

  return { isLoggedIn, user, login, logout }
}
