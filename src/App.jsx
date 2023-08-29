import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import DisplayItem from "./components/DisplayItem";
import DisplayCategory from "./components/DisplayCategory";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:itemId" element={<DisplayItem />} />
        <Route path="/category/:category" element={<DisplayCategory/>} />
      </Routes>
    </div>
  )
}

export default App
