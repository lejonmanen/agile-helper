import { useRef, useEffect } from 'react'
import './Dialog.css'

const Dialog = ({ show, children }) => {
	const dialogRef = useRef(null)

	let css = `sprint-ceremony dialog`
	if( show ) css += ' show'
	// else css += ' closing'

	return (
		<div className={css} ref={dialogRef}>
			<div>
				{children}
			</div>
		</div>
	)
}

export default Dialog
