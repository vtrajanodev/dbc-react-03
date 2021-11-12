import { Routes, Route } from 'react-router-dom';
import { Contato } from './pages/Contato/Contato';
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </>
    );
}

export default App;
