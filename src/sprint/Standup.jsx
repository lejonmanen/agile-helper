import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Dialog from './Dialog.jsx'
import { formatTime, useTimer } from '../utils/timer.js'

const Standup = ({ show, whenDone }) => {
	const [isStarted, setIsStarted] = useState(false)
	const [displayTime, setDisplayTime] = useState('--:--')
	const [timeIsUp, setTimeIsUp] = useState(false)
	const { t } = useTranslation()

	const [start, reset] = useTimer(10*60, time => {
		setDisplayTime( formatTime(time) )
		setTimeIsUp(time < 1)
	})

	const handleStart = () => {
		setIsStarted(true)
		start()
	}
	const handleEndMeeting = () => {
		reset()     // reset timer
		setIsStarted(false)
		whenDone()  // inform parent
	}


	const timeClass = 'framed ' + (timeIsUp ? 'time-up' : '')

	return (
		<Dialog show={show}>
			<h2> {t('d1')} </h2>
			<p> {t('d2')} </p>
			<p> {t('d3')} </p>

			<p> {t('d4')} </p>
			<ol>
				<li> {t('d5a')} </li>
				<li> {t('d5b')} </li>
				<li> {t('d5c')} </li>
			</ol>

			<button disabled={isStarted} onClick={handleStart}> {t('d6')} </button>
			<p> {t('d7')} <span className={timeClass}>{displayTime}</span> </p>

			<hr/>

			<button onClick={handleEndMeeting}> {t('d8')} </button>
		</Dialog>
	)
}



export default Standup
