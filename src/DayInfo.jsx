import { useTranslation } from "react-i18next"


const DayInfo = ({ day }) => {
	const { t } = useTranslation()

	// day: first,normal,final,undecided
	if( day === 'undecided' ) {
		return null
	}
	else if( day === 'first') {
		return <p> {t('day-first')} </p>
	}
	else if( day === 'normal' ) {
		return <p> {t('day-normal')} </p>
	}
	else if( day === 'final' ) {
		return <p> {t('day-final')} </p>
	}

	return null
}

export default DayInfo
