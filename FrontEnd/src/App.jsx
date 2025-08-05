import './index.css'
import SidebarProfile from './components/SideBarProfile/SideBarProfile.jsx';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: '20px', background: '#121214', height: '100vh' }}>
      <SidebarProfile />
    </div>
    </>
  )
}

export default App
