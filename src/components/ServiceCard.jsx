import React from 'react'
import goto_services from "../assets/images/goto_services.png"

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <section className='card_flip mt-4'>

      {/* <section className="card_flip absolute"> */}
      <section className=' card flex-col items-center justify-center sm:w-[350px] sm:min-w-[350px] rounded-[20px] front_card  '>
        <div className=' max-w-60 w-full h-11 flex justify-center  '>
          <img src={imgURL} alt={label} className='w-[70px] h-[100px] justify-center items-center' />

        </div>
        <h3 className='flex justify-center mt-16 font-palanquin text-2xl leading-normal font-bold  '>{label}</h3>
        <p className='flex justify-center mt-3  font-montserrat leading-normal text-slate-gray ser_desc text-center'>{subtext}</p>
        <a href="" className='mt-6 flex justify-center'>
          <img src={goto_services} className='w-[40px] h-[40px] justify-center items-center'></img>
        </a>
      </section>

      <section className=' card flex-col items-center justify-center sm:w-[350px] sm:min-w-[350px] rounded-[20px] back_card backgrounder '>
        <div className=' max-w-60 w-full h-11 flex justify-center  '>
          <img src={imgURL} alt={label} className='w-[70px] h-[100px] justify-center items-center' />

        </div>
        <h3 className='flex justify-center mt-16 font-palanquin text-2xl leading-normal font-bold  '>{label}</h3>
        <p className='flex justify-center mt-3  font-montserrat leading-normal text-slate-gray ser_desc text-center'>{subtext}</p>
        <a href="" className='mt-6 flex justify-center'>
          <img src={goto_services} className='w-[40px] h-[40px] justify-center items-center'></img>
        </a>
      </section>
    </section>

    // </section>
  )
}

export default ServiceCard