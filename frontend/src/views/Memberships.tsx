import { IoCheckmark, IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../components/AuthToken";


export default function Memberships() {
  const token = localStorage.getItem("token");
  const { user } = useAuth();

  return (
    <>
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen pt-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center leading-10">
          Choose Subscription Plan
        </h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi blanditiis soluta ullam.
        </span>
        <section className="text-center leading-[1.5] pt-8 pb-5 bg-gray-100">
          <div className="flex justify-center gap-5 h-80">
            {/* Free */}
            <div className="bg-white rounded-lg shadow-md w-[400px] ">
              <div className='text-white bg-gradient-to-b from-[#1E3A8A] to-[#11214D] h-[145px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
              <h3 className="pl-3 pt-3 font-semibold ">Free</h3>
                <div className="flex">
                  <p className="text-3xl pl-3">$0</p>
                  <p className="text-1xl pt-2 pl-3 font-light italic">Month</p>

                </div>

                {token &&
                  <div className="pl-10 pt-1.5">
                    <a href="">
                      <button disabled className='font-bold bg-white text-blue-900 border-none py-2 text-[15px] rounded-full w-[250px]'>
                        Subscription Obtained
                      </button>
                    </a>
                  </div>}

              </div>
              <ul className="pt-2 mt-4 space-y-2 text-white">
                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>10GB storage</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>Basic integrations</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCloseSharp className="text-red-500 w-6 h-6" />
                  <li className='text-blue-900'>Standard Encryption</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCloseSharp className="text-red-500 w-6 h-6" />
                  <li className='text-blue-900'>Email Support</li>
                </div>
              </ul>
            </div>
            {/* Premium */}
            <div className="bg-white rounded-lg shadow-md w-[400px]">
              <div className='text-white bg-gradient-to-b from-[#1E3A8A] to-[#11214D] h-[145px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
                <h3 className="pl-3 pt-3 font-semibold ">Premium</h3>
                <div className="flex">
                  <p className="text-3xl pl-3">$960</p>
                  <p className="text-1xl pt-2 pl-3 font-light italic">Year</p>
                  <p className="text-2xl pt-1 pl-10">$80</p>
                  <p className="text-1xl pt-2 pl-3 font-light italic">Per month</p>
                </div>

                {/* Si el usuario es rango premium o business no podra elegir esta opcion */}
                {token && (user?.role?.toLowerCase() === 'premium' || user?.role?.toLowerCase() === 'business' || user?.role?.toLowerCase() === 'admin') && (
                  <div className="pl-10 pt-1.5">
                    <a href="">
                      <button disabled className=' font-bold bg-white text-blue-900 border-2 border-transparent py-2 text-[15px] rounded-full w-[250px]'>
                        Subscription Obtained
                      </button>
                    </a>
                  </div>
                )}

                {token && user?.role?.toLowerCase() === 'free' &&
                  <div className="pl-10 pt-1.5">
                    <a href="">
                      <button className=' font-bold bg-white text-blue-900 border-2 border-transparent py-2 text-[15px] rounded-full w-[250px] hover:bg-[#11214D] hover:text-white hover:border-2 hover:border-white'>
                        Choose this plan
                      </button>
                    </a>
                  </div>}

              </div>
              <ul className="pt-2 mt-4 space-y-2 ">
                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>10GB storage</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>Basic integrations</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>Standard Encryption</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCloseSharp className="text-red-500 w-6 h-6" />
                  <li className='text-blue-900'>Email Support</li>
                </div>
              </ul>
            </div>
            {/* Business */}
            <div className="bg-white rounded-lg shadow-md w-[400px]">
              <div className='text-white bg-gradient-to-b from-[#1E3A8A] to-[#11214D] h-[145px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
              <h3 className="pl-3 pt-3 font-semibold ">Premium</h3>
                <div className="flex">
                  <p className="text-3xl pl-3">$2880</p>
                  <p className="text-1xl pt-2 pl-3 font-light italic">Year</p>
                  <p className="text-2xl pt-1 pl-10">$240</p>
                  <p className="text-1xl pt-2 pl-3 font-light italic">Per month</p>
                </div>

                {/* Si el usuario es rango business no podra elegir esta opcion */}
                {token && (user?.role?.toLowerCase() === 'business' || user?.role?.toLowerCase() === 'admin') && (
                  <div className="pl-10 pt-1.5">
                    <a href="">
                      <button disabled className='font-bold bg-white text-blue-900 border-2 border-transparent py-2 text-[15px] rounded-full w-[250px]'>
                        Subscription Obtained
                      </button>
                    </a>
                  </div>
                )}

                {token && (user?.role?.toLowerCase() === 'free' || user?.role?.toLowerCase() === 'premium') &&
                  <div className="pl-10 pt-1.5">
                    <a href="">
                      <button className='font-bold bg-white text-blue-900 border-2 border-transparent py-2 text-[15px] rounded-full w-[250px] hover:bg-[#11214D] hover:text-white hover:border-2 hover:border-white'>
                        Choose this plan
                      </button>
                    </a>
                  </div>}
              </div>
              <ul className="mt-4 space-y-2 text-white">
                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-black'>10GB storage</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-black'>Basic integrations</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-black'>Standard Encryption</li>
                </div>

                <div className="flex items-center pl-10 space-x-4">
                  <IoCheckmark className="text-green-500 w-6 h-6" />
                  <li className='text-blue-900'>Email Support</li>
                </div>
              </ul>
            </div>
          </div>
        </section>

        {!token &&
          <div>
            <h1 className=" text-2xl font-semibold text-gray-800 text-center leading-10">It looks like you're not registered yet.</h1>
            <h2 className="text-xl text-gray-800 text-center ">Please log in to your account first to purchase a subscription.</h2>
          </div>}
        {!token &&
          <div className="pt-2 justify-center items-center">
            <a href="/auth/login">
              <button className='rounded-lg font-bold bg-[#11214D] text-white border-2 border-white px-4 py-2 text-[15px] w-[180px] hover:bg-white hover:text-[#11214D] hover:border-2 hover:border-[#11214D]'>
                Login
              </button>
            </a>
          </div>}
      </div>

    </>
  );
}