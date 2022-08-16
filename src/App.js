import { Header } from "./components/Common/Header";
import { Main } from "./components/Common/Main";
import { AuthContext } from "./contexts/AuthContext"
import { useState } from "react"

function App() {
  const [auth, setAuth] = useState([]);

  const userLogout = () => {
    setAuth({});
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
