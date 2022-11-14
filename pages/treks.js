import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Navbar from "../components/Navbar"
import background from "/"
const Treks = (props) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {
            props.products.data.map((item) => {
              return (
                <>
                  <Link
                    href={`/treks/${item.attributes.slug}`}
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                  >
                    <div className="flex flex-col h-full">

                      <Image
                        src={`${item.attributes.image.data.attributes.formats.small.url}`}

                        className="object-cover w-full h-48"
                        alt="image"
                        height='1000'
                        width='1000'
                      />
                      <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                          <h6 className="mb-2 font-semibold leading-5">
                            {item.attributes.title}
                          </h6>
                          <h6 className="mb-2 font-semibold leading-5">
                          </h6>
                          <p className="text-sm text-gray-900">
                            Sportacus andrew weatherall goose Refined gentlemen super
                            mario des lynam alpha trion zap rowsdower.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              )
            })
          }

        </div>
      </div>
    </>

  )
}

// 

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer eb71366b2fb6a454aad55fc555073d4d7ce1db06b6d2f68a824b4c14fb8014f3de69ec90b7890db33c04d9e130b8958b6e43badb322b172728f67a7ac0e244fffa5d58e6e1126e6e8045471cdd341b25d30389d2a52ec24f3aea108f8db204d329a1cbb92ae956f78148916202ab6e01839390d761773040c4b98f99a38b7150" }

  let a = await fetch("https://salty-savannah-84149.herokuapp.com/api/products?populate=*", { headers: headers })
  let products = await a.json();
  console.log(products)
  return {
    props: {
      products: products
    },
  }
}



export default Treks