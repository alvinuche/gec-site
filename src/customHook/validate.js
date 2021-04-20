export default function validateInput(values) {
	let errors = {};

	// name
	if (!values.name.trim()) {
		errors.name = "Name required*";
	}

	//email
	if (!values.email) {
		errors.email = "Email required*";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid*";
	}

	if (!values.message) {
		errors.message = "Message required*";
	}

	return errors;
}
