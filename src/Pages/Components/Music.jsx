import React from 'react'
import Songs from './Music/Songs'
import Albums from './Music/Albums'
import Features from './Music/Features'

function Music() {
  return (
    <div>
      <div className="">
        <Songs/>
        <Albums/>
        <Features/>
      </div>
    </div>
  )
}

export default Music