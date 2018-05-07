import React from 'react'
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
} from 'reactstrap'

const encode = data => {
	return Object.keys(data)
		.map(
			key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		)
		.join('&')
}

class PortfolioSection extends React.Component {
	state = {
		data: {
			name: '',
			email: '',
			message: '',
			'form-name': 'contact',
		},
		errors: [],
	}

	onChange = e =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value },
		})

	validate = data => {
		const errors = {}
		if (!data.name) errors.name = "Can't be blank"
		if (!data.email) errors.email = "Can't be blank"
		if (!data.message) errors.message = "Can't be blank"

		return errors
	}

	submit = e => {
		e.preventDefault()
		const errors = this.validate(this.state.data)
		this.setState({ errors })

		if (Object.keys(errors).length === 0) {
			fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-Form-urlencoded',
				},
				body: encode({ 'Form-name': 'contact', ...this.state.data }),
			})
				.then(() => alert('Success!'))
				.catch(error => alert(error))
		}

		/*fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-Form-urlencoded' },
			body: encode({ 'Form-name': 'contact', ...this.state.data }),
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error))

		e.preventDefault();*/
	}
	render() {
		const { data, errors } = this.state
		return (
			<div id="portfolio-section">
				<Container>
					<Row className="mb40">
						<Col md={{ size: 6 }}>
							<h3
								className="section-header"
								data-aos="fade-up"
								data-aos-anchor-placement="bottom-bottom"
							>
								Get in Touch
							</h3>
							<div className="bar" />
							<p>
								Every great ideas starts with a conversation.
								Let's have a friendly talk over chat or a cup of
								coffee.
							</p>

							<div>
								<Form
									onSubmit={this.submit}
									name="contact"
									method="post"
									data-netlify="true"
									data-netlify-honeypot="bot-field"
								>
									<FormGroup>
										<Label>Your name*</Label>

										<Input
											type="text"
											name="name"
											value={data.name}
											onChange={this.onChange}
										/>
										{errors.name && <p>{errors.name}</p>}
									</FormGroup>

									<FormGroup>
										<Label>Email address*</Label>
										<Input
											type="text"
											name="email"
											value={data.email}
											onChange={this.onChange}
										/>
										{errors.email && <p>{errors.email}</p>}
									</FormGroup>

									<FormGroup>
										<Label>Message</Label>
										<Input
											type="textarea"
											name="message"
											value={data.message}
											onChange={this.onChange}
										/>
										{errors.message && (
											<p>{errors.message}</p>
										)}
									</FormGroup>

									<FormGroup>
										<Button className="btn btn-primary c-button">
											Send
										</Button>
									</FormGroup>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default PortfolioSection
