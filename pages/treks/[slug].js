import { useRouter } from 'next/router'
import { useState } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Slug = ({ product }) => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <Navbar />
    
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      
        <div class="space-y-4">
          {
            product.attributes.trek_itinerary.map((item)=>{
              return(
                <>
                  <Item title={item.day.title}>
                    {
                      item.day.description
                    }
          </Item>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context.query.slug)
  let headers = { Authorization: 'Bearer 3d483172cb28029d12a1fb93c38372258fd2674d3afcdc17a216db917744b7d09720c1c64d1b055451cad2eaf2edefb50c6bd8a4daa6f70cb0186b7423f45b4bd6ac3f3a150d67f3ab28aae94b1c1d26cd98f5cb13dbf9927d1414213b76e718be616d1ccf782a23d0390c085ce30948a85d53746b74ec491efa8224c5927a66' }
  let a = await fetch("https://blooming-scrubland-06731.herokuapp.com/api/treks?filters[slug]=" + context.query.slug, { headers: headers })
  let product = await a.json()
  return {
    props: { product: product.data[0] },
  }
}

export default Slug