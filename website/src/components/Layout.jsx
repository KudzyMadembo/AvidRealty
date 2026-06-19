import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SEO from './SEO';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
