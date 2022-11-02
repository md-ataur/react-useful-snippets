import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Dashboard/Layout/Layout';
import Items from './components/Items/Items';
import LoyalCustomer from './components/LoyalCustomer/LoyalCustomer';
import Header from './components/Snippets/Header/Header';
import Home from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="dashboard" element={<Layout />}>
                        <Route path="customer" element={<LoyalCustomer />} />
                        <Route path="items" element={<Items />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
