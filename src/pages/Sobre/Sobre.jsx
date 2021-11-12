import { About } from '../../components/About/About';
import { Header } from '../../components/Header/Header';
import { TextContent } from '../../components/TextContent/TextContent'
import { Footer } from '../../components/Footer/Footer'

export const Sobre = () => {
    return (
        <div className="container">
            <Header />
            <About />
            <TextContent />
            <Footer />
        </div>
    );
}