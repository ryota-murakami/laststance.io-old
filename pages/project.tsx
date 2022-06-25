import React, { memo } from 'react'

import RepoCard from '../components/elements/RepoCard'

const Project: React.FC = memo(
  () => {
    return (
      <section className="container m-auto flex h-screen flex-col items-center">
        <RepoCard
          name="vite-rtk-query"
          url="https://github.com/laststance/vite-rtk-query"
          intro="Vite RTK Query temptelte."
        >
          This include React+TS with familiar pre-setup tooling Redux Toolkit,
          RTK Query, eslint/prettier, jest/TS/react-testing-library/MSW,
          tailwindcss, GitHub Actions CI.
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
          name="nsx"
          url="https://github.com/laststance/nsx"
          intro="Micro Blog System for React Developer"
        >
          The ultimate goal for this project is release it as a personal blog
          starter kit for React developers like Minimal Wordpress. I'm
          developping essential feature while my spare time, currenty I planning
          publish v1 2023 early.
        </RepoCard>
        <RepoCard
          name="react-typescript-todomvc-2022"
          url="https://github.com/laststance/react-typescript-todomvc-2022"
          intro="React TypeScript TodoMVC 2022"
        >
          Keep updating and publish{' '}
          <a
            href="https://todomvc.com/"
            target="_blank"
            className="font-medium text-gray-700 no-underline hover:underline"
          >
            TODO MVC stuff
          </a>{' '}
          with a modern code style React.
        </RepoCard>
        <RepoCard
          name="eslint-config-typescript-react-pro"
          url="https://github.com/laststance/eslint-config-typescript-react-pro"
          intro="ESLint rules for all of my React + TypesScript projects. Without exhaustive-deps rule :-)"
        >
          My TypeScript project's ESLint config.
        </RepoCard>
      </section>
    )
  },
  () => true
)
Project.displayName = 'Project'

export default Project