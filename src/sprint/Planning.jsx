import { useTranslation } from 'react-i18next'
import Dialog from "./Dialog.jsx"

const Planning = ({ show, whenDone }) => {
	// console.log('in planning');
	const { t } = useTranslation()

	return (
		<Dialog show={show}>
			<h2> {t('p1')} </h2>
			<p> {t('p2')} </p>

			<p> {t('p3')} </p>

			<p> {t('p4')} </p>

			<p> {t('p5')} <a href="https://planningpokeronline.com/" target="_blank">{t('p6')}</a>. </p>

			<p> {t('p7')} </p>

			<p> {t('p8')} </p>

			<button onClick={whenDone}> {t('p9')} </button>
		</Dialog>
	)
}

export default Planning
