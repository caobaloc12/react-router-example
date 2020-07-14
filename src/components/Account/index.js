import React from "react"
import { useAuth } from "../../useAuth"
import { Helmet } from "react-helmet"

const Account = () => {
  const auth = useAuth()

  return (
    <>
      <Helmet titleTemplate='%s - React app'>
        <title>My Account</title>
      </Helmet>
      <div className='container'>
        <h2>Hello, {auth.user.email.split("@")[0]}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          nam autem optio consequuntur velit fuga. Aspernatur, recusandae sequi
          ex necessitatibus quos ullam maxime eum suscipit, hic itaque aliquid
          eaque nulla!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          provident impedit facilis, ab aut consequuntur dicta eaque nihil in
          voluptatem obcaecati sit nobis! Blanditiis tenetur quae eius eligendi
          aperiam ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi
          vel cum ipsum rem fuga eligendi molestias accusantium ipsa soluta!
          Libero culpa esse dolor? Labore recusandae tempora consequuntur et
          neque?
        </p>
      </div>
    </>
  )
}

export default Account
