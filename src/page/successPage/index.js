import { Fragment } from 'react'

function SuccessPage() {
  return (
    <Fragment>
      <div className="bg-white h-screen">
        <div className="w-2/3 m-auto grid grid-cols-12 bg-white h-screen">
          <div className="col-span-6">
            <div className=" ml-auto mt-28">
              <button className="flex flex-row self-center text-xl mr-4 text-slate-500 my-7 hover:text-primary">
                <span className=" self-center text-xl mr-4">
                  <ion-icon size="large" name="arrow-back-outline"></ion-icon>
                </span>
                Return Home
              </button>
              <h1 className="text-4xl font-bold text-[#43D296]">Booking Successful!</h1>
              <p className="text-lg text-slate-500 my-4">
                Thank you for booking with us. To complete your booking, please transfer the total
                amount to the following bank account:
              </p>
              <div className="w-5/6 my-10 ">
                <h1 className="text-2xl font-bold text-slate-700">Recipent Information</h1>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col justify-between mt-8">
                    <h2 className="text font-medium text-slate-400">Bank Name</h2>
                    <h4 className="text font-semibold text-xl text-slate-600">Vietcombank</h4>
                  </div>
                  <div className="flex flex-col justify-between mt-8">
                    <h2 className="text font-medium text-slate-400">Account Number</h2>
                    <h4 className="text font-semibold text-xl text-slate-600">0987654321</h4>
                  </div>
                  <div className="flex flex-col justify-between mt-8">
                    <h2 className="text font-medium text-slate-400">Account Name</h2>
                    <h4 className="text font-semibold text-xl text-slate-600">Huỳnh Hoàng Huy</h4>
                  </div>

                  <div className="flex flex-col justify-between mt-8">
                    <h2 className="text font-medium text-slate-400">Amount</h2>
                    <h4 className="text font-semibold text-xl text-slate-600">1,260,000 VND</h4>
                  </div>
                  <div className="flex flex-col justify-between mt-8">
                    <h2 className="text font-medium text-slate-400">Transfer Description</h2>
                    <h4 className="text font-semibold text-xl text-slate-600">
                      AirVenture ID3429874
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-1/4  relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 px-14">
              <iframe
                className=" "
                src="https://embed.lottiefiles.com/animation/96237"
                width="300"
                height="300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SuccessPage
