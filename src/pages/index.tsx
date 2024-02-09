import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import LayoutGuest from '../layouts/Guest'
import SectionMain from '../components/SectionMain'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'

const StyleSelect = () => {


  const router = useRouter()

  const handleStylePick = (e) => {
    e.preventDefault()

    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <div className={`flex min-h-screen items-center justify-center ${gradientBgPurplePink}`}>
        <SectionMain>
          <h1 className="mt-12 mb-3 text-4xl font-bold text-center text-white md:text-5xl lg:mt-0">
          A Simple Web Application With Next.js and Tailwind CSS&hellip;
          </h1>
          <h3 className="mt-12 mb-3 font-bold text-right underline cursor-pointer text-1xl md:text-3xl lg:mt-0" onClick={handleStylePick}>Get Started</h3>
        </SectionMain>
      </div>
    </>
  )
}

StyleSelect.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelect
