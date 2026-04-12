import { useState, useCallback, useMemo } from 'react'

function pickGrade(score, grades) {
  const sorted = [...grades].sort((a, b) => b.minCorrect - a.minCorrect)
  return sorted.find((g) => score >= g.minCorrect)?.label ?? sorted[sorted.length - 1].label
}

export function Quiz({ questions, grades }) {
  const [quizIndex, setQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState(null)
  const [quizComplete, setQuizComplete] = useState(false)
  const [quizFeedback, setQuizFeedback] = useState('')

  const q = questions[quizIndex]

  const selectAnswer = useCallback(
    (i) => {
      if (answered || quizComplete) return
      setAnswered(true)
      setSelected(i)
      const cur = questions[quizIndex]
      if (i === cur.ans) {
        setScore((s) => s + 1)
        setQuizFeedback(`✅ Correct! ${cur.exp}`)
      } else {
        setQuizFeedback(`❌ Incorrect. ${cur.exp}`)
      }
    },
    [answered, quizComplete, quizIndex, questions]
  )

  const nextQuestion = useCallback(() => {
    if (quizComplete) return
    if (!answered) {
      setQuizFeedback('👆 Please select an answer first!')
      return
    }
    if (quizIndex + 1 >= questions.length) {
      setQuizComplete(true)
      return
    }
    setQuizIndex((i) => i + 1)
    setAnswered(false)
    setSelected(null)
    setQuizFeedback('')
  }, [answered, quizComplete, quizIndex, questions.length])

  const playAgain = useCallback(() => {
    setQuizIndex(0)
    setScore(0)
    setAnswered(false)
    setSelected(null)
    setQuizComplete(false)
    setQuizFeedback('')
  }, [])

  const grade = useMemo(() => pickGrade(score, grades), [score, grades])

  const feedbackStyle = quizFeedback.startsWith('✅')
    ? { color: '#4ADE80' }
    : quizFeedback.startsWith('❌')
      ? { color: '#F87171' }
      : {}

  return (
    <div className="quiz-box reveal">
      {!quizComplete ? (
        <>
          <div className="quiz-question">
            Q{quizIndex + 1}. {q.q}
          </div>
          <div className="quiz-options">
            {q.opts.map((opt, i) => {
              let cls = 'quiz-opt'
              if (answered) {
                if (i === q.ans) cls += ' correct'
                else if (i === selected && i !== q.ans) cls += ' wrong'
              }
              return (
                <button
                  type="button"
                  key={i}
                  className={cls}
                  onClick={() => selectAnswer(i)}
                  disabled={answered}
                  style={answered ? { pointerEvents: 'none' } : undefined}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          <div className="quiz-result" style={feedbackStyle}>
            {quizFeedback}
          </div>
          <div className="quiz-nav">
            <button type="button" className="btn-next" onClick={nextQuestion}>
              Next Question →
            </button>
            <span className="quiz-progress">
              Question {quizIndex + 1} of {questions.length}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="quiz-question">
            🎉 Quiz Complete! Your Score: {score}/{questions.length}
          </div>
          <div className="quiz-options">
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '24px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'white',
                fontFamily: "'Baloo 2', cursive",
                fontSize: '1.5rem',
                fontWeight: 800,
              }}
            >
              {grade}
              <br />
              <span style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.7 }}>Share your score and challenge your friends!</span>
            </div>
          </div>
          <div className="quiz-result" />
          <div className="quiz-nav">
            <button type="button" className="btn-next" onClick={playAgain}>
              🔄 Play Again
            </button>
            <span className="quiz-progress">
              Final Score: {score}/{questions.length}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
