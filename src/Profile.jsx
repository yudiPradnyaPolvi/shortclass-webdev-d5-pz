import React from 'react'
import '../src/style.css'


function Profile() {
  return (
    <div
    style={{
      backgroundColor : '#00B6DF',
      width : '100vw',
      height : '100vh',
      backgroundPosition : 'bottom right',
      backgroundRepeat:'no-repeat',
      display : 'flex',
      justifyContent :'center',
      alignItems : 'center'
    }}
    >
      <div className='card'>
        <img src="diri.jpeg" alt="pradnya" />
        <div className='name'>I'm Pradnya</div>
        <div className='universitas'>Udayana University</div>
        <div className='age'>23 years old</div>
        <button className='button'>Contact Me</button>

      </div>
        
    </div>
  )
}

export default Profile