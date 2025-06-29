import { useEffect, useState } from "react";
import "./index.css"

const FAQ = () => {
    const [questions, setQuestions] = useState([]);
    const [id, setId] = useState(false);

    useEffect(() => {
        fetch("/questions.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setQuestions(data)
            })
    }, [])


    return (
        <div className="flex flex-col gap-5 px-2">
            <div className="mx-auto max-w-2xl text-center space-y-3 md:space-y-5 mb-5 md:mb-8">
                <h2 className="text-2xl md:text-4xl text-secondary card-title justify-center">Frequently Asked Questions</h2>
                <p>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>
            {questions.map(question => <div key={question.id}>
                <div  className={`collapse peer-checked:bg-blue-500 collapse-arrow 
                bg-base-100 border border-base-300 ${id === question.id ? "bg-teal-50" : ""} `}>
                    <input onChange={() => setId(question.id)} type="radio" className="peer" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">{question.question}</div>
                    <div className="collapse-content text-base">{question.answer}</div>
                </div>
            </div>)}
        </div>
    );
};

export default FAQ;