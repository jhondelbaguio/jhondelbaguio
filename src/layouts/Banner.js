import React from 'react'
import Socials from '../components/Socials'
import Scroll from '../components/Scroll'
import { Container, Col, Row } from 'reactstrap'

const Banner = () => (
	<div id="banner-section" className="centered-column">
		<span className="mask mask__base-1--style-1" />
		<Container>
			<Row>
				<Col md={7} sm={12}>
					<div className="intro">
						<div className="intro__name-wrapper">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ isolation: 'isolate', width: '100%' }}
								viewBox="0 0 320 60"
								width="320"
								height="60"
							>
								<g id="Group">
									<rect
										x="0"
										y="0"
										width="320"
										height="60"
										className="intro__name-shape"
									/>
									<g transform="matrix(1,0,0,1,23.5,17.109)">
										<text
											transform="matrix(1,0,0,1,0,20.41)"
											className="intro__name-text"
										>
											JHONDEL BAGUIO
										</text>
									</g>
								</g>
							</svg>
						</div>
						<p
							data-aos="fade-left"
							data-aos-duration="800"
							data-aos-delay="100"
							className="intro__position"
						>
							<span style={{ color: '#009aff' }}>{'<'}</span>
							<span className="c-white">Web</span>{' '}
							<span style={{ color: '#fb4e3c' }}>Developer</span>
							<span style={{ color: '#009aff' }}>{'/>'}</span>
						</p>
						<p className="intro__desc">
							A Web Developer based in Cebu, PH. Working as a
							fullstack developer and currently specialized in
							building Single Page Applications using JS
							Technologies (React + NodeJs).
						</p>
						<Socials />
					</div>
				</Col>
			</Row>
		</Container>
		<Scroll />
	</div>
)

export default Banner
