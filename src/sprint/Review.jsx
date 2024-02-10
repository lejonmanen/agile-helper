import { useState } from 'react'

const Review = ({ whenDone }) => {

	return (
		<dialog className="sprint-ceremony" open>
			<h2> Sprint review </h2>
			<p> Display your work for the product owner and other stakeholders.</p>

			<p> You decide how you want to present it - there are no scrum rules to this meeting. </p>

			<p> The next sprint starts directly after this meeting. </p>

			<button onClick={whenDone}> Ok we're done. Onwards to retrospective! </button>
		</dialog>
	)
}

export default Review
