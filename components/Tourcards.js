import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Tourcards = () => {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src="/leh.jpeg"
              className="object-cover w-full h-48"
              alt="image"
              height='1000'
              width='1000'
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Leh City Trek (5N/6D)
                </h6>
                <h6 className="mb-2 font-semibold leading-5">
                 21500 INR
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src="/markha.jpeg"
              className="object-cover w-full h-48"
              alt="image"
              height='1000'
              width='1000'
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Markha Valley Trek (5N/6D)
                </h6>
                <h6 className="mb-2 font-semibold leading-5">
                 21500 INR
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src="/sara.jpeg"
              className="object-cover w-full h-48"
              alt="image"
              height='1000'
              width='1000'
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Nubra Valley Trip (5N/6D)
                </h6>
                <h6 className="mb-2 font-semibold leading-5">
                 26000 INR
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <Image
              src="/dunagiri.jpg"
              className="object-cover w-full h-48"
              alt="image"
              height='1000'
              width='1000'
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Pangarchulla Peak Expedition (5N/6D)
                </h6>
                <h6 className="mb-2 font-semibold leading-5">
                 19 INR
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
          </div>
        </Link>
        
        
       
        
      </div>
      
    </div>
    </>
  )
}

export default Tourcards