import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Statusbar } from './components'
import {
  Plans,
  PlanDetails,
  ZipCode,
  Unavailable,
  Ambassador,
  Register,
  PlanReview,
  Installation,
  Checkout,
  Schedule,
  Contract,
  NextSteps,
} from './pages'

export const AppRoutes = () => {
  // useForm to props
  // formActions to props
  // useEffect to response

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Plans />}>
            <Route path=":planName" element={<PlanDetails />} />
          </Route>
          <>
            <Statusbar />
            <Route path="zipCode" element={<ZipCode />}>
              <Route path=":unavailable" element={<Unavailable />} />
              <Route path=":ambassador" element={<Ambassador />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="planReview" element={<PlanReview />} />
            <Route path="installation" element={<Installation />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="contract" element={<Contract />} />
            <Route path="nextSteps" element={<NextSteps />} />
          </>
        </>
      </Routes>
    </BrowserRouter>
  )
}
