import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import ShowDetail from '@/pages/ShowDetail';
import VideoclipDetail from '@/pages/VideoclipDetail';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:slug" element={<ShowDetail />} />
          <Route path="/videoclip/:slug" element={<VideoclipDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  )
}

export default App
