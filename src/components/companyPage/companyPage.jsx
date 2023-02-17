import React from "react";
import OurTestimonials from "../ourtestimonials/OurTestimonials";
import Products from "../products/products";
import styles from "./companyPage.module.css";

const CompanyPage = () => {
  return (
    <div>
      {/* main banner section`` */}
      <div className={`container commonSpace ${styles.containerwrapper}`}>
        {/* left div */}
        <div className={styles.leftContainerWrapper}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.heading}>
              {/* Raj Agro: A Leading Supplier of Food Grains */}
              Raj Agro:Processors & Traders of agro commodities
            </h2>
            <p className={styles.FirstDescription}>
              Raj Agro is a subsidiary firm of Raj Trader which was established
              in 1978 offers wholesale of rice, rice flakes, pulses, flour,
              wheat, maize & other food grains. Supplier to distilleries,
              institutions & exporters. Diverse product range of top-quality
              food grains tailored to clients' needs. International trade of
              chickpeas, yellow & green peas from countries like Canada,
              Australia, Russia, & Turkey.
            </p>
          </div>
        </div>

        {/* right div */}
        <div className={styles.rightContainerWrapper}>
          <div className={styles.rightImageWrapper}>
            <img src="./images/homePage.webp" alt="" />
          </div>
        </div>
      </div>

      {/* About us */}
     <div className="commonSpace">
     <div className={`container`}>
        <div className="text-center">
          <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>
            About Us
          </h2>
        </div>
        <div className={styles.textCompanyDescription}>
          <p>
            <strong>Raj Agro</strong> is a subsidiary firm of Raj Trader which
            was established in 1978, and since then we have been engaged in the
            wholesale of rice, rice flakes, pulses, flour, wheat, maize, and
            other food grains. Taking a step forward, we have ventured into
            international trade, importing chickpeas, yellow peas, green peas
            from various countries such as Canada, Australia, Russia, Turkey,
            and others.
          </p>
          <p>
            {" "}
            We are a supplier of food grains to various distilleries and
            institutions, including Pernod Ricard, United Spirits, Globus
            Spirits, and other reputable distilleries.{" "}
          </p>

          <p>
            Our focus is to provide top-quality food grains to our clients, and
            we take pride in our diverse product range that caters to the needs
            of different industries. Our team works closely with our clients to
            understand their specific requirements and offer tailored solutions
            that meet their needs.
          </p>
        </div>
      </div>

      {/* banner section */}
      <div className="pt-4">
        <div className="container">
          {/* first div */}
          <div className="d-flex justify-content-center">
            <div className={`${styles.bannerImageWrapper}`}>
              <img src="./images/banner1.webp" alt="" className="w-50 " />
            </div>
            {/* second banner */}
            {/* <div className="d-flex justify-content-center">
            <div className={ `${styles.bannerImageWrapper}`} >
              <img src="./images/banner3.jpg" alt="" className="w-25 " />
            </div>
            </div> */}

            {/* third div */}
            <div className={styles.bannerImageWrapper}>
              <img src="./images/banner2.webp" alt="" className="w-50" />
            </div>
          </div>
        </div>
      </div>
     </div>
      {/* banner section end*/}

      {/* foreign trade us */}
      <div className={styles.mainCompanyDesWrapper}>
        <div className={styles.companyDesWrapper}></div>
        <div className={styles.bgComapnyDescritpion}>
          <div className="">
            

            {/* <Products /> */}
          </div>

          <div
            className={`container pt-2 bg-1 commonSpace ${styles.frogienContainerwrapper} `}
          >
            <div className="text-center">
              <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>
                Foreign Trade
              </h2>
            </div>
            <div className={styles.textCompanyDescription}>
              <p>
                We are a supplier of food grains to various distilleries and
                institutions, including Pernod Ricard, United Spirits, Globus
                Spirits, and other reputable distilleries.
              </p>
              <p>
                Additionally, we also supply food grains to various exporters.
                Our focus is to provide top-quality food grains to meet the
                needs of different industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OurTestimonials />

      {/* our clinent`` */}
      <div className={styles.bg1}>
      <div className="commonSpace">
        <div className="text-center">
          <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>
            Foreign Trade
          </h2>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={styles.clientDivWrapper}>
                <div>
                  {" "}
                  <img src="./images/pernod.webp" alt="pernod" />
                </div>
              </div>
            </div>

           <div className="col-lg-4 col-md-6 col-sm-12 ">
           <div className={styles.clientDivWrapper}>
              <div>
                {" "}
                <img src="./images/united.webp" alt="pernod" />
              </div>
            </div>
           </div>

           <div className="col-lg-4 col-md-6 col-sm-12">
           <div className={styles.clientDivWrapper}>
              <div>
                {" "}
                <img src="./images/global.webp" alt="pernod" />
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
      </div>

      {/* our clinent end`` */}

      {/* our client  */}
      {/* <div className={styles.bg1}>
        <div className="text-center">
          <h2 className={`text-center mb-4 ${styles.aboutHeading}`}>
            Our Foreign Trades
          </h2>
        </div>
        <div className={`container  ${styles.Clientcontainerwrapper}`}>
          <div className={styles.rightContainerWrapper}>
            <div className={styles.rightImageWrapper}>
              <img src="./images/homePage.webp" alt="" className="w-75" />
            </div>
          </div>

          <div className={styles.leftContainerWrapper}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.heading}>
                Raj Agro: A Leading Supplier of Food Grains
              </h1>
              <p className={styles.FirstDescription}>
                We are a supplier of food grains to various distilleries and
                institutions, including Pernod Ricard, United Spirits, Globus
                Spirits, and other reputable distilleries.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CompanyPage;
