import { useState } from 'react'
import './App.css'

import Standup from './sprint/Standup.jsx'
import Planning from './sprint/Planning.jsx'
import Review from './sprint/Review.jsx'
import Retrospective from './sprint/Retrospective.jsx'

function App() {
	const [dayType, setDayType] = useState('undecided')
	const [showPlanning, setShowPlanning] = useState(false)
	const [showStandup, setShowStandup] = useState(false)
	const [showReview, setShowReview] = useState(false)
	const [showRetrospective, setShowRetrospective] = useState(false)

	return (
		<div className="flex-column">
			<header>
				<h1> Agile helper </h1>

			</header>
			<main className="flex-column">
				{dayType === 'undecided' ? (
					<>
					<p> What day of the sprint is it? </p>
					<button onClick={() => setDayType('first')}> First </button>
					<button onClick={() => setDayType('normal')}> Somewhere in the middle </button>
					<button onClick={() => setDayType('final')}> Last </button>
					</>
				) : (
					<button onClick={() => setDayType('undecided')}> Start over </button>
				)}
				<hr/>

				{dayType === 'first' && (
					<button onClick={() => setShowPlanning(true)}> Start off the sprint with <strong>Sprint planning</strong> </button>
				)}
				{dayType !== 'undecided' && (
					<button onClick={() => setShowStandup(true)}> Start every day with <strong>Daily standup</strong> </button>
				)}
				{dayType === 'final' && (
					<button onClick={() => setShowReview(true)}> Present your work to the product owner during <strong>Sprint review</strong> </button>
				)}
				{dayType === 'final' && (
					<button onClick={() => setShowRetrospective(true)}> End the sprint by evaluating your work in <strong>Sprint retrospective</strong> </button>
				)}


				{showPlanning && <Planning whenDone={() => setShowPlanning(false)} />}
				{showStandup && <Standup whenDone={() => setShowStandup(false)} />}
				{showReview && <Review whenDone={() => setShowReview(false)} />}
				{showRetrospective && <Retrospective whenDone={() => setShowRetrospective(false)} />}

			</main>
		</div>
	)
}

export default App
