import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import MakePostModal from './components/MakePostModal'
import MyNav from './components/MyNav'
import NewsFeed from './components/NewsFeed'
import Profile from './components/Profile'
import Categories from './components/Categories'

const App = () => (
  <BrowserRouter>
    <Container fluid>
      <MyNav />
      <Container>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<NewsFeed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal" element={<MakePostModal />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Container>
    </Container>
  </BrowserRouter>
)
export default App
