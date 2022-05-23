import React, { useState } from "react";
import userService from "../../utils/userService";
import { Button } from "../";

const DemoForm = ({ setShowSong, toggle, setUser }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		// post to auth/local/register

		const username = `${firstName}${lastName}${Math.floor(
			Math.random() * (10 - 1) + 1
		)}`;

		const submittingUser = {
			firstName,
			lastName,
			email,
			phoneNumber,
			password,
			username,
		};

		try {
			const user = await userService.signup(submittingUser);
			if (user) {
				setUser(user.firstName);
				setShowSong(true);
				toggle();
			}
		} catch (error) {
			setError("Something isn't right--please try again");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="w-100 flex flex-column justify-center items-center">
				<h2 className="red">Register below for an Unreleased Demo!</h2>

				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="firstName">
						First name
					</label>
					<input
						className="pa2 input-reset white bb b--red br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="text"
						name="firstName"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="lastName">
						Last name
					</label>
					<input
						className="pa2 input-reset white bb b--red br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="text"
						name="lastName"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="email">
						Email address
					</label>
					<input
						className="pa2 input-reset white bb b--red br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="phoneNumber">
						Phone number
					</label>
					<input
						className="pa2 input-reset white bb b--red br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="text"
						name="phoneNumber"
						id="phoneNumber"
						placeholder="469-343-3392"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="phoneNumber">
						Password
					</label>
					<input
						className="pa2 input-reset white bb b--red br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && (
					<div className=" w-100 fw9 red tc">
						<p>{error}</p>
					</div>
				)}
				<div className="mv4 w-100 flex justify-center items-center">
					<Button>Get the Song</Button>
				</div>
			</div>
		</form>
	);
};

export default DemoForm;
