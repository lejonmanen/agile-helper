import { useTranslation } from "react-i18next"
import Dialog from "./Dialog.jsx"

const Review = ({ show, whenDone }) => {
	const { t } = useTranslation()

	return (
		<Dialog show={show}>
			<h2> {t('rv1')} </h2>
			<p> {t('rv2')} </p>

			<p> {t('rv3')} </p>

			<p> {t('rv4')} </p>

			<button onClick={whenDone}> {t('rv5')} </button>
		</Dialog>
	)
}

export default Review
