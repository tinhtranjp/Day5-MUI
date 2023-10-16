import{Routes, Route} from 'react-router-dom';
import MainLayout  from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Regsiter from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import FoodItem from './pages/Home/FoodItem';
import NotFound from './pages/Error/NotFound';
function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/food/:id' element={<FoodItem/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Regsiter/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
