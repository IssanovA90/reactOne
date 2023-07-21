import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, useParams } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import './App.css'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='/:cityName' element={<Home />} />
    <Route path='/search' element={<Search />} />
    <Route path='/profile' element={<ProfilePage />} />
  </Route>
))
function ProfilePage() {
  return 
}
function RootLayout() {
  return (
    <div className="main">
      <div className="navigate">
        <Link to='/'>Home</Link>
        <Link to='/search' >Search</Link>
        <Link to='/profile'>Profile</Link>
      </div>
      <Outlet/>
    </div>
  )
}
function App() {
  return <RouterProvider router={router} />
}
export default App;
