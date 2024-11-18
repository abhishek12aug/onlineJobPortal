import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import './App.css'
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>} />
         
            </Routes>
        </BrowserRouter>
    );
}

export default App
