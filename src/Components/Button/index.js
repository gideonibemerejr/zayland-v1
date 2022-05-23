import React from "react";

const Button = ({ children, handleClick, disabled, ...rest }) => {
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			{...rest}
			className="f3 link bg-transparent hover-bg-red hover-white br2 ba bw1 b--red ph3 pv2 dib white pointer"
		>
			{children}
		</button>
	);
};

export default Button;
