import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import './Konten.css';


import axios from "axios"


import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'



const Konten = () => {
    const [data, setData] = useState([])
    const [kategori, setKategori] = useState('')

    //pencarian
    const [filter, setFilter] = useState('')


    //pencarian
    const seacrhText = (event)=>{
        setFilter(event.target.value)
    }

    //pencarian
    let dataHasilCari = data.filter(item => {
        return item.title.toLowerCase().includes(filter.toLowerCase())
    } )

   


    //import dropdown Kateogri Berita dari 
    
    const HEADLINES_NEWS = "https://gnews.io/api/v4/top-headlines?country=us&token=37979b3740b6271e352d62ca97e959c0"
    const SPORTS_NEWS = "https://gnews.io/api/v4/search?q=sports&country=us&token=37979b3740b6271e352d62ca97e959c0"
    const BUSINESS_NEWS = "https://gnews.io/api/v4/search?q=business&country=us&token=37979b3740b6271e352d62ca97e959c0"
    const ENTERTAINMENT_NEWS = "https://gnews.io/api/v4/search?q=entertainment&country=us&token=37979b3740b6271e352d62ca97e959c0"
    const HEALTH_NEWS = "https://gnews.io/api/v4/search?q=health&country=us&token=37979b3740b6271e352d62ca97e959c0"
    const TECHNOLOGY_NEWS = "https://gnews.io/api/v4/search?q=technology&country=us&token=37979b3740b6271e352d62ca97e959c0"
    





    useEffect(() => {
        if (kategori === 'headline') {

            axios.get(HEADLINES_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        } else if (kategori === 'sport') {
            axios.get(SPORTS_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        } else if (kategori === 'business') {
            axios.get(BUSINESS_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        } else if (kategori === 'entertainment') {
            axios.get(ENTERTAINMENT_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        } else if (kategori === 'health') {
            axios.get(HEALTH_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        } else if (kategori === 'technology') {
            axios.get(TECHNOLOGY_NEWS)
                .then(res => {
                    setData(res.data.articles)
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    setKategori('')
                })
        }
    }, [kategori])

    //buat default tampilan HEADLINE NEWS
    useEffect(() => {
        axios.get(HEADLINES_NEWS)
            .then(res => {
                setData(res.data.articles)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setKategori('')
            })
    }, [])

    //handle sport true ,maka useEffect akan mengambil data dari sport
    const handleSport = () => {
        setKategori('sport')
    }
    //handle business true ,maka useEffect akan mengambil data dari business
    const handleBusiness = () => {
        setKategori('business')
    }
    //handle entertainment true ,maka useEffect akan mengambil data dari entertainment
    const handleEntertainment = () => {
        setKategori('entertainment')
    }
    //handle health true ,maka useEffect akan mengambil data dari health
    const handleHealth = () => {
        setKategori('health')
    }
    //handle technology true ,maka useEffect akan mengambil data dari technology
    const handleTechnology = () => {
        setKategori('technology')
    }
    //handle headline true ,maka useEffect akan mengambil data dari headline
    const handleHeadline = () => {
        setKategori('headline')
    }

    

    //pake tombol untuk show data
    // const tampilkanBerita = () => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=433d6559a40f4b37822ee501e52d8e2b")
    //         .then((response) => {
    //             setData(response.data.articles)
    //         })
    // }




    return (

        <div className="container mt-5 beritaku" >
            {/* //pencarian */}
            <div className="container mb-5 mt-5">
                
            <Form className="form-inline mr-sm-2 mt-5">
                                <Form.Control
                                    type="search"
                                    placeholder="Pencarian"
                                    className="me-2 fa fa-search align-self-center"
                                    aria-label="Search"
                                    value={filter}
                                    onChange={seacrhText.bind(this)}
                                    style={{ width: '50%' }}
                                    aligment="end"/>





                                 
                             </Form>


            </div>
           
            <div className="container text-center mt-5 ">
                <Nav className="text-white tabsnya" fill variant="tabs" defaultActiveKey="/home" style={{ backgroundImage: 'linear-gradient(to right,#0E0C58, #0C3458)' }}>
                    <Nav.Item >
                        <Nav.Link className="text-primary Ini" href="/home" onClick={handleHeadline}>HeadLine News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="sport" onClick={handleSport}>Aksi & Olahraga</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="business" onClick={handleBusiness}>Bisnis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="entertainment" onClick={handleEntertainment}>Hiburan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="kesehatan" onClick={handleHealth} >Kesehatan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="technology" onClick={handleTechnology}>Teknologi</Nav.Link>
                    </Nav.Item>

                </Nav>

            </div>
            
            



            {/* tombolnya */}
            {/* <div>
                <button onClick={handleSport}>Tampilkan Berita</button>
            </div> */}


            <div className="container">


                <div className="row mt-5 mb-5 "  >
                    {
                        dataHasilCari.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="m-3">
                                        <div className="Card p-4 cardnya" style={{  height: '800px', width: '300px',border: '15px solid #07A8CB' }}>
                                            <img src={item.image} className="card-img-top mb-4 ml-3" style={{ height: '200px', width: '220px' }} alt="..." />
                                            <div className="Card-Body" >
                                                <h5 className="Card-Title text-warning " >{item.title}</h5>
                                                <h6 className="mt-2 mb-2 Card-Subtitle text-primary">{item.publishedAt}</h6>
                                                <p className="Card-Text text-white" >
                                                    {item.description}
                                                </p>
                                                <a className="btn btn-primary" href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
          


        </div>
    )
}
export default Konten

// export {filter, searchText, setFilter} from './Konten'




    