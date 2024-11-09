import { useContext } from 'react';
import { QuizContext } from '../../App';

export default function QuestionEmptyList() {
    const { resetQuiz, correct, questions } = useContext(QuizContext);

    return (
        <div className='question'>
            <p>{correct}/{questions.length} Are Correct</p>
            <button className='resetBtn' onClick={resetQuiz} type='button'>
                Reset
            </button>
        </div>
    );
}
