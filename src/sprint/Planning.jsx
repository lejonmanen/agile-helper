import { useState } from 'react'

const Planning = ({ whenDone }) => {
	console.log('in planning');
	return (
		<dialog className="sprint-ceremony spacious" open>
			<h2> Sprint planning </h2>
			<p> 1. Open the product backlog. Make sure that all user stories (and non-functional requirements) are sorted in descending order on priority - most important at the top. </p>

			<p> 2. Create an empty sprint backlog. </p>

			<p> 3. Calculate how many man-hours your team has together in the upcoming sprint. </p>

			<p> 4. Estimate the time required to implement the first user story. You may use paper cards with numbers, or a digital tool such as <a href="https://planningpokeronline.com/" target="_blank">Planning poker online</a>. </p>

			<p> 5. Subtract your total sprint time from (3) and move the user story to the sprint backlog. If you have time left, repeat from (4). </p>

			<p> 6. When your time is up, you should have estimated as many user stories as you think you are likely to have time for. Most teams estimate a few more, just to have a buffer, but let the stories stay in the product backlog. </p>

			<button onClick={whenDone}> Ok we're done. Start the sprint! </button>
		</dialog>
	)
}

export default Planning
