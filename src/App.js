import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soubre" element={<Home />} />
                <Route path="/contato" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
