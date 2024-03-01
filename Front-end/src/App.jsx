import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./app/index";

function App() {
  return (
    // this is just a placeholder fo the hight
    <main className="bg-[#f3f4f6] h-[100vh] relative">
      <div className="container px-[10px] mx-auto overflow-x-scroll py-[27px] flex lg:justify-center">
        <Provider store={store}>
        <Home />
        </Provider>
      </div>
    </main>
  );
}

export default App;
