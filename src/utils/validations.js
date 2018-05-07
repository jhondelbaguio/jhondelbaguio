export const required = value => (value ? undefined : 'This field is required')
export const number = value =>
	value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const isEmail = value =>
	value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
