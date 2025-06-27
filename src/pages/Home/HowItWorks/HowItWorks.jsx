import React, { useEffect, useState } from 'react';
import HowItWorkCard from '../../../components/Home/HowItWorks/HowItWorkCard';

const HowItWorks = () => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        fetch("/steps.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSteps(data)
            })
    }, [])

    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <HowItWorkCard
                            key={step.id}
                            title={step.title}
                            description={step.description}
                            image={step.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;