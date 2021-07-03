import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-full px-40">
      <h1 className="py-6 text-4xl text-center">About</h1>
      <section className="text-xl">
        <div>
          Laststance.io is organization for Open Source Software activity by{' '}
          <a
            className="hover:text-gray-400 text-gray-600"
            href="https://ryota-murakami.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Ryota Murakami
          </a>
          .
        </div>

        <div className="mt4">
          Yes I created organization alone, that little bit odd.
          <br />
          Initial motivation is I want to put prefix @laststance/foopkg
        </div>

        <div className="mt-4">
          Basically to do something following concepts.
        </div>

        <ul className="mt-4 list-disc">
          <li>Fullfill gap between OSS library and Production App.</li>
          <li>
            Digging to know everything when I have interest without a particular
            job description.
          </li>
          <li>
            Join core of OSS that crucial thing future of web and health of web.
          </li>
        </ul>

        <div className="mt-4">
          We prefer show example of any mainstream React/JavaScript technology
          for developers who trying to build a Real World App like Youtube,
          Instagram, Twitter, Facebook etc. We prefer building with fully OSS
          technology stack rathar than PaSS like Firebase.
        </div>
      </section>
    </div>
  )
}

export default About
