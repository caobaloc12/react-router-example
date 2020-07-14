import React from "react"
import { Helmet } from "react-helmet"

const Project = () => {
  return (
    <>
      <Helmet defaultTitle='React App' titleTemplate='%s - React App'>
        <title>Projects </title>
      </Helmet>
      <div>
        <h2>Project</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          corporis sequi commodi voluptatem! Illo, eos eligendi. Suscipit error
          temporibus harum corporis libero eius. Quisquam, tempore praesentium
          fugit laborum quos quia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          tenetur, esse iste ipsa ea repudiandae accusantium. Nisi, sit
          incidunt? Earum quasi quod provident. Deleniti eos praesentium
          temporibus tempore quae neque!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque harum
          accusamus, iste vero obcaecati illum unde est aliquam tenetur aliquid
          veritatis, quo earum voluptas odio? Quos voluptates esse perferendis
          officia?
        </p>
      </div>
    </>
  )
}

export default Project
