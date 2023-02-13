import React from 'react'
import './whatsapp.css'
// import whatsappImage from '../../../images/ContactUs/whatsapp.webp'

const Whatsapp = () => {
    const number = "9414160724";
    const message = "I want to make an inquiry about your product"
    return (
        <>
            <div className='contact-absolute'>
                <a href={`https://api.whatsapp.com/send/?phone=${number}&text=${message}`} target="_blank">
                    <div className='d-flex align-items-center contact-text-wrapper'>
                        <div className='contactus-image-wrapper'>
                            <img src="./images/whatsapp.webp" alt="whatsapp" />
                        </div>
                        <div className='px-2 contact-whatsapp-text'>WhatsApp Us</div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Whatsapp