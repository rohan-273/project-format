import React from 'react'
import { AuthorizedWrapper } from '../Other/AuthorizedWrapper'

const Home = () => {
  return (
    <div className="container-wrapper">
      <AuthorizedWrapper authorizedRoles={["Admin"]}>
        <div>
          <h3>Hello Admin</h3>
        </div>
      </AuthorizedWrapper>
    </div>
  )
}

export default Home