import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/psk-logo.png';
import './index.scss';
import Profile from './Profile';

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r','a','c','h','i']
    const jobArray = ['C','o','m','p','u','t','e','r',' ','S','c','i','e','n','c','e']
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _12`}>I&nbsp;</span>
                    <span className={`${letterClass} _13`}>a</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray}
                        idx = {15}
                    />
                    <br/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={jobArray}
                        idx = {20}
                    />
                </h1>
                <h2>Web Developement / Full Stack Development</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Profile/>
        </div>
    )
}
export default Home;