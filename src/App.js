import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
