import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Homepage from './components/Homepage';
import DisplayItem from "./components/DisplayItem";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:itemId" element={<DisplayItem />} />
        
      </Routes>
    </div>
  )
}

export default App
