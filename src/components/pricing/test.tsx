
import React from 'react'

type Plan = {
    name: string;
    price: number;
    wasPrice: number;
    features: string[];
    featuresnotoffered: string[];
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
        ],
        featuresnotoffered: [
        'Payment Integration',
        'Report & Analytics',
        ]
    },
    {
        name: 'Multi-Page',
        price: 160,
        wasPrice: 200,
        features: [
        'Mobile & Desktop Responsive',
        'SEO Optimization',
        '5 revisions',
        'Customizations',
        'Report & Analytics',
        
        ],
        featuresnotoffered: [
        'Payment Integration',
        ]

    },
    {
        name: 'E-Commerce',
        price: 250,
        wasPrice: 300,
        features: [
        'Mobile & Desktop Responsive',
        'SEO Optimization',
        '10 revisions',
        'Customizations',
        'Payment Integration',
        'Report & Analytics',

        ],
        featuresnotoffered: [
            
        ]

    }
    ]
const Pricing1 = ( { plans }: { plans: Plan[] }) => {

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-center flex-shrink-0 mr-2 h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-center flex-shrink-0 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div className="w-full py-10 px-5 flex flex-col items-center bg-gradient-to-tr from-digitux-primary to-dark font-body"> {/* Container */}
      
      {/* :TITLE */}
      <div className="mb-16 text-center text-white">
        <h1 className="font-title py-2 text-5xl font-black tracking-wider antialiased">Simple, Transparent Pricing</h1>
        <p className="text-lg">Pricing to fit the needs of any companie size.<br/>
        No hidden fees. No surprises.
        
        </p>
      </div>

      {/* :PRICING TABLES */}
      <div className="grid grid-cols-3 gap-6 max-w-7xl">

        {/* ::Offer 1 */}
        {
            plansData.map((plan, index) => (
                <div key={index} className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl">
          {/* Offer name */}
          <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">
            {plan.name}
            </h2>
          {/* Price */}
          <div className="p-4 block items-center text-center ">
            <h3 className="font-title text-5xl font-bold ">{
                plan.price
            }</h3>
            <span className="text-center mx-auto text-xl md:text-2xl text-gray-500 line-through">{
                plan.wasPrice
            }</span>
          </div>
          {/* Divide line */}
          <span className="w-28 h-1.5 bg-sky-600 rounded-3xl"/>

          {/* Features */}
          {
            <ul className="my-12 flex flex-col">
              {
                plan.features.map((feature, index) => (
                    <li key={index} className="mb-4 inline-flex"><CheckIcon/>{feature}</li>
                ))
              }
              {
                plan.featuresnotoffered.map((feature, index) => (
                    <li key={index} className="mb-4 inline-flex line-through"><XIcon/>{feature}</li>
                ))
              }
         
          </ul>
}

          {/* Get Started */}
          <a href='mailto:andreyscott@gmail.com'>

          <button className="py-2 px-10 rounded-3xl bg-digitux-pblue text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600">
            Get Started
            </button>
          </a>
        </div>
                ))
        }


        </div>

    
        

      </div>
      
    )
}


export default Pricing1
