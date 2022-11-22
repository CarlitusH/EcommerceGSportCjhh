import { FaCartPlus } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav';
import "./CartWidget.css";


export const CartWidget = () => {
  return (
    <>
        <Nav>
            <Nav.Link href="#" >
                <i className="container-icon-back-in"> <FaCartPlus /></i>
                <span style={{marginLeft:"0.5rem"}}>3</span>
            </Nav.Link>
        </Nav>

    </>
  )
}
