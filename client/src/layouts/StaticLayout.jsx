import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'

function StaticLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default StaticLayout