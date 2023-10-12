import React from 'react'
import {content} from './Content.js'

export default function Services() {
    
  return (
    <>
    <div id='consult_services'>

   
    <h2 className="heading_products">Our Services</h2>
    <div style={{display:'flex' , flexWrap:'wrap'}}>
    {
        content.map((item)=>
        (
            
                <div class="card " style={{ display:"flex", marginTop:'1.5rem',marginLeft:"3rem",margin:"2rem",height:'20rem', width: "18rem",backgroundColor:'whitesmoke' }}>
            
          
      <div class="card-body">
          <img src={item.bulb} alt='logo' style={{marginLeft:'5rem'}}/>
            {/* <i class="fa fa-lightbulb-o"></i> */}
        <h5 class="card-title" style={{textAlign:'center'}}>{item.heading}</h5>
        <p class="card-text" style={{textAlign:'center'}}>{item.para}</p>
        
      </div>
    </div>
           
        ))
    }
     </div>
     </div>
    </>
  )
 
}


