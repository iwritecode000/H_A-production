import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const Blogs = (props) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            props.blogs.data.map((item) => {
              return (
                <>
                  <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                    <Link href={`/blogs/${item.attributes.slug}`} aria-label="Article">
                      <Image
                        src={`${item.attributes.blog_cover.data.attributes.formats.small.url}`}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                        height='1000'
                        width='1000'

                      />
                    </Link>
                    <div className="py-5">
                      <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                        {`Publish Date : ${item.attributes.publish_date}`}
                      </p>
                      <Link
                        href="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        <p className="text-l font-bold leading-5">{item.attributes.title}</p>
                      </Link>
                      <p className="mb-4 text-sm text-gray-700">
                        {item.attributes.description}
                      </p>

                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 3d483172cb28029d12a1fb93c38372258fd2674d3afcdc17a216db917744b7d09720c1c64d1b055451cad2eaf2edefb50c6bd8a4daa6f70cb0186b7423f45b4bd6ac3f3a150d67f3ab28aae94b1c1d26cd98f5cb13dbf9927d1414213b76e718be616d1ccf782a23d0390c085ce30948a85d53746b74ec491efa8224c5927a66" }

  let a = await fetch("https://blooming-scrubland-06731.herokuapp.com/api/blogs?populate=*", { headers: headers })
  let blogs = await a.json();
  console.log(blogs)
  return {
    props: {
      blogs: blogs
    },
  }
}

export default Blogs