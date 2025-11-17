import { useState } from 'react'
import './App.css'

import Standup from './sprint/Standup.jsx'
import Planning from './sprint/Planning.jsx'
import Review from './sprint/Review.jsx'
import Retrospective from './sprint/Retrospective.jsx'
import { useTranslation } from 'react-i18next'
import LanguagePicker from './LanguagePicker.jsx'
import DayInfo from './DayInfo.jsx'

function App() {
	const [dayType, setDayType] = useState('undecided')  //first,normal,final,undecided
	const [showPlanning, setShowPlanning] = useState(false)
	const [showStandup, setShowStandup] = useState(false)
	const [showReview, setShowReview] = useState(false)
	const [showRetrospective, setShowRetrospective] = useState(false)
	const { t } = useTranslation()

	return (
		<div className="flex-column app">
			<header>
				<h1> Agile helper </h1>
				<LanguagePicker />
			</header>
			<main className="flex-column">
				{dayType === 'undecided' ? (
					<>
					<p> {t('pick-day')} </p>
					<button onClick={() => setDayType('first')}
						data-testid="btn-first"> {t('pick-first')} </button>
					<button onClick={() => setDayType('normal')}
						data-testid="btn-middle"> {t('pick-middle')} </button>
					<button onClick={() => setDayType('final')}
						data-testid="btn-last"> {t('pick-last')} </button>
					</>
				) : (
					<button onClick={() => setDayType('undecided')}
						data-testid="btn-restart"> {t('pick-restart')} </button>
				)}

				<DayInfo day={dayType} />
				<hr/>

				{dayType === 'first' && (
					<button onClick={() => setShowPlanning(true)}> {t("start-planning-1")} <strong>{t('start-planning-2')}</strong> </button>
				)}
				{dayType !== 'undecided' && (
					<button onClick={() => setShowStandup(true)}> {t('start-standup-1')} <strong>{t('start-standup-2')}</strong> </button>
				)}
				{dayType === 'final' && (
					<button onClick={() => setShowReview(true)}> {t('review-1')} <strong>{t('review-2')}</strong> </button>
				)}
				{dayType === 'final' && (
					<button onClick={() => setShowRetrospective(true)}> {t('retro-1')} <strong>{t('retro-2')}</strong> </button>
				)}


				{showPlanning && <Planning whenDone={() => setShowPlanning(false)} />}
				{showStandup && <Standup whenDone={() => setShowStandup(false)} />}
				{showReview && <Review whenDone={() => setShowReview(false)} />}
				{showRetrospective && <Retrospective whenDone={() => setShowRetrospective(false)} />}

			</main>
		</div>
	)
}

export default App
