import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Nav, Container, Row, Col } from "react-bootstrap"

import Header from "./header"

const Layout = ({ children }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : null

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
      <Header />

      <Container fluid>
        <Row>
          <Col sm={3}>
            <Nav defaultActiveKey="/" className="flex-column">
              {menuItems.map(item => (
                <Nav.Item className="py-2" key={item.url}>
                  <Nav.Link
                    as={Link}
                    to={item.url}
                    style={{
                      fontSize: "1.5rem",
                      color: "black",
                      textDecoration:
                        item.url === pathname ? "underline" : "none",
                    }}
                  >
                    {item.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>

      <footer></footer>
    </>
  )
}

export default Layout
