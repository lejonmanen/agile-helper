import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Standup = ({ whenDone }) => {
	const [isStarted, setIsStarted] = useState(false)
	const [displayTime, setDisplayTime] = useState('--:--')
	const timeRef = useRef('--:--')
	const mountedRef = useRef(true)
	const { t } = useTranslation()

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
			<h2> {t('d1')} </h2>
			<p> {t('d2')} </p>
			<p> {t('d3')} </p>

			<p> {t('d4')} </p>
			<ol>
				<li> {t('d5a')} </li>
				<li> {t('d5b')} </li>
				<li> {t('d5c')} </li>
			</ol>

			<button disabled={isStarted} onClick={startTimer}> {t('d6')} </button>
			<p> {t('d7')} <span className={timeClass}>{displayTime}</span> </p>

			<hr/>

			<button onClick={whenDone}> {t('d8')} </button>
		</dialog>
	)
}

const Timer = ({ min, sec }) => {

}

export default Standup
