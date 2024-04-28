import React from 'react'

const VerifyAuth = ({isAuth}) => {
  return (
    <div>
        {isAuth?<>User Authenticated</>:<>User Not Authenticated</>}
    </div>
  )
}

export default VerifyAuth
