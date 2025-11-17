import { useTranslation } from 'react-i18next'
import en from './flags/gb.svg'
import se from './flags/se.svg'

const LanguagePicker = () => {
	const { i18n } = useTranslation()
	const f = (x) => () => i18n.changeLanguage(x)

	return (
		<div className="pick-language">
			<img src={en} onClick={f('en')}
				role="button"
				data-testid="language-en" />
			<img src={se} onClick={f('sv')}
				role="button"
				data-testid="language-sv" />
		</div>
	)
}
export default LanguagePicker
