import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (

    <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <img class="mainImg" src="https://teresas.ac.in/wp-content/uploads/2021/07/20190820185239-GettyImages-985550942.jpeg"></img>
    <div class="allText aboveText">
      <p class="text-blk headingText">
       DIGITAL MARKETING
      </p>
      <p class="text-blk subHeadingText">
        
      </p>
      <p class="text-blk description">
      <em><b>Digital Marketing is not an Art of selling Products.
      It is the Art of making people buy the Product that you sell!</b></em></p>
    <p class="text-blk description">
      <em><b>"GOOD MARKETING"</b> <b>makes the company look Smart!</b></em> </p>
      <p class="text-blk description">
      <em><b>"GREAT MARKETING"</b><b> makes the customer feel Smart!</b></em>
      </p>
      <button class="explore">
        <em>Explore</em>
      </button>
    </div>
  </div>
 
  </div>

    )
}

export default About
