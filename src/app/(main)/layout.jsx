import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"

function StaticPageLayout({ children }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default StaticPageLayout