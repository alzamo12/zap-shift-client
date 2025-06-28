import Banner from "../Banner/Banner";
import BecomeAMerchant from "../BecomeAMerchant/BecomeAMerchant";
import ClientSection from "../ClientSection/ClientSection";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import WhyChoseUs from "../WhyChoseUS/WhyChoseUs";

const Home = () => {
    return (
        <div>
            <div className="my-10 md:mt-16 lg:my-24">
                <Banner />
            </div>
            <div className="my-10 md:mt-16 lg:my-24">
                <HowItWorks />
            </div>
            <div className="my-10 md:mt-16 lg:my-24">
                <Services />
            </div>
            <div className="my-10 md:mt-16 lg:my-24">
                <ClientSection />
            </div>
            <div className="my-10 md:mt-16 lg:my-24">
                <WhyChoseUs />
            </div>
            <div className="my-10 md:mt-16 lg:my-24">
                <BecomeAMerchant />
            </div>
            <div className="my-16 md:mt-16 lg:my-24">
                <FAQ />
            </div>
        </div>
    );
};

export default Home;