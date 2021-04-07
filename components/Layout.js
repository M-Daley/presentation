import Heading from './Heading'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
return (
    <div>
        <Heading />
        <Header />
        {children}
        <Footer />
    </div>
)}