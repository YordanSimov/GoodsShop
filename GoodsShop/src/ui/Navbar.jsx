import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

export default function NavBar() {

    const { isAuthenticated, username } = useContext(AuthContext);
    return (
        <Navbar expand={"lg"} fixed={"top"} style={{ width: "100%" }} className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">GoodsShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"} style={{ marginRight: "2em" }}>Home</Link>
                        <Link to={"/products"}>Products</Link>
                    </Nav>
                    {username === "Admin" && 
                    <Nav className="me-auto" style={{ marginRight: "2em", color: "black" }}>
                        <Link to={"/add-product"}>Add Product</Link>
                    </Nav>
                    }
                    {isAuthenticated ? (
                        <>
                            <Nav style={{ marginRight: "1em", color: "black" }}>
                                <Link to="/logout">Logout</Link>
                            </Nav>
                        </>
                    ) : (
                        <>
                            <Nav style={{ marginRight: "1em", color: "black" }}>
                                <Link to="/login">Login</Link>
                            </Nav>
                            <Nav style={{ marginRight: "1em", color: "black" }}>
                                <Link to="/register">Register</Link>
                            </Nav>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}