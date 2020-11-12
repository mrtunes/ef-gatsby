import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"

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
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col className="my-3">
            <main>{children}</main>
          </Col>
        </Row>
      </Container>

      <footer></footer>
    </>
  )
}

export default Layout
