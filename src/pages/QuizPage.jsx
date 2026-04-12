import { Link } from 'react-router-dom'
import quizData from '../data/quiz.json'
import { Quiz } from '../components/Quiz'

export function QuizPage() {
  return (
    <section className="quiz-section">
      <div className="section-inner" style={{ paddingTop: '48px' }}>
        <h1 className="section-title reveal" style={{ color: 'white' }}>
          {quizData.meta.title}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '36px' }} className="reveal">
          {quizData.meta.description}
        </p>
        <Quiz questions={quizData.questions} grades={quizData.grades} />

        <p style={{ marginTop: '28px', textAlign: 'center' }} className="reveal">
          <Link to="/" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}>
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
