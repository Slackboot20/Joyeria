// AuthContext.js
export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  async function login(email, password) {
    // Lógica de login
  };

  async function register(email, password) {
    // Lógica de registro
  }

  function logout() {
    setAuthToken(null);
    // Aquí puedes añadir lógica para cerrar sesión de Firebase, si es necesario
  }

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
