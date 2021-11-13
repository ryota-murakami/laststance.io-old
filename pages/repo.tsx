import React, { memo } from 'react'

import RepoCard from '../components/elements/RepoCard'

const Repo: React.FC = memo(() => {
  return (
    <section className="container flex flex-col items-center m-auto h-screen">
      <RepoCard
        name="vite-react-ts-extended"
        url="https://github.com/laststance/vite-react-ts-extended"
        intro="Vite's react-ts templete + eslint, jest, tailwindcss."
      >
        This is the official Vite template(npm init vite@latest{' '}
        <span>(npm init vite@latest myapp -- --template react-ts)</span> with
        the following additional set up.
      </RepoCard>
      <RepoCard
        name="vite-react-ts-extended"
        url="https://github.com/laststance/vite-react-ts-extended"
        intro="Vite's react-ts templete + eslint, jest, tailwindcss."
      >
        This is the official Vite template(npm init vite@latest{' '}
        <span>(npm init vite@latest myapp -- --template react-ts)</span> with
        the following additional set up.
      </RepoCard>
      <RepoCard
        name="vite-react-ts-extended"
        url="https://github.com/laststance/vite-react-ts-extended"
        intro="Vite's react-ts templete + eslint, jest, tailwindcss."
      >
        This is the official Vite template(npm init vite@latest{' '}
        <span>(npm init vite@latest myapp -- --template react-ts)</span> with
        the following additional set up.
      </RepoCard>
      <RepoCard
        name="vite-react-ts-extended"
        url="https://github.com/laststance/vite-react-ts-extended"
        intro="Vite's react-ts templete + eslint, jest, tailwindcss."
      >
        This is the official Vite template(npm init vite@latest{' '}
        <span>(npm init vite@latest myapp -- --template react-ts)</span> with
        the following additional set up.
      </RepoCard>
    </section>
  )
})
Repo.displayName = 'Repo'

export default Repo
