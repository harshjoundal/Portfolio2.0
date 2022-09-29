import React from 'react'
import './resume.css'
import Data from './Data'
import Card from './Card'



const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education</h2>
      
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
              //use if statement if experiance is added to make disserent section and add grid to divide it
              return (
                <Card key={id} icon={val.icon} title ={val.title} year ={val.year} desc ={val.desc} college ={val.college} />
              )
            
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume
