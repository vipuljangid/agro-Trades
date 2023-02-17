import React, { useState } from "react";
// import JackSandsPic from "../../../../images/SubPages/OurTestimonials/JackSandsPic.webp";
// import BCGPic from "../../../../images/SubPages/OurTestimonials/BCGPic.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Ourtestimonials.css";
// import Popup1 from "./Popup1";
const OurTestimonials = () => {
  const [toggle, settoggle] = useState(0);
  const [popupstate, setPopupstate] = useState(false);

  const clientData = [
    {
      name: "Jack",
      // photo: JackSandsPic,
      position: "CEO",
      review:
        "So, as we've built out my application Interact Technologies, which will be released shortly after the new year, they've taken over all programming, such as Website Development, Chrome Extension, NLP, Keyword Extraction, and on the Back-end, building out HubSpot CMS, and what's nice is that everything is communicating really well. I think probably the best part of working with LakeBrains Technologies is the relationship that we have built that goes way beyond the Client- Vendor Relationship.",
    },
    {
      name: "BCG",
      // photo: BCGPic,
      position: "CEO",
      review:
        "Overall, I was very happy with the Data Scraping. The quality of the data was up to the mark and encapsulated everything that I had asked for. You guys also had a great turnaround time for the job. Thanks for all the help!",
    },
  ];

  const WorkImage = [
    {
      image: "./images/gallary/gallary1.webp",
      alt: "image"
    },

    {
      image: "./images/gallary/gallary2.webp",
      alt: "image"
    },
    {
      image: "./images/gallary/gallary3.webp",
      alt: "image"
    },
    {
      image: "./images/gallary/gallary4.webp",
      alt: "image"
    },
    {
      image: "./images/gallary/gallary5.webp",
      alt: "image"
    },

    {
      image: "./images/gallary/gallary6.webp",
      alt: "image"
    }

  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1204, min: 800 },
      items: 2,
      slidesToSlide: 2,
    },
    smalltablet: {
      breakpoint: { max: 800, min: 550 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handletoggle = (e) => {
    settoggle(e);
    setPopupstate(true);
  };

  return (
    // <div className="main-container-work-wrapper">
    //   <div className="container-fluid ">
    //     <div className="example-classname ">
    //       <div className="container ">
    //         <div className="testimonials-wrapper">
    //           <div className=" our-test-wrapper-000 w-100 ">
    //             <div className="our-test-wrapper-0 container ">
    //               <div className="col-lg-5 our-test-heading-t-0 text-left "
    //                 onClick={() => handletoggle(1)}
    //               >
    //                 <h2 className="text-center">Our WorkSpace</h2>
    //                 </div>

    //               <div className="col-lg-7 our-test-wrapper-0-1">
    //                 <Carousel
    //                   swipeable={true}
    //                   draggable={true}
    //                   //   showDots={true}
    //                   responsive={responsive}
    //                   ssr={true} // means to render carousel on server-side.
    //                   infinite={true}
    //                   autoPlay={true}
    //                   autoPlaySpeed={10000}
    //                   keyBoardControl={true}
    //                   customTransition="all 1s ease-in-out"
    //                   transitionDuration={1000}
    //                   containerclassName="carousel-container12"
    //                   removeArrowOnDeviceType={["tablet", "mobile"]}
    //                   //   deviceType={props.deviceType}
    //                   dotListclassName="custom-dot-list-style1"
    //                   itemclassName="carousel-item-padding-40"
    //                   className=" text-center align-center "
    //                 >
    //                   {WorkImage.map((items, index) => (
    //                     <div className="our-test-items-wrapper-0" key={index}>
    //                    <div>
    //                     <img src={items.image} alt={items.alt} />
    //                    </div>
    //                     </div>
    //                   ))}
    //                 </Carousel>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="carousalWrapper commonSpace">
      <div className="text-center">
      <h2 className="text-center mb-4 workHeading"> Our Workshop</h2>
      </div>

      <div>
        <p></p>

        <div className="our-test-wrapper-0-1">
          <Carousel
            swipeable={true}
            draggable={true}
            //   showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition="all 1s ease-in-out"
            transitionDuration={1000}
            containerclassName="carousel-container12"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={props.deviceType}
            dotListclassName="custom-dot-list-style1"
            itemclassName="d-flex align-item-center justify-content-center"
            className="w-100 mx-auto"
          >
            {WorkImage.map((items, index) => (
              <div className="our-test-items-wrapper-0" key={index}>
                <div>
                  <img src={items.image} alt={items.alt} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
      );
};

      export default OurTestimonials;
