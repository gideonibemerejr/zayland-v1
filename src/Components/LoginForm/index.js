import React, { useState } from "react";
import userService from "../../utils/userService";
import { Button } from "../";

const LoginForm = ({ setShowSong, toggle, setUser }) => {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("zayland");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const submittingUser = {
			identifier: username,
			password,
		};

		const user = await userService.login(submittingUser);

		if (user?.username) {
			console.log(user);
			setUser(user);
			setShowSong(true);
			toggle();
		} else {
			setError("Incorrect Password");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="w-100 flex flex-column justify-center items-center">
				<div className="mv4 w-100">
					<input
						className="pa2 input-reset white bb b--white br-0 bl-0 bt-0 bg-transparent w-100 measure"
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						hidden
					/>
				</div>
				<div className="mv4 w-100">
					<label className="db fw4 lh-copy f5 red" htmlFor="phoneNumber">
						Password
					</label>
					<input
						className="pa2 input-reset white bb b--white br-0 bl-0 bt-0 bg-transparent w-100 measure"
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
					<Button>ENTER</Button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
