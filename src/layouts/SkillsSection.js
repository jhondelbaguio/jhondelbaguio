import React from 'react'
import Terminal from '../assets/images/terminal_skills.svg'
import SVG from 'react-inlinesvg'
import { Container, Row, Col } from 'reactstrap'

const SkillsSection = () => (
	<div id="skills-section">
		<span className="mask mask__base-1--style-1" />
		<Container>
			<Row>
				<Col md={6}>
					<h3
						className="section-header"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
					>
						Skills & Interest
					</h3>
					<div className="bar" />
					<p>
						I'm really passionate in web development and design in
						all it's aspects. Previously worked with LAMP
						environment. With the emerging of new front end
						development technologies, Javascript peaks my interest.
					</p>

					<p>
						I constantly learning web technologies and other design
						related topics. I've been building web applications and
						websites. I primary use Javascript Technologies in
						building apps such as React , Nodejs, AngularJS and
						other techs.
					</p>
				</Col>
				<Col md={6}>
					<SVG src={Terminal} />
				</Col>
			</Row>
		</Container>
	</div>
)

export default SkillsSection
