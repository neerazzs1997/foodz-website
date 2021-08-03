

import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <div>
              <div className="container">

                <div className="box">
                    <h1 className="h1">{props.name}</h1>
                    <p className="p"> <span style={{color:"orange"}}> Here is your favorite Meal order now</span></p>
                    <p className="p1">{props.p}</p>

                     <NavLink to={props.visit}  className="btn btn-primary">{props.btnname}</NavLink>
                    </div>
                    <div className="pizza">
                        <img src={props.imgsrc} className=" animated" alt="home-image" />
                    </div>

                </div>
        </div>
    )
}

export default Common


