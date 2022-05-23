import React, { useEffect } from "react";
import { CreditsList } from "../index";

const Credits = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage("CREDITS");
	}, [setCurrentPage]);

	return (
		<div className="w-100 h-100">
			<CreditsList />
			<footer className="white-80 fw5 flex items-center w-100 justify-center mt6 mb3">
				©{new Date().getFullYear()} Zay's Land, LLC
			</footer>
		</div>
	);
};

export default Credits;
