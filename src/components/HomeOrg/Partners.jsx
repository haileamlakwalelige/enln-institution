import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AAUImage from "../../assets/AAU.png"
function Partners() {
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10,
    };
  return (
    <>
      <div className="mx-5 flex w-11/12 flex-col lg:w-full lg:flex-row ">
        <div className="flex w-full items-center justify-center   border-black p-5 lg:w-1/2 lg:border-r-2 ">
          <p className=" text-justify">
            Connect with organizations worldwide through ENLN Academy. Our
            partnerships include educational institutions, corporations, and
            industry leaders. Join us to elevate your learning experience.
          </p>
        </div>
        <div className=" p-5 flex w-full  lg:w-1/2">
          <Slider {...sliderSettings} className=" h-full w-full">
            <div>
              <img src={AAUImage} alt="" className=" object-cover" />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            <div>
              <img
                src={AAUImage}
                alt=""
                className="max-w-24 h-auto w-full object-cover"
              />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Partners