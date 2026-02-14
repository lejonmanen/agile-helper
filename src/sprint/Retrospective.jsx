import { useTranslation } from 'react-i18next'
import Dialog from "./Dialog.jsx"

const Retrospective = ({ show, whenDone }) => {
	const { t } = useTranslation()
	return (
		<Dialog show={show}>
			<h2> {t('rt1')} </h2>
			<p> {t('rt3')} </p>

			<p> {t('rt2a')} <em> {t('rt2b')} </em> {t('rt2c')} </p>

			<p> {t('rt4')} </p>

			<ol>
				<li> {t('rt5a')} </li>
				<li> {t('rt5b')} </li>
				<li> {t('rt5c')} </li>
			</ol>

			<p> <em> {t('rt6')} </em> </p>

			<p> {t('rt7')} </p>

			<button onClick={whenDone}> {t('rt8')} </button>
		</Dialog>
	)
}

export default Retrospective
