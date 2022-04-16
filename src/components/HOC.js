import React from 'react'

function HOC(props) {
  return (
    <div style={{border: '2px solid black', padding: '20px', borderRadius: '20px'}}>
        <props.component />
    </div>
  )
}

export default HOC