import React from 'react'
import Link from 'gatsby-link'

import Banner from '../layouts/Banner'
import AboutSection from '../layouts/AboutSection'
import SkillsSection from '../layouts/SkillsSection'
import PortfolioSection from '../layouts/PortfolioSection'
import ContactForm from '../layouts/ContactForm'
import ContactSection from '../layouts/ContactSection'

class IndexPage extends React.Component {
	componentDidMount() {
		const isBrowser = typeof window !== 'undefined'
		const AOS = isBrowser ? require('aos') : undefined

		this.aos = AOS
		this.aos.init({
			once: true,
			offset: 100,
		})
	}

	componentDidUpdate() {
		this.aos.refresh()
	}
	render() {
		const getFilter = (
			fieldA,
			valueA,
			withLogic,
			logicOperator,
			fieldB,
			valueB,
			operator
		) => {
			if (operator === undefined) {
				operator = 'eq'
			}

			if (!withLogic) {
				return {
					field: fieldA,
					operator: operator,
					value: valueA,
				}
			} else {
				return {
					logic: logicOperator,
					filters: [{ field: 1 }, { field: 2 }],
				}
			}
		}

		console.log(getFilter(1, 2, 3, 4, 5, 6, 7))
		return (
			<div>
				<Banner />
				<AboutSection />
				<SkillsSection />
				<ContactForm />
				<ContactSection />
			</div>
		)
	}
}

export default IndexPage
