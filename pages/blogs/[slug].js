import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'


const Slug = ({ blog }) => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Navbar />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        {
                            blog.attributes.content.map((item) => {
                                return (
                                    <>
                                        <div className="space-y-8">
                                            <div>
                                                <p className="mb-4 text-xl font-medium">
                                                    {item.point.issue}
                                                </p>
                                                <p className="text-gray-700">
                                                    {item.point.discussions}
                                                </p>
                                            </div>
                                        </div>
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
    let a = await fetch("https://blooming-scrubland-06731.herokuapp.com/api/blogs?filters[slug]=" + context.query.slug + "&populate=*", { headers: headers })
    let blog = await a.json()
    return {
        props: { blog: blog.data[0] },
    }
}

export default Slug