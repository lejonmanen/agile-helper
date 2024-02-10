import { useState } from 'react'

const Retrospective = ({ whenDone }) => {

	return (
		<dialog className="sprint-ceremony" open>
			<h2> Sprint retrospective </h2>
			<p> The team looks back over the past sprint and evaluates their work. The scrum master asks the following questions, which anyone in the team may answer. (Unlike daily standup, where <em>everyone must</em> answer.) </p>

			<p> A fresh team should have lots to talk about on their retrospectives. But as they work together, you may find you're spending less time on retrospective. However don't neglect it altogether. </p>

			<ol>
				<li> What should we start doing? </li>
				<li> What should we stop doing? </li>
				<li> What should we continue doing? </li>
			</ol>

			<p> <em> Explanation: the team should be curious and try new ways of doing things. When you have tried and discovered that something wasn't good, you stop it. It's important to also mention the things that worked well. </em> </p>

			<p> The next sprint starts directly after this meeting. </p>

			<button onClick={whenDone}> The sprint is complete </button>
		</dialog>
	)
}

export default Retrospective
