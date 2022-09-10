import React, { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Container, Row, Col } from 'react-bootstrap'
// import { CloudArrowDown } from "react-bootstrap-icons"
import Button from 'react-bootstrap/Button'

import head from './image/head.png'
import foto from './image/profile.jpg'



export const Banner = () => {

    const [loopNum, setloopNum] = useState(0)
    const [isDeleting, setisDeleting] = useState(false)
    const toRotate = ["Web Developer", "Odoo Programmer", "Unity Game Programmer"]
    const [text, settext] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    const periode = 2000


    useEffect(() => {
        let pengetikan = setInterval(() => {
            tick()

        }, delta)
        return () => { clearInterval(pengetikan) }
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatetext = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        settext(updatetext)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatetext === fullText) {
            setisDeleting(true)
            setDelta(periode)
        } else if (isDeleting && updatetext === '') {
            setisDeleting(false)
            setloopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    
                    <Col xs={12} md={6} xl={6}>
                    
                        <span className="tagline mb-5 text-white">
                            Welcome to Potofolio About Rama

                        </span>
                        <h1>{`Hi I'm `}</h1>
                        <h2 className=" rama">{`Rama Dhea Yudhistira`}</h2>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={head} className="head" style={{ width: "600px", height: "350px" }} alt="head" />
                            </div>}
                    </TrackVisibility>
                        

                    </Col>
                    <Col xs={12} md={6} xl={6}>

                        <h1><img src={foto} style={{ width: "460px", height: "500px", borderRadius: "70%" }} alt="fotoProfil"></img></h1>
                        <TrackVisibility>
                        {({isVisible})=>
                            <div className={isVisible ? "animated__animated animate__fadeIn":""}>
                            <h4><span className="wrap">{text}</span></h4>

                        </div>

                        }
                            
                       

                        </TrackVisibility>

                        <p className="intro mt-3 text-white">
                            I am a student of Informatics Engineering at Pamulang University.
                            I have great desire and ambition to learn and develop in the world of Software Engineer,
                            especially in the fields of Web Developer, Mobile Developer, ERP Software, and Cyber ​​Security.
                        </p>
                        <Button className='btnini btn-sm mt-5 shadow-sm px-3 py-2 text-white btnini' style={{ backgroundColor: '#ff000000', border: 'none' }} href="https://drive.google.com/file/d/1wKs8IFVfomCsHPcgTUwTVFN3qLHuI8uy/view?usp=sharing" target="_blank" >Download CV{' '}{' '}   </Button>{' '} 
                        {/* <CloudArrowDown size={25} /> */}

                    </Col>

                </Row>
            </Container>
        </section>
    )

}