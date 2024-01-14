import { Header } from "./components/common/Header.jsx";
import { Main } from "./components/common/Main.jsx";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <div id="box">
            <AuthProvider>
                <Header />
                <Main />
            </AuthProvider>
        </div>
    );
}

export default App;
