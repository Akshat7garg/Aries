import React from 'react'
import { Outlet } from 'react-router-dom'
import OauthHeader from '@/components/custom/OauthHeader'
import Footer from '@/components/custom/Footer'

function OauthLayout() {
  return (
    <>
      <OauthHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default OauthLayout