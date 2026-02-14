import { useRef } from 'react'

function formatTime(time) {
	// const time = timeRef.current
	if( (typeof time) !== 'number' ) return '--:--'
	let sec = time % 60
	let min = (time - sec) / 60
	if( sec < 10 ) sec = '0' + sec
	return `${min}:${sec}`
}

const useTimer = (startSeconds, onTick) => {
	// const [time, setTime] = useState(startSeconds)
	const timerRef = useRef(null)
	const currentTimeRef = useRef(0)

	const start = () => {
		currentTimeRef.current = startSeconds
		timerRef.current = setInterval(() => {
			if( currentTimeRef.current < 1 ) {
				console.log('Time is up!')
				clearInterval(timerRef.current)
			} else {
				currentTimeRef.current -= 1
				onTick(currentTimeRef.current)
			}

		}, 1000)
	}

	const reset = () => {
		onTick('--:--')
		clearInterval(timerRef.current)
		currentTimeRef.current = null
	}

	return [start, reset]
}


function getTodayIso() {
	return (new Date()).toISOString().substring(0, 10)
}


export { formatTime, useTimer }
