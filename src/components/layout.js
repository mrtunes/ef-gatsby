import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSpotify,
  faBandcamp,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons"

const Layout = ({ children }) => {
  const { allWpMenu } = useStaticQuery(graphql`
    query MenuItems {
      allWpMenu {
        nodes {
          menuItems {
            nodes {
              url
              label
            }
          }
        }
      }
    }
  `)

  const menuItems = allWpMenu.nodes[0].menuItems.nodes

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3} xl={2}>
            <Navbar expand="md" className="d-flex flex-md-column">
              <Navbar.Brand>
                <Link
                  to="/"
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 500,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Elliott Fienberg
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />

              <Navbar.Collapse id="navbar-nav">
                <Nav defaultActiveKey="/" className="flex-column">
                  {menuItems.map(item => (
                    <Nav.Item className="py-2" key={item.url}>
                      <Nav.Link
                        as={Link}
                        to={item.url}
                        activeStyle={{ textDecoration: "underline" }}
                        partiallyActive={true}
                        style={{
                          fontSize: "1.5rem",
                          color: "black",
                        }}
                      >
                        {item.label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}

                  <Nav.Item>
                    <Button
                      variant="outline-dark"
                      size="sm"
                      className="mr-1"
                      href="https://spoti.fi/2TRXcJ6"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faSpotify} size="lg" />
                    </Button>
                    <Button
                      variant="outline-dark"
                      size="sm"
                      className="mr-1"
                      href="https://elliottfienberg.bandcamp.com/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faBandcamp} size="lg" />
                    </Button>
                    <Button
                      variant="outline-dark"
                      size="sm"
                      href="https://soundcloud.com/fienberg"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faSoundcloud} size="lg" />
                    </Button>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col className="my-3">
            <motion.div initial="hidden" animate="visible" variants={variants}>
              <main>{children}</main>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <footer></footer>
    </>
  )
}

export default Layout
