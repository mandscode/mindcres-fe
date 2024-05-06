import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
    </>
  );
}

export default App;
