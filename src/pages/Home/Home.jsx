import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MainContent } from "../../components/MainContent/MainContent";

export const Home = () => {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}