import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    // this is just a placeholder fo the hight
    <main className="bg-[#f3f4f6] h-[100vh]">
      <div className="container mx-auto overflow-x-auto py-[27px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
