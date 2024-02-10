import { useState, useRef, useEffect } from 'react'

const Standup = ({ whenDone }) => {
	const [isStarted, setIsStarted] = useState(false)
	const [displayTime, setDisplayTime] = useState('--:--')
	const timeRef = useRef('--:--')
	const mountedRef = useRef(true)

	const startTimer = () => {
		const speedup = 1  // increase to test the timer
		timeRef.current = 10 * 60
		formatTime(timeRef.current)
		setIsStarted(true)
		let iid = setInterval(() => {
			timeRef.current -= speedup
			formatTime(timeRef.current)
			if( timeRef.current < 1 || !mountedRef.current ) {
				console.log('stopping timer');
				clearInterval(iid)
				iid = null
				setIsStarted(false)
			}
		}, 1000/speedup)
	}

	useEffect(() => {
		mountedRef.current = true
		return () => mountedRef.current = false
	}, [])

	const formatTime = (time) => {
		// const time = timeRef.current
		if( (typeof time) !== 'number' ) return '--:--'
		let sec = time % 60
		let min = (time - sec) / 60
		if( sec < 10 ) sec = '0' + sec
		setDisplayTime(`${min}:${sec}`)
	}
	const timeIsUp = timeRef.current < 1
	const timeClass = 'framed ' + (timeIsUp ? 'time-up' : '')

	return (
		<dialog className="sprint-ceremony" open>
			<h2> Daily standup </h2>
			<p> Everyone stand up! </p>
			<p> This meeting should be kept short, typially 5-10 minutes at the most. Save any discussions until after the meeting. </p>

			<p> Scrum master asks every team member, including themselves: </p>
			<ol>
				<li> What have you done since last standup? </li>
				<li> What are you going to do until next standup? </li>
				<li> Are there any obstacles? </li>
			</ol>

			<button disabled={isStarted} onClick={startTimer}> Start the standup: 10 minutes </button>
			<p> Time left: <span className={timeClass}>{displayTime}</span> </p>

			<hr/>

			<button onClick={whenDone}> Ok we're done! </button>
		</dialog>
	)
}

const Timer = ({ min, sec }) => {

}

export default Standup
