

import React from 'react'
import Common from './Common'
import web1 from '../src/images/pizzahut.png'


const About = () => {
    return (
        <div className="section">
         <Common
          name="All about Foodzz"
          imgsrc={web1}
          p="Foodzz is the collection of amazing test,that feels we are in heaven of test."
          visit="/contact"
          btnname="contact"/>
          </div>

    )
}

export default About