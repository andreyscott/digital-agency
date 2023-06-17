import React from 'react'

type Plan = {
    name: string;
    price: number;
    features: string[];
}
// create an array of objects with the data for each plan
const plansData = [
    {
        name: 'Single-Page',
        price: 90,
        wasPrice: 120,
        features: [
        'Mobile & Desktop Responsive',
        'SEO Optimization',
        '3 revisions',
        'Customizations'
        ]
    },
    {
        name: 'Multi-Page',
        price: 160,
        wasPrice: 200,
        features: [
        'Mobile & Desktop Responsive',
        'SEO Optimization & Analytics',
        '5 revisions',
        'Customizations'
        
        ]
    },
    {
        name: 'E-Commerce',
        price: 250,
        wasPrice: 300,
        features: [
        'Mobile & Desktop Responsive',
        'SEO Optimization & Analytics',
        '10 revisions',
        'Customizations',
        'Payment Integration'

        ]
    }
    ]

function Pricing() {
  return (
    <>
    <section className="py-8 leading-7 text-gray-900 sm:py-12 md:py-16 lg:py-24">
    <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-white border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
            </h2>
            <p className="box-border mt-2 text-xl text-white/80 border-solid sm:text-2xl">
                Pricing to fit the needs of any companie size.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 group border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
{
    plansData.map((plan, index) => (
        // add group hover effect on 
        <div key={index}
         className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto bg-white  my-0 sm:p-6 md:px-8 md:py-16" data-primary="blue-600" data-rounded="rounded-md" data-rounded-max="rounded-full">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                {plan.name}
            </h3>
            <div className="block items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
           {/* line through the center was price */}
             
                
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                    ${plan.price}
                </p>
                
            </div>
            <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                Ideal for medium-size businesses to larger businesses
            </p>
            <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                {
                    plan.features.map((feature, index) => (
                        <li key={index} className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" data-primary="blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-col items-center justify-center w-full mt-6">
                <a href="#" className="flex items-center justify-center w-full px-4 py-3 text-base font-medium leading-6 text-white transition duration-150
                    ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
                </div>
        </div>
    ))
        
}     





         
    </div>
    </div>
</section>
</>


  )
}

export default Pricing