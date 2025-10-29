import QuestionList from './pages/QuestionList'
import TodoList from "./pages/todo/TodoList";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto px-4 py-8">
                <QuestionList />
               {/* <TodoList />*/}
            </div>
        </div>
    )
}
