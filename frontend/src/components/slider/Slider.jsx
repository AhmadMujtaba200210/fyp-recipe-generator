// import React, { useState, useEffect } from "react";
// import "../../shared/navigationbar.css";
// import { getRecipesRandom } from "../../server/requests";

// const Slider = () => {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     const fetchSliderData = async () => {
//       try {
//         const response = await getRecipesRandom(5);
//         setSlides(response.data);
//       } catch (error) {
//         console.error("Error fetching slider data:", error);
//       }
//     };

//     fetchSliderData();
//   }, []);

//   return (
//     <div>
//       <div className="slides right-slider">
//         <ul
//           className="cycle-slideshow"
//           data-cycle-fx="scrollHorz"
//           data-cycle-timeout={4000}
//           data-cycle-slides="li"
//           data-cycle-pager=".cycle-pager"
//         >
//           {slides.map((slide) => (
//             <li key={slide.id}>
//               <a href="#" className="img-box">
//                 <img
//                   width={515}
//                   height={262}
//                   src={`${process.env.REACT_APP_API_BASE_URL}/get_image_515x262/${slide.title}.jpg`} // Assuming your API provides an 'image' property                  // Assuming your API provides an 'image' property
//                   className="attachment-li-slider-thumb wp-post-image"
//                   alt={slide.title}
//                 />
//               </a>
//               <div className="slide-info">
//                 <h2>
//                   <a href={`recipe-single-${slide.id}.html`}>{slide.title}</a>
//                 </h2>

//                 <p>{slide.instruction}</p>
//                 <a href={`recipe-single-${slide.id}.html`} className="readmore">
//                   Read more
//                 </a>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="sliderNav">
//           <div className="cycle-pager"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// Slider.jsx
// Slider.jsx
// Slider.jsx
// Slider.jsx
// Slider.jsx
import React, { useState, useEffect } from "react";
import "./Slider.css";
import { getRecipesRandom } from "../../server/requests";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await getRecipesRandom(10);
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  useEffect(() => {
    // Auto change slide every 3 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideTimer); // Cleanup timer on component unmount

  }, [currentSlide, slides]);

  const currentRecipe = slides[currentSlide] || {};

  return (
    <div className="custom-slider">
      <div className="slides">
        <div className="slide active">
          <div className="left-side">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/get_image/${currentRecipe.title}.jpg`}
              alt={currentRecipe.title}
              className="slide-image"
            />
          </div>
          <div className="right-side">
            <h2>{currentRecipe.title}</h2>
            <p>{currentRecipe.ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
