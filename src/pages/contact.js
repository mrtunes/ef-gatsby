import React from "react"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <h1>Contact</h1>
    <p>
      Get in touch to offer feedback about the music or to inquire about
      licensing and booking opportunities.
    </p>

    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      style={{ maxWidth: 450 }}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <Form.Group>
        <Form.Label>Name *</Form.Label>
        <Form.Control required name="name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email *</Form.Label>
        <Form.Control required type="email" name="email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Your Message *</Form.Label>
        <Form.Control required as="textarea" rows={5} name="message" />
      </Form.Group>

      <Button type="submit">Send</Button>
    </Form>
  </Layout>
)

export default ContactPage
