import React from 'react'
import { Intro } from '../components/generic/Intro'

const AboutPage: React.FC = () => {
  return (
    <section className="containber flex flex-col items-center justify-center m-auto h-screen">
      <Intro />
      <h3 className="text-4xl">
        Laststance.io is indipendent organization for OSS activity.
      </h3>
    </section>
  )
}

export default AboutPage
