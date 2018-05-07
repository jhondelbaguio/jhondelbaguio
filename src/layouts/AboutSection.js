import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profilePhoto from '../assets/images/me.png'
import profilePhotox from '../assets/images/mex.png'
const timeline = [
	{
		title: 'Javascript Developer',
		company: 'MedSpecialized Inc.',
		years: 'November 2015 - April 2018',
		desc:
			'Designed and built Single Page Applications (SPA) and Websites using JS Technologies e.g React, AngularJS and other front-end technologies. I was assigned for both frontend and backend, such as creating RESTful APIs using Nodejs, maintaining existing applications and converting wireframes / designs to interactive frontends.',
	},
	{
		title: 'Web Developer Intern',
		company: 'TSY Tech Solutions',
		years: 'April 2014 - September 2014',
		desc:
			'I was an intern of this small company which focused on building mobile and web applications. This was a 4-month internship that involves building web applications using various technologies such as PHP and JS.',
	},
	{
		title: 'BS in Information and Communications Technology',
		company: 'University of San Carlos',
		years: 'June 2011 - March 2015',
	},
]

const AboutSection = () => (
	<div id="about-section" className="section">
		<Container>
			<Row>
				<Col md={6}>
					<h3
						className="section-header"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
					>
						About me
					</h3>

					<div className="bar" />
				</Col>
			</Row>
			<Row className="no-gutters">
				<Col md={6}>
					<div style={{ paddingRight: 30 }}>
						<div
							style={{ marginBottom: 30 }}
							data-aos="fade-right"
							data-aos-duration="800"
							data-aos-delay="200"
						>
							<img
								src={profilePhotox}
								className="img-fluid"
								alt=""
								style={{ borderRadius: 3 }}
							/>
						</div>
						<p>
							<strong>Yo!</strong> My name is Jhondel Louis
							Baguio, I'm a Web Developer based in Cebu, PH. I
							started my career working as a Web Developer last
							2015. I graduated from University of San Carlos with
							the degree in BS Information and Communications
							Technology. I got interested in web development
							wayback early college days. I enjoy creating
							intuitive and functional websites.
						</p>

						<p>
							To allow myself to keep updated with the current
							tech trends, I enjoy reading books, doing research
							and attend local tech conferences and meetups. When
							I'm not coding, i usually spend my time geeking with
							my laptop, trekking and seeking advetures in the
							mountains.
						</p>

						{/*	<div className="text-xs-center mxb40 mt40">
							<button className="btn btn-primary c-button">
								Download Resume
							</button>
						</div>*/}
					</div>
				</Col>
				<Col md={6}>
					{timeline.map((item, i) => (
						<div className="single-timeline" key={i}>
							<div
								data-aos="fade-left"
								data-aos-duration="800"
								data-aos-delay={i * 200}
							>
								<h4 className="timeline-title">{item.title}</h4>
								<p className="timeline-company">
									{item.company}
								</p>
								<p className="years">{item.years}</p>
								<p className="timeline-desc">{item.desc}</p>
							</div>
						</div>
					))}
				</Col>
			</Row>
		</Container>
	</div>
)

export default AboutSection
