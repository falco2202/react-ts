import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '@/pages/NotFoundPage'
import publicRoutes from '@/routes/PublicRoute'

function App() {
  return (
    <Routes>
      {publicRoutes.map((val) => (
        <Route key={val.name} path={val.path} element={val.component} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
