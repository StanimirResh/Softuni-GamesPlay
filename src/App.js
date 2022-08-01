import { Header } from "./components/common/Header";
import { Main } from "./components/common/Main";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
