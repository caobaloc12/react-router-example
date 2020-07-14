import React from "react"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <>
      <Helmet titleTemplate='%s - React App'>
        <title>About </title>
      </Helmet>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio
          quia tempore non enim harum, in, ipsa, deleniti possimus accusantium
          optio repellat consectetur illo voluptatibus quidem culpa porro
          repudiandae. Cupiditate?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          laudantium quos, quod, repellendus temporibus fugit quo, blanditiis
          praesentium aspernatur ea assumenda! Culpa, aliquam? A eveniet alias
          numquam nemo itaque voluptates!
        </p>
      </div>
    </>
  )
}

export default About
