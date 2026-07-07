import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { LawsPage } from './pages/LawsPage'
import { TipsPage } from './pages/TipsPage'
import { QuizPage } from './pages/QuizPage'
import { ShopPage } from './pages/ShopPage'
import { AboutPage } from './pages/AboutPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfUsePage } from './pages/TermsOfUsePage'
import { DisclaimerPage } from './pages/DisclaimerPage'
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage'
import { SubmitYourArticle } from './pages/SubmitYourArticle'
import { AdvertisePage } from './pages/AdvertisePage'
import { ContactPage } from './pages/ContactPage'
import { Blogs } from './pages/Blogs'
import { Quotes } from './pages/Quotes'

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
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
          <Route path="/submit-your-article" element={<SubmitYourArticle />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
