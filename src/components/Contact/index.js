import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from './../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            'service_nrnamou',
            'template_x54da2y',
            refForm.current,
        )
        .then(
            (result)=>{
                console.log(result.text)
                alert('Message sent successfully!')
                window.location.reload(false);
            },
            (error)=>{
                console.log(error.text)
                alert('Failed to send the message. please try again')
            }
        )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    If you're interested in discussing potential co-op or full-time software opportunities, I'd love to connect with you. 
                    Whether you're a recruiter, employer, or someone in the tech industry, I'm eager to explore roles that align with my skills and aspirations.
                    Feel free to reach out through any of these contact methods. 
                    I'm excited about the possibility of contributing my skills and expertise to your team. 
                    Looking forward to hearing from you and exploring how I can be a valuable addition to your organization.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required></input>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required></input>
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required></input>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"></input>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
};

export default Contact;