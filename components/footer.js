import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/laststance"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
            <p>I'm sorry about this crappy website.<br/>I'm in early phase of development so this will be styled gradually!</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
