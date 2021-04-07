import React from "react";

const CustomForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="contact-form-group">
				<label htmlFor="name"></label>
				<input
					className="contact-form-control"
					type="text"
					placeholder="name"
					id="name"
				/>

				<label htmlFor="email"></label>
				<input
					className="contact-form-control"
					type="email"
					placeholder="email"
					id="email"
				/>

				<label htmlFor="number"></label>
				<input
					className="contact-form-control"
					type="number"
					placeholder="phone number"
					id="number"
				/>
				<textarea
					className="contact-form-control"
					name="message"
					placeholder="message"
					rows="5"
				></textarea>
			</div>
			<button type="submit" className="contact-submit-btn pages-btn">
				submit here
			</button>
		</form>
	);
};

export default CustomForm;
