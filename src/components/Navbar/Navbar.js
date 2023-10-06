import React, { Component } from 'react'
import './Navbar.css'



class Navbar extends Component{

    state={dropdown:false};

    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    handleMenu=()=>{
        this.setState({dropdown: !this.state.dropdown})
    }

    render(){
  return (
    <nav>
        {/* 1st part */}
        <div >
            <img className='img1' src='https://cellustechindia.com/img/cti_new_logo2.png' alt='logo'/>
        </div>

        {/* 2nd part */}
        <div>
            <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
                <li><a className='active' href='#'>Home</a>
                </li>
                <li><a href='#about' onClick={this.handleMenu}>About</a>
                    <ul id='dropmenu' className={this.state.dropdown ? '#dropmenu click' : '#dropmenu'}>
                        <li><a className='click' href='#'>A</a></li>
                        <li><a className='click' href='#'>A</a></li>
                        <li><a className='click' href='#'>A</a></li>
                        <li><a className='click' href='#'>A</a></li>
                    </ul>
                </li>
                <li><a href='#products'>Products</a></li>
                <li><a href='#consulting'>Consulting</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#team'>Team</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a>SignUp</a></li>
            </ul>
        </div>
        {/* 3rd part */}
        <div >
            <img className='img' src='https://cellustechindia.com/img/skaio_logo.png' alt='logo'/>
        </div>



        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    </nav>
  )
}
}




export default Navbar;



