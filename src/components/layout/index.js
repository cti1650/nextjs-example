import QinHeader from '../header/qin';
import QinFooter from '../footer/qin';

function Layout({children}) {
  return (
    <div className="main">
      <QinHeader/>
      <div className="min-h-60vh">
        {children}
      </div>
      <QinFooter/>
    </div>
  )
}

export default Layout
