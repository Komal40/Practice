import React from 'react'


export default function About() {
  return (
    <>
     <h2 className="heading_products">About Us</h2>
    <div style={{display:'flex',marginTop:"3.5rem"}}>
    <div>
    
     <img src='https://www.cellustechindia.com/img/about.png'/>
   </div>
   <div style={{marginLeft:'10rem'}} >
    <h5>Who we are</h5>
    <p>CELLUS TECH INDIA is all LED lighting solution provider company with the focus on energy efficient LED based lighting system and energy conservation. The company envisages a green future by embracing innovative, intelligent lighting solutions, green technology that contributes towards reducing carbon emission. Our extensive product portfolio includes architectural and commercial and household LEDs..</p>
    <h5>What we do</h5>
    <p>The mission of CELLUS TECH INDIA is to be the leading provider of innovative, high quality lighting solutions to commercial, municipal and utility markets. We strive to deliver consistently superior value to our customers and their clients..</p>
    <h5>What we believe in</h5>
    <p>We resolve to provide outstanding service before and after the sale, and take pride in maintaining long term relationships with our customers.</p>
   </div>
   </div>
   <div style={{display:'flex'}}>
    <h2>752</h2>
    <strong>HAPPY CLIENT</strong>
    <h2>71521</h2>
    <strong>WORKING HOURS</strong>
    <h2>255</h2>
    <strong>PROJECTS COMPLETED</strong>
    <h2>15</h2>
    <strong>AWARDS WON</strong>

   </div>

   </>
  )
}
