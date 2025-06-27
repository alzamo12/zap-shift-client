import { useEffect, useState } from 'react';
import ServiceCard from '../../../components/Home/Services/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])


    return (
        <section className="py-16 bg-[#03373D] mx-2 md:mx-0 rounded-xl">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
                <p className="text-gray-50 mb-10 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;