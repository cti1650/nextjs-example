import QinHeader from '../header/qin';
import Footer from '../footer';

function Layout({children}) {
  return (
    <div className="main">
      <QinHeader/>
      <div className="min-h-60vh">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
