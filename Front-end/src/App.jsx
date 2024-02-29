import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    // this is just a placeholder fo the hight
    <main className="bg-[#f3f4f6] h-[100vh] relative">
      <div className="container px-[10px] mx-auto overflow-x-scroll py-[27px] flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
