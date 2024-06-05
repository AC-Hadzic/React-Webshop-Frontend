import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { AppWrapperComponent } from './layout/AppWrapper/AppWrapperComponent'
import { SingleProduct } from './pages/Products/SingleProduct'
import { HomePage } from './pages/HomePage/HomePage'
import { ProductList } from './pages/Products/ProductList'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { Contacts } from './pages/Contacts/Contacts'
import { Blog } from './pages/Blog/Blog'
import { Login } from './pages/Login/Login'
import { Cart } from './pages/Cart/Cart'
import { Checkout } from './pages/Cart/Checkout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppWrapperComponent />}>
                    <Route index element={<HomePage />} />
                    
                    <Route path='/about_us' element={<AboutUs />} />
                    <Route path='/contacts' element={<Contacts 
                    email = "telesales@gmail.com"
                    mob_show = "+385 022 123 321" 
                    golub = "Oliver Golubović"
                    />} 
                    />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />

                    <Route path='/product' element={<Outlet />}>
                    <Route index element={<ProductList title={"Default"} />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                    </Route>
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default App