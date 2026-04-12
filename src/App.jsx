import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { LawsPage } from './pages/LawsPage'
import { TipsPage } from './pages/TipsPage'
import { QuizPage } from './pages/QuizPage'
import { ShopPage } from './pages/ShopPage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/laws" element={<LawsPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
