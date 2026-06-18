import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhyAvid from './pages/WhyAvid';
import InvestmentApproach from './pages/InvestmentApproach';
import TrackRecord from './pages/TrackRecord';
import Team from './pages/Team';
import InvestmentOpportunities from './pages/InvestmentOpportunities';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Events from './pages/Events';
import News from './pages/News';
import Videos from './pages/Videos';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Invest from './pages/Invest';
import ThinkBig from './pages/ThinkBig';
import Report from './pages/Report';
import WebinarReplay from './pages/WebinarReplay';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="why-avid" element={<WhyAvid />} />
        <Route path="investment-approach" element={<InvestmentApproach />} />
        <Route path="track-record" element={<TrackRecord />} />
        <Route path="team" element={<Team />} />
        <Route path="investment-opportunities" element={<InvestmentOpportunities />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="events" element={<Events />} />
        <Route path="news" element={<News />} />
        <Route path="videos" element={<Videos />} />
        <Route path="research" element={<Research />} />
        <Route path="contact" element={<Contact />} />
        <Route path="invest" element={<Invest />} />
        <Route path="think-big" element={<ThinkBig />} />
        <Route path="report" element={<Report />} />
        <Route path="webinar-replay" element={<WebinarReplay />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}
