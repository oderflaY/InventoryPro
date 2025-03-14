import { Navigate } from 'react-router-dom';
import Carrusel from '../components/carrusel'; // Asegúrate de que la ruta sea correcta

export default function Homepage() {
  // Si existe un token de sesion se redirije a la dashboard
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <>
      {/* Header  */}
      <header className="fixed top-0 left-0 w-full h-[60px] bg-white text-black flex items-center justify-between px-5 shadow-md z-[1000]">
        <a href='#'>
          <img src="/images-home/logo_2.png" className="h-[7vmin] w-[28vmin] px-[0.9vmin]" alt="logo" />
        </a>

        <nav className="flex gap-5">
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Home</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Servicies</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Products</a>
          <a className="text-black text-[16px] font-bold hover:underline" href="#">Contact</a>
        </nav>

        <div className="flex gap-2">
          <a href='/auth/login'>
          <button className="bg-[#11214D] text-white border-none px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">Login</button>
          </a>

          <a href='/auth/register'>
          <button className="bg-[#11214D] text-white border-none px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">Sign Up</button>
          </a>
        </div>

        <hr></hr>
      </header>

      {/* Section I */}
      <section className="pt-20 flex justify-between items-center px-[75px] pr-[200px] bg-gray-100 ">
        <div className="max-w-1/2 space-y-2">
          <h1 className="text-[40px] font-bold">Inventory management <br></br> Now Simplified <br></br> <span className="text-blue-700">For Everyone</span></h1>
          <p>With InventoryPRO it is very easy to manage your inventory</p>
          <button className="bg-[#11214D] text-white border-none px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D]">Learn More</button>
        </div>
        <div>
          <img className="w-[400px] h-auto" src="/images-home/sect_I.png" alt="Hero Image" />
        </div>
      </section>

      {/* Section II */}
      <section className="text-center p-12 bg-white">
        <h2 className="font-bold text-3xl">Improve experience in your inventory</h2>
        <div className="inline-block text-left w-[30%] m-5 leading-[1.5] space-y-2">
          <img src="/images-home/logo_idk.png" className="w-[100px]" alt="logo" />
          <h3 className="font-bold">Multiple Inventories</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className="inline-block text-left w-[30%] m-5 leading-[1.5] space-y-2">
          <img src="/images-home/logo_idk.png" className="w-[100px]" alt="logo" />
          <h3 className="font-bold">Update Inventories</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className="inline-block text-left w-[30%] m-5 leading-[1.5] space-y-2">
          <img src="/images-home/logo_idk.png" className="w-[100px]" alt="logo" />
          <h3 className="font-bold">Security</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </section>

      {/* Section III */}
      <section className="text-center leading-[1.5] p-12 bg-gray-100">
        <h2 className="font-bold">Prices, simple and suited for all your needs</h2>
        <p className="font-bold">Annual Save 20% per month</p>
        <div className="flex justify-center gap-5 pt-5">
          <div className="bg-white p-5 rounded-lg shadow-md w-[400px] ">
            <div className='text-white bg-blue-900 h-[110px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
              <h3>FREE</h3>
              <p>$0 / month</p>
              <button className='bg-white text-blue-700 border-none px-4 py-2 text-[15px] rounded-full w-[180px] hover:bg-[#11214D] hover:text-white'>Choose this plan</button>
            </div>
            <ul className="list-none p-0 text-left m-5">
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">10GB storage</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Basic integrations</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Standard Encryption</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Email Support</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md w-[400px]">
            <div className='text-white bg-blue-900 h-[110px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
              <h3>Premium</h3>
              <p>$99 / month</p>
              <button className='bg-white text-blue-700 border-none px-4 py-2 text-[15px] rounded-full w-[180px] hover:bg-[#11214D] hover:text-white'>Choose this plan</button>
            </div>
            <ul className="list-none p-0 text-left m-5">
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">10GB storage</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Basic integrations</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Standard Encryption</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Email Support</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md w-[400px]">
            <div className='text-white bg-blue-900 h-[110px] leading-[1.8] text-left pl-[30px] rounded-lg space-y-0.5'>
              <h3>Business</h3>
              <p>$299 / month</p>
              <button className='bg-white text-blue-700 border-none px-4 py-2 text-[15px] rounded-full w-[180px] hover:bg-[#11214D] hover:text-white'>Choose this plan</button>
            </div>
            <ul className="list-none p-0 text-left m-5">
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">10GB storage</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Basic integrations</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Standard Encryption</li>
              <li className="relative pl-6 my-2 before:content-['✔'] before:absolute before:left-0 before:text-[#11214D] before:font-bold">Email Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <div className="faq-containermax-w-[900px] mx-auto grid grid-cols-2 gap-4 text-center px-10">
        <h2 className="text-[24px] font-bold mb-5 col-span-2 pt-6">Frequently Ask Questions</h2>

        <details className="bg-white rounded-md p-4 shadow-md cursor-pointer transition ease-in-out border-l-4 border-transparent open:border-[#11214D]">
          <summary className="font-bold flex items-center justify-between cursor-pointer before:content-['➕'] before:text-gray-500 before:mr-2 open:before:content-['➖'] open:before:text-[#11214D]">
            Question I
          </summary>
          <div className="mt-2 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </details>

        <details className="bg-white rounded-md p-4 shadow-md cursor-pointer transition ease-in-out border-l-4 border-transparent open:border-[#11214D]">
          <summary className="font-bold flex items-center justify-between cursor-pointer before:content-['➕'] before:text-gray-500 before:mr-2 open:before:content-['➖'] open:before:text-[#11214D]">
            Question II
          </summary>
          <div className="mt-2 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </details>

        <details className="bg-white rounded-md p-4 shadow-md cursor-pointer transition ease-in-out border-l-4 border-transparent open:border-[#11214D]">
          <summary className="font-bold flex items-center justify-between cursor-pointer before:content-['➕'] before:text-gray-500 before:mr-2 open:before:content-['➖'] open:before:text-[#11214D]">
            Question III
          </summary>
          <div className="mt-2 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </details>

        <details className="bg-white rounded-md p-4 shadow-md cursor-pointer transition ease-in-out border-l-4 border-transparent open:border-[#11214D]">
          <summary className="font-bold flex items-center justify-between cursor-pointer before:content-['➕'] before:text-gray-500 before:mr-2 open:before:content-['➖'] open:before:text-[#11214D]">
            Question IV
          </summary>
          <div className="mt-2 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </details>
      </div>

      {/* Section Opinions / Carrusel  */}
      <div className="App">
        <Carrusel />
      </div>

      {/* Footer */}
      <footer className="bg-white p-10 flex justify-between items-start">
        <div className="flex items-start">
          <img className="h-[7vmin] w-[28vmin] pl-[0.9vmin]" src="/images-home/logo_2.png" alt="InventoryPRO Logo" />
        </div>
        <div className="flex gap-10">
          <div>
            <h3 className="mb-2">Solutions</h3>
            <ul className="list-none p-0">
              <li><a className="text-gray-700 no-underline" href="#">Small Business</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Freelancers</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Customers</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Taxes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Company</h3>
            <ul className="list-none p-0">
              <li><a className="text-gray-700 no-underline" href="#">About Us</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Career</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Learn</h3>
            <ul className="list-none p-0">
              <li><a className="text-gray-700 no-underline" href="#">Blog</a></li>
              <li><a className="text-gray-700 no-underline" href="#">EBooks</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Guides</a></li>
              <li><a className="text-gray-700 no-underline" href="#">Templates</a></li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <h3 className="">Follow us on</h3>
          <div className="flex gap-2">
            <a href='#'>
              <img className="w-[24px]" src="/images-home/face_log.png" alt="Facebook" />
            </a>
            <a href='https://x.com/InventoryPr0'>
              <img className="w-[24px]" src="/images-home/twi_log.png" alt="Twitter" />
            </a>
            <a href='#'>
              <img className="w-[24px]" src="/images-home/inst_log.png" alt="Instagram" />
            </a>
          </div>
          <h3 className="">Get the App</h3>
          <div className="mt-2">
            <a href='#'>
              <img className="w-[120px] mt-2" src="/images-home/get-google.png" alt="Google Play" />
            </a>
            <a href='#'>
              <img className="w-[120px] mt-2" src="/images-home/get-apps.png" alt="App Store" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}