import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <>
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4" />
      </div>
      <div className="relative">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="grid gap-12 row-gap-5 md:grid-cols-2">
            <div className="relative">
             
              <div className="relative">
                
                <h6 className="mb-2 font-semibold leading-5">
                  The quick, brown fox jumps over a lazy dog
                </h6>
                <p className="text-sm text-gray-900">
                  Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                  Slugging catcher slide bench league.
                </p>
              </div>
            </div>
            <div>
              
              <h6 className="mb-2 font-semibold leading-5">
                A flower in my garden, a mystery
              </h6>
              <p className="text-sm text-gray-900">
                They urge you to put down your sword and come join the winners.
              </p>
            </div>
            <div>
              
              <h6 className="mb-2 font-semibold leading-5">
                Skate ipsum dolor sit amet, alley oop
              </h6>
              <p className="text-sm text-gray-900">
                If one examines precultural libertarianism, one is faced with a
                choice: either accept rationalism.
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                The first mate and his Skipper too will
              </h6>
              <p className="text-sm text-gray-900">
                Those options are already baked in with this model shoot me an
                email clear blue water.
              </p>
            </div>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="/dunagiri.jpg"
              alt=""
              width='1000'
              height='1000'
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feature