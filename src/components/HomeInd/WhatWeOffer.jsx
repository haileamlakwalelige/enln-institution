import blended from '../../assets/blended.svg';

function WhatWeOffer() {
    return (
      <>
        <div className="mx-auto w-11/12 ">
          <h1 className="heading py-5 text-center lg:text-start">What We Offer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-x-4">
            <div className="max-w-sm rounded-lg p-6 ">
              <img
                src={blended}
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
            <div className="max-w-sm rounded-lg lp-6 ">
              <img
                src={blended}
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
            <div className="max-w-sm rounded-lg p-6 ">
              <img
                src={blended}
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
            <div className="max-w-sm rounded-lg p-6 ">
              <img
                src={blended}
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
        </div>
      </>
    );
  }
  
  export default WhatWeOffer;