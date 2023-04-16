import React from 'react';

const About = (props) => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore exercitationem recusandae ratione cum ex eveniet voluptas eius ad temporibus eum molestiae hic dolores fugiat repellat rerum sed repellendus, aliquam id. Ullam, dolorum numquam! Fugit!</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;