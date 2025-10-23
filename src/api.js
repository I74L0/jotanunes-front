import axios from 'axios'

export async function login(username, password) {
  const response = await axios.post('http://localhost/api/token/', {
    username,
    password,
  })
  const { access, refresh } = response.data

  // Salva o token
  localStorage.setItem('accessToken', access)
  localStorage.setItem('refreshToken', refresh)

  return access
}
