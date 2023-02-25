import React from 'react'

const Alert = (props) => {
  return (
    props.type.type && <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.type.type}!</strong>{props.type.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    </div>
  )
}

export default Alert
