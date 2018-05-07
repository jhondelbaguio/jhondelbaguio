import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel'
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

			{/*			<OwlCarousel
				className="owl-theme"
				loop
				margin={10}
				autoplay={true}
				autoplayTimeout={3000}
				autoplayHoverPause={true}
				autoplaySpeed={true}
				responsive={{
					0: {
						items: 2,
						nav: false,
					},
					600: {
						items: 2,
						nav: false,
					},
					1000: {
						items: 3,
						nav: false,
						loop: true,
					},
				}}
			>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>

				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
				<div className="m-3 project">
					<img
						src={SampleImage}
						className="img-fluid project__img"
						alt=""
					/>
					<div className="project__mask">
						<div className="project__desc">
							<h4>Sample</h4>
						</div>
					</div>
				</div>
			</OwlCarousel>*/}

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
