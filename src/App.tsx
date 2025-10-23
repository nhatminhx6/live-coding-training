
import { Routes, Route, Navigate } from 'react-router-dom'
import QuestionList from './pages/QuestionList'
import QuestionDetail from './pages/QuestionDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<QuestionList />} />
      <Route path="/q/:slug" element={<QuestionDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
