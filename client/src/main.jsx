import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import StaticLayout from './layouts/StaticLayout'
import Home from './static_pages/Home'
import Features from './static_pages/Features'
import Faqs from './static_pages/Faqs'
import Support from './static_pages/Support'
import OauthLayout from './layouts/OauthLayout'
import Login from './oauth_pages/Login'
import Signup from './oauth_pages/Signup'
import Conditions from './static_pages/Conditions'
import FitnessModel from './model_pages/FitnessModel'
import CareerModel from './model_pages/CareerModel'
import GrammerModel from './model_pages/GrammerModel'
import GeneralModel from './model_pages/GeneralModel'
import PersonalityModel from './model_pages/PersonalityModel'
import FinancialModel from './model_pages/FinancialModel'
import ExamModel from './model_pages/ExamModel'
import MentalModel from './model_pages/MentalModel'
import MailModel from './model_pages/MailModel'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<StaticLayout />}>
        <Route index element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/support' element={<Support />} />
        <Route path='/privacy-and-terms' element={<Conditions />} />
      </Route>

      <Route path='/oauth' element={<OauthLayout />} >
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>

      <Route path='/chat' element={<OauthLayout />} >
        <Route path='fitness-coach' element={<FitnessModel />} />
        <Route path='career-guide' element={<CareerModel />} />
        <Route path='grammar-corrector' element={<GrammerModel />} />
        <Route path='mail-writer' element={<MailModel />} />
        <Route path='mental-guide' element={<MentalModel />} />
        <Route path='exam-preparator' element={<ExamModel />} />
        <Route path='financial-advisor' element={<FinancialModel />} />
        <Route path='personality-developer' element={<PersonalityModel />} />
        <Route path='general-chatbot' element={<GeneralModel />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
