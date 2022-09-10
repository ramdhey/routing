import React , {useState ,useEffect} from 'react'




import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import logonavbar from './image/wolf.png'
import github from './image/github.png'
import linkedin from './image/linkedinsvg.svg'
import instagram from './image/instagram.png'
import whatsapp from './image/wasvg.svg'
import { Link } from 'react-router-dom'




export const Navbarnya = () => {

    const [linkActive , setLinkActive] = useState('home')
    const [scroller , setScroller] = useState(false)

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScroller(true)
            }else{
                setScroller(false)
            }
        }

        window.addEventListener('scroll',onScroll)

        return () => window.removeEventListener('scroll',onScroll)

    },[])

    const onLinkActive = (value) => {
        setLinkActive(value);
    }


    return (
        <div>
            <Navbar size={12} expand="md"  className={scroller ? 'scroller' : ''} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logonavbar} alt="logo" width="100" height="100" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">
                            <Nav.Link href="#home" className={linkActive === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onLinkActive('home')} >HOME</Nav.Link>
                            </Link>
                            
                            <Link to="/todolist">
                            <Nav.Link href="#todolist" className={linkActive === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onLinkActive('skill')} >TO DO LIST</Nav.Link>
                            </Link>
                            
                            <Link to="/berita">
                                <Nav.Link href="#berita" className={linkActive === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onLinkActive('project')} >BERITA</Nav.Link>
                            </Link>
                            
                            
                            
                        </Nav>

                        <span className='navbar-text'>
                            <div className='socialmedia-icon'>

                                <a href="https://instagram.com/ramdhey_?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram } width="30" alt ="instagram" />

                                </a>

                                <a href="https://www.linkedin.com/in/rama-dhea-yudhistira-058b46229/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} width="30" alt ="linkedin" />

                                </a>

                                <a href="https://wa.me/+6281380580240" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} width="30" alt ="whatsapp" />

                                </a>

                                <a href="https://github.com/ramdhey?tab=repositories" target="_blank" rel="noopener noreferrer" >
                                    <img src={github} width="30" alt ="github" />

                                </a>

                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}