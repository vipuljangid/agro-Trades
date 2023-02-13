import React from 'react'
import OurTestimonials from '../ourtestimonials/OurTestimonials'
import styles from './companyPage.module.css'

const CompanyPage = () => {
  return (
    <div>
      <div className={`container ${styles.containerwrapper}`}>
        {/* left div */}
        <div className={styles.leftContainerWrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.heading}>
              Raj Agro: A Leading Supplier of Food Grains
            </h1>
            <p className={styles.FirstDescription}>Raj Agro is a subsidiary firm of Raj Trader which was established in 1978 offers wholesale of rice, rice flakes, pulses, flour, wheat, maize & other food grains. Supplier to distilleries, institutions & exporters. Diverse product range of top-quality food grains tailored to clients' needs. International trade of chickpeas, yellow & green peas from countries like Canada, Australia, Russia, & Turkey.</p>
          </div>
        </div>

        {/* right div */}
        <div className={styles.rightContainerWrapper}>
          <div className={styles.rightImageWrapper}>
            <img src="./images/homePage.png" alt="" />
          </div>
        </div>


      </div>
      <div className={styles.mainCompanyDesWrapper}>
        <div className={styles.companyDesWrapper}>

        </div>
        <div className={styles.bgComapnyDescritpion}>
          {/* About us */}
          <div className={`container`}>
            <div className='text-center'>
            <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>About Us</h2>
            </div>
            <div className={styles.textCompanyDescription}>
              <p>
                <strong>Raj Agro</strong> is a subsidiary firm of Raj Trader which was established in 1978, and since then we have been engaged in the wholesale of rice, rice flakes, pulses, flour, wheat, maize, and other food grains. Taking a step forward, we have ventured into international trade, importing chickpeas, yellow peas, green peas from various countries such as Canada, Australia, Russia, Turkey, and others.</p>  
              <p> We are a supplier of food grains to various distilleries and institutions, including Pernod Ricard, United Spirits, Globus Spirits, and other reputable distilleries. </p>

              <p className='mb-0'>
                We are a supplier of food grains to various exporters as well. Our range of commodities includes all types of food grains such as rice (broken), maize, barley, chickpeas, quinoa seed, asafoetida seed, cumin seed, and psyllium husk.
              </p>

              <p>
               Our focus is to provide top-quality food grains to our clients, and we take pride in our diverse product range that caters to the needs of different industries. Our team works closely with our clients to understand their specific requirements and offer tailored solutions that meet their needs. 
              </p>
            </div>
          </div>
        
      


      {/* foreign trade us */}
      <div className={`container pt-5 bg-1`}>
        <div className='text-center'>
          <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>foreign Trade</h2>
        </div>
        <div className={styles.textCompanyDescription}>
          <p>We are a supplier of food grains to various distilleries and institutions, including Pernod Ricard, United Spirits, Globus Spirits and other reputable distilleries. Our range of commodities includes all types of food grains, such as rice (broken), maize, barley, chickpeas, quinoa seed, asafoetida seed, cumin seed, and psyllium husk. Additionally, we also supply food grains to various exporters. Our focus is to provide top-quality food grains to meet the needs of different industries.</p>
        </div>
      </div>
      </div>
      </div>

      <OurTestimonials/>


      {/* our client  */}
      <div className={styles.bg1}>
        <div className='text-center'>
          <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>Our Forign Client</h2>
        </div>
        <div className={`container  ${styles.Clientcontainerwrapper}`}>

          {/* left div */}
          <div className={styles.rightContainerWrapper}>
            <div className={styles.rightImageWrapper}>
              <img src="./images/homePage.png" alt="" className='w-75' />
            </div>
          </div>


          {/* right div */}
          <div className={styles.leftContainerWrapper}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.heading}>
                Raj Agro: A Leading Supplier of Food Grains
              </h1>
              <p className={styles.FirstDescription}>Raj Agro is a subsidiary firm of Raj Trader which was established in 1978 offers wholesale of rice, rice flakes, pulses, flour, wheat, maize & other food grains. Supplier to distilleries, institutions & exporters. Diverse product range of top-quality food grains tailored to clients' needs. International trade of chickpeas, yellow & green peas from countries like Canada, Australia, Russia, & Turkey.</p>
            </div>
          </div>

      


        </div>
      </div>
    </div>
  )
}

export default CompanyPage