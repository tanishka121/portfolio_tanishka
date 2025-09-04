import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import br from '../../assets/br.png'
import tti from '../../assets/tti.png'
import ise from '../../assets/ise.png'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const Projects = () => {

  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })

    })


  return (
   <div id="projects">
    <h1 id="para"> 1+ YEARS EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
<Card title="VIRTUAL ASSISTANT" image={va}/>
<Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
<Card title="CHAT BOT" image={cb}/>
<Card title="IMAGE BACKGROUND REMOVER & DOWNLOAD IN PNG" image={br}/>
<Card title="TEXT TO IMAGE GENERATOR" image={tti}/>
<Card title="IMAGE SEARCH ENGINE" image={ise}/>



        </div>
    
   </div>
  )
}

export default Projects
