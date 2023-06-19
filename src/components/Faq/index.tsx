import React, { useState } from 'react'
// import Heading1 from '../Headings/Heading1'

interface FaqCardProps {
    data: {
        question: string
        answer: string
        id: string
    }
}

const Faq = () => {

    const faqs = [
        {
            question: "What sets you apart from other digital marketing agencies?",
            answer:"What makes us different from the hundreds of other agencies out there? That's a great question, and there are some interesting things about us that demonstrate how we can provide you with those extra benefits. We only succeed when you do, which is why we work as hard as we can to make your business the best in its field. We work closely with all our clients to make their brand count and stand out",
            id: "0"
        },
        {
            question: "What are the benefits of digital marketing?",
            answer:"Digital marketing allows you to reach your target audience in ways that traditional forms of marketing cannot. Depending on the networks used, you can target your market precisely. Digital marketing is also precisely measurable, so you can gauge exactly where your marketing efforts are having the most impact.",
            id: "1"
        },
        {
            question: "Is the pricing fixed?",
            answer:"We have a range of packages to suit all budgets. We can also tailor a package to suit your specific needs. We will work with you to find the best solution for your business.",
            id: "2"
        },
        {
            question:"What programs and applications do you use?",
            answer:"At AfroDigit we tend to use the best and fast technology to get the job done. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. We use the latest technology to ensure that your website is fast, secure, and reliable. If you need a full list of the tools we use and have access to, send us an email and we'll be happy to send it to you.",
            id: "3"
        }, 
        {
            question:"Are there any hidden costs?",
            answer:"No, we are completely transparent with our pricing. We will provide you with a detailed quote before we start any work. If you require additional services, we will provide you with a quote for these before we start work. We will never charge you for anything that you have not agreed to.",
            id: "4"
        }, {
            question:"How long does it take to get results?",
            answer:"This depends on the type of marketing you are doing. Some marketing methods, such as PPC, can provide instant results. Other methods, such as SEO, take longer to see results. We will work with you to develop a marketing strategy that will provide you with the best results in the shortest possible time.",
            id: "5"
        },
    ]


    return (
        <div className='pt-20 w-full'>
            {/* <Heading1 details={"We have compiled some commonly asked questions and their answers to provide you with the information you need. If you have any additional inquiries, feel free to reach out to us."} text1={"Frequently Asked"} text2={" Questions"} /> */}
            <h2 className='xl:text-[22px] mx-4 font-bold leading-relaxed'>
        Frequently Asked Questions
      </h2>
      <h1 className='mt-4 mx-4 text-[20px] xl:text-[30px] font-normal leading-9 xl:leading-normal'>
        We have compiled some commonly asked questions and their answers to provide you with the information you need. If you have any additional inquiries, feel free to reach out to us.
      </h1>
            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                {
                    faqs.map((faq) => <FaqCard key={faq.id} data={faq} />)
                }
            </div>
        </div>
    )
}

const FaqCard = (
    { data }: FaqCardProps
) => { 
    const [show, setShow] = useState(false);
    return (
        <div data-aos="fade-up" className='flex md:w-[80%] lg:w-[85%] w-[95%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
         
            <div onClick={()=>setShow((show)=>!show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-lg md:text-lg text-base pr-5'>
                    {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2':'h-0'}`}>
                <p className='text-gray-400 text-sm w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}

export default Faq