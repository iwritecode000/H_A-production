import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Blogcards = () => {
  return (
    <>
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <Link href="/" aria-label="Article">
            <Image
              src="/phugtal.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
              height='1000'
              width='1000'

            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">How to Reach Phugtal Monastery</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <Link href="/" aria-label="Article">
            <Image
              src="/leh.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
              height='1000'
              width='1000'

            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Complete guide to leh city sidescene</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <Link href="/" aria-label="Article">
            <Image
              src="/camping.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
              height='1000'
              width='1000'

            />
          </Link>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <Link
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Best camping Destinations in India</p>
            </Link>
            <p className="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Blogcards