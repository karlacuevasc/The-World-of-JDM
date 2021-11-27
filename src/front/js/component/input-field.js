import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "/workspace/JDM-Miami/src/front/styles/input.scss";

export const Input = () => {
	return (
		<InputGroup className="input mb-5">
			<FormControl
				aria-label="Default"
				aria-describedby="inputGroup-sizing-default"
				placeholder="Search your Dream Car Here"
			/>
		</InputGroup>
	);
};
