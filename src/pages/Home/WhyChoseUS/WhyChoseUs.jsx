import React, { useEffect, useState } from 'react';
import FeatureCard from '../../../components/Home/WhyChoseUs/FeatureCard';

const WhyChoseUs = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch("/featured.json")
            .then(res => res.json())
            .then(data => {
                setFeatures(data)
            })
    }, [])

    return (
        <section className=" bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                <p className="text-gray-600 mt-4">
                    We provide top-tier logistics services combining speed, safety,
                    and support to ensure your goods always reach their destination on
                    time and in perfect condition.
                </p>
            </div>

            <div className=" mx-auto px-4 space-y-6">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyChoseUs;