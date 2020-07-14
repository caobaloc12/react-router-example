import React from "react"
import { Helmet } from "react-helmet"

const Users = () => {
  return (
    <>
      <Helmet defaultTitle='React App' titleTemplate='%s - React App'>
        <title>Users </title>
      </Helmet>
      <div>
        <h2>Users</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea
          ipsa nostrum nam quibusdam? Consequuntur, voluptatibus. Itaque nostrum
          voluptates est inventore aliquid. Enim adipisci minus culpa pariatur
          labore ex illo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni
          aliquam ut quidem beatae blanditiis modi hic veritatis ex sapiente non
          tempore cumque iure veniam, culpa facere cupiditate velit dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          tempore unde velit iure voluptates laudantium enim doloribus soluta,
          quasi dolore laborum fugit ratione hic? Dolorum nesciunt sequi
          repudiandae sunt dicta.
        </p>
      </div>
    </>
  )
}

export default Users
