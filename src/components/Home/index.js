import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders'

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P','r','a','c','h','i']
    const jobArray = ['C','o','m','p','u','t','e','r',' ','S','c','i','e','n','c','e',' ','S','t','u','d','e','n','t']
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _12`}>I&nbsp;</span>
                    <span className={`${letterClass} _13`}>a</span>
                    <span className={`${letterClass} _14`}>m&nbsp;</span>
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
                    <br/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={['@',' ','U','T','D']}
                        idx = {44}
                    />
                    <br/>
                </h1>
                <h2>Software Development / Web Development / Frontend Development</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home;