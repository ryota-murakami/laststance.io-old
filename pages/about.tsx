import React from 'react'

const About: React.FC = () => {
  return (
    <main className="main">
      <h1 className="py-6 text-4xl text-center">About</h1>
      <section className="text-xl px-10 md:px-32 lg:px-64">
        <p>
          Laststance.io is organization for logging Open Source Software
          activity like learning, building, research, hack, experimental etc...
        </p>
        <p className="mt-4">
          The autor is
          <a
            className="hover:text-gray-400 text-gray-600"
            href="https://ryota-murakami.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Ryota Murakami
          </a>
          .
        </p>

        <p className="mt-4">
          this is my thought against web and what's bring me into the web
          development world.
        </p>

        <ul className="mt-8 list-disc space-y-4 pl-4">
          <li>UI + Data + Internet is key terms.</li>
          <li>It is give us unlimited possibility.</li>
          <li>
            It is one of the few options to revolt to outrageous, absurd,
            nightmare in lifetile.
          </li>
          <li>It is the hope that might have saved what I had lost.</li>
        </ul>
      </section>
    </main>
  )
}

export default About
