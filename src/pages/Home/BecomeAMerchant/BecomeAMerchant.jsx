import locationMerchant from "../../../assets/merchant.png"
import beAMerchant from "../../../assets/be-a-merchant-bg.png"
const BecomeAMerchant = () => {
    return (
        <div className={`hero bg-secondary text-white bg-cover rounded-3xl max-w-[95vw] md:max-w-screen mx-auto`}>
            <div
                style={{
                    backgroundImage:
                        `url(${beAMerchant})`,
                }}
                className={`hero-content flex-col lg:flex-row-reverse bg-no-repeat py-5 md:py-10 px-5  md:px-10 xl:px-10 2xl:px-0 gap-5`}>
                <img
                    src={locationMerchant}
                    className="lg:w-2/5 rounded-lg"
                />
                <div className="lg:w-3/5">
                    <h1 className="text-2xl md:text-4xl font-bold lg:leading-12">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product.
                        Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex gap-2 flex-col md:flex-row">
                        <button className="btn btn-primary text-black rounded-full">Become A Merchant</button>
                        <button className="btn btn-outline rounded-full text-primary border-primary">Earn with Zap Shift Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeAMerchant;