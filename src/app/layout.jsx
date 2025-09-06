import "./globals.css";
import Navbar from '../../components/Navbar.jsx'
import Footer from "../../components/Footer.jsx";

const siteName = "My VIP Site";
const siteUrl = "https://example.com"; // apna real domain lagao

// ✅ yeh SEO metadata sab pages par apply hoga (global)
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`, // har page ka title me site name add hoga
  },
  description: "Premium VIP experiences, concierge support, and exclusive access.",
  keywords: ["VIP", "Concierge", "Premium", "Exclusive Access"],
  openGraph: {
    title: siteName,
    description: "Premium VIP experiences, concierge support, and exclusive access.",
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Premium VIP experiences, concierge support, and exclusive access.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="pt-16 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
