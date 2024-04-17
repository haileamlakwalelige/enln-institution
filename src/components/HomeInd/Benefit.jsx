import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlendedImage from '../../assets/blended.svg';


function Benefits() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Extra small devices (portrait phones, less than 576px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="m-5 flex w-11/12 flex-col lg:w-full lg:flex-row overflow-x-hidden">
      <div className="flex w-full items-center justify-center p-5 lg:w-1/2 lg:border-r-2 ">
        <p className=" heading">ENLN Academy Benefits</p>
      </div>
      <div className=" flex w-full p-5  lg:w-1/2">
        <Slider {...sliderSettings} className=" h-full w-full">
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          <div>
            <div className="max-w-lg rounded-lg p-6 ">
              <img
                src={BlendedImage}
                className="mx-auto w-full items-center justify-center"
              />
              <h5 className="-mt-10 mb-2 text-center text-2xl font-semibold tracking-tight">
                Need a help in Claim?
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
}

export default Benefits;
