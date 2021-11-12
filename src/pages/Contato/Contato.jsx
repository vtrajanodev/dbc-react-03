import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

export const Contato = () => {
    return (
        <div className="container">
            <Header />
            <ContactForm />
            <Footer />
        </div>
    );
}