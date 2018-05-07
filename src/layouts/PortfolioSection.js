import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SampleImage from '../assets/images/projects/SAMPLE_3.png'
import pro1 from '../assets/images/prox/pro-1.png'
import pro2 from '../assets/images/prox/pro-2.png'
import pro3 from '../assets/images/prox/pro-3.png'
import pro4 from '../assets/images/prox/pro-4.png'
import pro5 from '../assets/images/prox/pro-5.png'
import pro6 from '../assets/images/prox/pro-6.png'

const PortfolioSection = () => (
	<div id="portfolio-section">
		<Container>
			<Row className="mb40">
				<Col md={{ size: 12 }}>
					<h3
						className="section-header"
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
					>
						Work Samples
					</h3>
					<div className="bar" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nulla, magni sed eius doloribus fuga laboriosam
						quaerat delectus reprehenderit.
					</p>
				</Col>
			</Row>

			<div className="portfolioitems">
				<div className="filtr-container">
					<div className="pros">
						<img src={pro1} alt="" />
					</div>

					<div className="pros">
						<img src={pro4} alt="" />
					</div>

					<div className="pros">
						<img src={pro5} alt="" />
					</div>

					<div className="pros">
						<img src={pro5} alt="" />
					</div>

					<div className="pros">
						<img src={pro1} alt="" />
					</div>

					<div className="pros">
						<img src={pro4} alt="" />
					</div>

					<div className="pros">
						<img src={pro6} alt="" />
					</div>
				</div>
			</div>
		</Container>
	</div>
)

export default PortfolioSection
