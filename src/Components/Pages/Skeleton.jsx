import React from 'react'

const Skeleton = () => {
  return (
    <div style={{display:"flex"}}>
      <Skeleton variant="rectangular" width={110} height={218} />
      <Skeleton variant="rectangular" width={110} height={218} />
      <Skeleton variant="rectangular" width={110} height={218} />
    </div>
  )
}

export default Skeleton
