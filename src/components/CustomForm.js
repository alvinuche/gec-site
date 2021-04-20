import React from "react";
import useForm from "../customHook/useForm";
import validate from "../customHook/validate";
import { motion } from "framer-motion";

const CustomForm = () => {
	const { values, handleChange, handleSubmit, errors, isSent } = useForm(
		validate
	);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="contact-form-group">
					<input
						type="hidden"
						name="subject"
						value="GEC Group Contact Services"
						// onChange={handleChange}
					/>

					<label htmlFor="name"></label>
					{errors.name && <span className="error-text">{errors.name}</span>}
					<input
						id="name"
						className="contact-form-control"
						type="text"
						name="name"
						placeholder="name"
						value={values.name}
						onChange={handleChange}
					/>

					{errors.email && <span className="error-text">{errors.email}</span>}
					<label htmlFor="email"></label>
					<input
						id="email"
						className="contact-form-control"
						type="email"
						name="email"
						placeholder="email"
						value={values.email}
						onChange={handleChange}
					/>

					<label htmlFor="number"></label>
					<input
						id="number"
						className="contact-form-control"
						type="number"
						name="telephone"
						placeholder="phone number"
						value={values.telephone}
						onChange={handleChange}
					/>

					{errors.message && (
						<span className="error-text">{errors.message}</span>
					)}
					<textarea
						className="contact-form-control"
						name="message"
						placeholder="message"
						rows="5"
						value={values.message}
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit" className="contact-submit-btn pages-btn">
					submit here
				</button>
			</form>

			{isSent && (
				<motion.div
					initial={{ x: "10vw" }}
					animate={{
						x: 0,
						transition: {
							type: "spring",
							stiffness: 80,
							duration: 0.1,
						},
					}}
					exit={{ x: "100vw", transition: { ease: "easeInOut" } }}
					className="modal-container"
				>
					<p className="modal-text">message sent!</p>
				</motion.div>
			)}
		</>
	);
};

export default CustomForm;
