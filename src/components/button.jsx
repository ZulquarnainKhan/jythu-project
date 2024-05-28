import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ label }) => {
    return (
        <a href='' className='flex items-center btn_container'>

            <button className='flex justify-center items-center gap-2 px-4 py-4 font-montserrat  text-lg leading-none btn'>
                {label}
                
            </button>
                <FiArrowUpRight className='btn_side1 btn_side ' />
        </a>
    )
}

export default Button

