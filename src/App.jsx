import { createContext, useState } from 'react';
import Question from './components/Question/Question.jsx';

export const QuizContext = createContext(null);

export function App() {
    const questions = [
        {
            question: 'Какую вершину сложно покорить?',
            answers: ['Макалау', 'Ношак', 'К-12', 'Эверест'],
            correctAnswer: 'Эверест'
        },
        {
            question: 'Какая самая длинная река в мире?',
            answers: ['Амазонка', 'Нил', 'Янцзы', 'Миссисипи'],
            correctAnswer: 'Амазонка'
        },
        {
            question: 'Какая планета самая большая в Солнечной системе?',
            answers: ['Земля', 'Марс', 'Юпитер', 'Венера'],
            correctAnswer: 'Юпитер'
        },
        {
            question: 'Какое из этих животных является млекопитающим?',
            answers: ['Акулы', 'Дельфины', 'Медузы', 'Скат'],
            correctAnswer: 'Дельфины'
        },
        {
            question: 'Какая страна самая большая по площади?',
            answers: ['Канада', 'Россия', 'США', 'Китай'],
            correctAnswer: 'Россия'
        },
        {
            question: 'Какой океан самый глубокий?',
            answers: ['Атлантический', 'Индийский', 'Северный Ледовитый', 'Тихий'],
            correctAnswer: 'Тихий'
        },
        {
            question: 'Какой элемент периодической таблицы обозначается символом "O"?',
            answers: ['Золото', 'Олово', 'Кислород', 'Углерод'],
            correctAnswer: 'Кислород'
        },
        {
            question: 'Какой из этих языков программирования является фреймворком для JavaScript?',
            answers: ['Python', 'Java', 'React', 'Ruby'],
            correctAnswer: 'React'
        },
        {
            question: 'Кто написал роман "Война и мир"?',
            answers: ['Достоевский', 'Пушкин', 'Толстой', 'Гоголь'],
            correctAnswer: 'Толстой'
        },
        {
            question: 'Сколько часов в сутках?',
            answers: ['12', '24', '48', '36'],
            correctAnswer: '24'
        },
        {
            question: 'Как называется столица Франции?',
            answers: ['Лондон', 'Берлин', 'Париж', 'Мадрид'],
            correctAnswer: 'Париж'
        },
        {
            question: 'Кто из этих ученых известен своей теорией относительности?',
            answers: ['Ньютон', 'Эйнштейн', 'Тесла', 'Фарадей'],
            correctAnswer: 'Эйнштейн'
        },
        {
            question: 'Какой газ необходим для дыхания?',
            answers: ['Водород', 'Азот', 'Кислород', 'Углекислый газ'],
            correctAnswer: 'Кислород'
        },
        {
            question: 'Сколько континентов на Земле?',
            answers: ['5', '6', '7', '8'],
            correctAnswer: '7'
        },
        {
            question: 'Какой язык является официальным в Бразилии?',
            answers: ['Испанский', 'Португальский', 'Французский', 'Итальянский'],
            correctAnswer: 'Португальский'
        }
    ];

    const [index, setIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [selected, setSelected] = useState(false);
    const [correct, setCorrect] = useState(0);

    const findCorrectAnswer = (e, ans) => {
        if (!selected) {
            if (currentQuestion.correctAnswer === ans) {
                e.target.classList.add('correct');
                setCorrect(correct + 1);
            } else {
                e.target.classList.add('wrong');
                Array.from(e.target.parentNode.children).forEach(question => {
                    if (question.textContent === currentQuestion.correctAnswer) {
                        question.classList.add('correct');
                    }
                });
            }
            setSelected(true);
        }
    };
    

    const NextButton = () => {
        setIndex(index + 1);
        setCurrentQuestion(questions[index + 1]);
        setSelected(false);
    };

    const resetQuiz = () => {
        setIndex(0);
        setCurrentQuestion(questions[0]);
        setCorrect(0);
        setSelected(false);
    };

    return (
        <QuizContext.Provider
            value={{
                questions,
                index,
                setIndex,
                currentQuestion,
                setCurrentQuestion,
                NextButton,
                findCorrectAnswer,
                correct,
                resetQuiz
            }}
        >
            <Question />
        </QuizContext.Provider>
    );
}
