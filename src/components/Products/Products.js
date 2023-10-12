import React from "react";
import "./Products.css";

export default function Products() {

    const arr=[
    {
        id:1,
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMpAC04VC2j4DEsGEyKNcTxcOnzM_QUYFfw&usqp=CAU'
    },
    {
        id:2,
        src:'https://www.cellustechindia.com/img/iiot.jpg'
    },
    {
        id:3,
        src:'https://www.cellustechindia.com/img/01.jpg'
    },
    {
        id:4,
        src:'https://www.cellustechindia.com/img/011.jpg'
    },
    {
        id:5,
        src:'https://www.cellustechindia.com/img/02.jpg'
    },
    {
        id:6,
        src:'https://www.cellustechindia.com/img/08.jpg'
    },
    // {
    //     id:7,
    //     src:'https://www.cellustechindia.com/img/04.jpg'
    // },
    {
        id:8,
        src:'https://www.cellustechindia.com/img/04.jpg'
    },
    {
        id:9,
        src:'https://www.cellustechindia.com/img/05.jpg'
    },
    {
        id:10,
        src:'https://www.cellustechindia.com/img/tube_ice_plant.jpg'
    },
    {
        id:11,
        src:'https://www.cellustechindia.com/img/09.jpg'
    },
    {
        id:12,
        src:'https://www.cellustechindia.com/img/03-preview.jpg'
    },
    {
        id:13,
        src:'https://www.cellustechindia.com/img/07.jpg'
    },
    {
        id:14,
        src:'https://www.cellustechindia.com/img/010.jpg'
    },
    {
        id:15,
        src:'https://www.cellustechindia.com/img/13.jpg'
    },
    {
        id:16,
        src:'https://www.cellustechindia.com/img/14.jpg'
    },
    {
        id:17,
        src:'https://www.cellustechindia.com/img/15.jpg'
    },
    {
        id:18,
        src:'https://www.cellustechindia.com/img/electrical-turnkey.jpg'
    },
    {
        id:19,
        src:'https://www.cellustechindia.com/img/solar-turnkey.jpg'
    },
    {
        id:20,
        src:'https://www.cellustechindia.com/img/industrial-solar.jpeg'
    },
    {
        id:21,
        src:'https://www.cellustechindia.com/img/solar-parking.jpg'
    },
    {
        id:22,
        src:'https://www.cellustechindia.com/img/residential-solar.jpg'
    },
    {
        id:23,
        src:'https://www.cellustechindia.com/img/water-heater.jpg'
    },
    
    {
        id:24,
        src:'https://www.cellustechindia.com/img/streetlight.jpg'
    },
    
    {
        id:25,
        src:'https://www.cellustechindia.com/img/cat-genset.jpeg'
    },
    
    {
        id:26,
        src:'https://www.cellustechindia.com/img/transformer.png'
    },
    
    {
        id:27,
        src:'https://www.cellustechindia.com/img/Earthing.jpg'
    },
    {
        id:28,
        src:'https://www.cellustechindia.com/img/electrical-panel.png'
    },
    
]


  return (
    <div id='ele_products'>

   
  <div >
      <h2 className="heading_products">Our Products</h2>

      <div className="button_products">
      <button type="button" class="btn btn-outline-primary button_product">All</button>
      <button type="button" class="btn btn-outline-primary button_product">IIOT Services</button>
      <button type="button" class="btn btn-outline-primary button_product">LED Lightning Products</button>
      <button type="button" class="btn btn-outline-primary button_product">Refrigeration Machines</button>
      <button type="button" class="btn btn-outline-primary button_product ">Ice cube Making Machines</button>
      <button type="button" class="btn btn-outline-primary button_product">Turnkey Project</button>
      <button type="button" class="btn btn-outline-primary button_product">Renewable Energy</button>
      <button type="button" class="btn btn-outline-primary button_product">Non-Renewable Energy</button>


      </div>
      <div className="products">
        
      {
        arr.map((item)=>
        (
            <div class="card " key={item.id} style={{  marginTop:'1.5rem',marginLeft:"3rem",border:"2px solid black",margin:"2rem"}}>
        <img style={{height:'14rem', width: "18rem" }}
          src={item.src}
          class="card-img-top"
          alt="..."
        />
        
        
      </div>
        ))
      }


      
    </div>
    </div> 




{/* 


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    {
        arr.map((item)=>(
            <div class="carousel-item active">
      <img class="d-block w-100" src={item.src} alt="First slide" style={{width:'18rem', height:'18rem'}}/>
    </div>
        ))
    }
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 */}




    </div>
  );
}



