export default {
  getToken() {
    const token = localStorage.getItem('token')
    if (typeof token === 'string' && token.length > 0) {
      return token
    } else {
      return null
		}
  },
  setToken(token) {
    if (typeof token === 'string' && token.length > 0) {
      localStorage.setItem('token', token)
    }
	},
	clearToken() {
    localStorage.removeItem('token')
	}
}
