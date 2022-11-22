import Nav from 'react-bootstrap/Nav';
import { FaFacebook,FaTwitter, FaGooglePlusG, FaInstagram, FaYoutube, FaWhatsapp  } from "react-icons/fa"


export const ItemListContainer = () => {
  return (
    <>
        <div className="bg-dark d-flex justify-content-center align-items-center vh-100">
            <div>
                <div class="d-flex justify-content-center" style={{marginBottom:"3rem"}}>
                    <div className='text-center text-light light'>
                       <p className="display-1">GS-Sports</p>
                    </div>
                </div>

                <div style={{marginBottom:"3rem"}}>
                    <p className="text-center text-light light h3">Página en manteniemiento </p> 
                    <p className="text-center text-light light h3">Te invitamos a visitarnos a través de nuestras redes sociales</p>
                </div>
            
                <div class="d-flex justify-content-center">		
                    <Nav>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaFacebook /></i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaTwitter /></i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaGooglePlusG /></i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaInstagram /></i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaYoutube /></i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-light'>
                            <i className="h3"> <FaWhatsapp /></i>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    </>
  )
}