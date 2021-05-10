import React from "react";
import { useSelector } from "react-redux";

const FormDisplay = () => {
	const formDisplay = useSelector((state) => {
		return state;
	});
	return <div>{JSON.stringify(formDisplay)}</div>;
};

export default FormDisplay;
