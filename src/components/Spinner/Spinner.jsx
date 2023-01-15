import React from 'react'

const Spinner = () => {
  return (
    <div className="h-screen max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    </div>
  )
}

export default Spinner