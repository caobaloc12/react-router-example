import React from "react"
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <>
      <Helmet defaultTitle='React App' titleTemplate='%s - React App'>
        <title>Contact </title>
      </Helmet>
      <div>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente
          debitis sit atque unde et, minima delectus quod? Unde aliquam quae
          iure, doloremque cumque sunt eum dolore obcaecati? Assumenda, beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          expedita et nulla beatae cumque facere necessitatibus eum accusamus
          accusantium maxime. At delectus, labore ea quos hic repudiandae
          eveniet ad dicta?
        </p>
      </div>
    </>
  )
}

export default Contact
