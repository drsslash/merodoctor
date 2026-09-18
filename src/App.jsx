import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";

function App() {
  return (
    <div className="min-h-screen bg-[#203847]">
      <Navbar />
      <Home />
      <Home2 />
      <Home3 />
    </div>
  );
}

export default App;