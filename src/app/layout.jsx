import "./globals.css";

import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
export const metadata = {
    title: "Fixed Navbar Demo",
    description: "Navbar stays on top across all pages",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {/* Navbar har page par fixed */}
                <Navbar />
                {/* content ke liye padding upar se (64px ≈ h-16) */}
                <main className="pt-16">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
