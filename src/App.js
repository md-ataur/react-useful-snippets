import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Layout from './components/Dashboard/Layout/Layout';
import Items from './components/Items/Items';
import LoyalCustomer from './components/LoyalCustomer/LoyalCustomer';
import Header from './components/Snippets/Header/Header';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Layout />}>
                        <Route path="" element={<Dashboard />} />
                        <Route path="customer" element={<LoyalCustomer />} />
                        <Route path="items" element={<Items />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
