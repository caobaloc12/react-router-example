import React from "react"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet defaultTitle='React App' />
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae
          vero voluptate dolorum rerum sapiente ducimus quibusdam suscipit
          numquam debitis quis aut, expedita, dignissimos dicta. Est quo
          deserunt impedit placeat!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          minima tempora ducimus recusandae reprehenderit, atque inventore error
          voluptatibus porro, ipsa officia sed saepe excepturi maxime quisquam
          nulla minus vitae iure!
        </p>
      </div>
    </>
  )
}

export default Home
