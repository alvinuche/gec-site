import { useState } from "react";
import emailjs from "emailjs-com";

const useForm = (validate) => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		telephone: "",
		message: "",
	});

	const { name, email, message } = values;

	const [errors, setErrors] = useState({});
	const [isSent, setIsSent] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values));

		if (name && email && message) {
			emailjs
				.sendForm(
					"service_18q0twl",
					"template_2ghz39i",
					e.target,
					process.env.REACT_APP_USER_ID
				)
				.then(
					(result) => {
						if (result.status) {
							setIsSent(true);
						}
					},
					(error) => {
						console.log(error.text);
					}
				);
			// e.target.reset();
			setValues({
				name: "",
				email: "",
				telephone: "",
				message: "",
			});
		}
	};

	return { values, errors, isSent, handleChange, handleSubmit, setIsSent };
};

export default useForm;
