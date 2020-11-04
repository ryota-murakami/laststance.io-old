import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

interface Props {
  preview: boolean
}

const Layout: React.FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
