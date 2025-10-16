
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import LibraryPage from './pages/LibraryPage';
import ReadingPage from './pages/ReadingPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/read/:id" element={<ReadingPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;