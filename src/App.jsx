import { Header } from "./components/common/Header.jsx";
import { Main } from "./components/common/Main.jsx"
import { AuthContext } from "./contexts/AuthContext"
import { useLocalStorage } from "./hooks/useLocaleStorage";

function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogout = () => {
    setAuth({});
    localStorage.clear();
  }
  const userLogin = (authData) => {
    setAuth(authData)
  }
  return (
    <div id="box">

      <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
        <Header />
        <Main />
      </AuthContext.Provider>

    </div>
  );
}

export default App;
