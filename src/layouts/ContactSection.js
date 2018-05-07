import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Socials from '../components/Socials'

const ContactSection = () => (
	<div id="contact-section">
		<span className="mask mask__base-1--style-1" />
		<Container>
			<Row>
				<Col md={{ size: 6, offset: 3 }} className="text-center">
					<h4
						className="section-header"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
					>
						Drop me a line at:
					</h4>
					<div className="centered-column">
						<div className="bar" />
					</div>
					<h5 style={{ color: '#fff' }}>jhondelbaguio@gmail.com</h5>
					<Socials />
					<p className="copyright">Handmade by me &copy; 2018</p>
				</Col>
			</Row>
		</Container>
	</div>
)

export default ContactSection
