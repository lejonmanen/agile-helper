import { useTranslation } from "react-i18next"

const Review = ({ whenDone }) => {
	const { t } = useTranslation()

	return (
		<dialog className="sprint-ceremony" open>
			<h2> {t('rv1')} </h2>
			<p> {t('rv2')} </p>

			<p> {t('rv3')} </p>

			<p> {t('rv4')} </p>

			<button onClick={whenDone}> {t('rv5')} </button>
		</dialog>
	)
}

export default Review
