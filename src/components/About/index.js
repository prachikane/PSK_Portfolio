import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Hello there! I'm a CS student with a focus in web and frontend development.  
                When it comes to frontend and web development, I'm well-versed in HTML, CSS, JS, Bootstrap, and the MERN stack, 
                ensuring that every pixel and interaction is finely crafted. With a deep-rooted passion for creating seamless digital experiences, 
                I wield Java and Python as my programming allies.
                </p>
                <p>
                Problem-solving is my playground, and brainstorming fuels my creativity. 
                The thrill of tackling challenges head-on propels me forward. 
                I immerse myself in learning, absorbing improvements that this rapidly evolving landscape offers. 
                Join me on this journey as I translate code into captivating user journeys and innovative solutions.
                </p>
                <p>
                I take pride in being an upfront and honest person, always quick to embrace change. 
                Humility and kindness are values I hold dear, shaping how I approach life. 
                While I cherish my family and friends dearly, I also find solace in occasional solitude, giving me a chance to reflect and recharge.
                When it comes to hobbies, I find joy in a diverse range of activities. 
                From expressing myself through painting, drawing, and singing, to diving into the captivating worlds of books, 
                staying active through sports and fitness, nurturing green life in my garden, and 
                capturing fleeting moments with my camera, each pursuit adds a vibrant thread to the tapestry of my life.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#5382a1" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default About