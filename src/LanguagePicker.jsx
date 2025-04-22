import { useTranslation } from 'react-i18next'
import en from './flags/gb.svg'
import se from './flags/se.svg'

const LanguagePicker = () => {
	const { i18n } = useTranslation()
	const f = (x) => () => i18n.changeLanguage(x)

	return (
		<div className="pick-language">
			<img src={en} onClick={f('en')} />
			<img src={se} onClick={f('sv')} />
		</div>
	)
}
export default LanguagePicker
