import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <div className="my-10 md:mt-16 lg:my-20">
                <Banner />
            </div>
            <div className="my-10 md:mt-16 lg:my-20">
                <HowItWorks />
            </div>
            <div className="my-10 md:mt-16 lg:my-20">
                <Services />
            </div>
            <div className="my-10 md:mt-16 lg:my-20">
                <ClientSection />
            </div>
        </div>
    );
};

export default Home;