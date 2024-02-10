
function getTodayIso() {
	return (new Date()).toISOString().substring(0, 10)
}


export { getTodayIso }
