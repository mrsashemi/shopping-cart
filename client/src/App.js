import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopPage } from './pages/shoppage/shoppage';
import { Homepage } from './pages/homepage/homepage';
import { ShopPrints } from './components/shop-body/product-page/prints';
import { ShopMerch } from './components/shop-body/product-page/merch';
import { ShopNFT } from './components/shop-body/product-page/nft';
import { ShopCommissions } from './components/shop-body/product-page/commissions';
import { ProductHome } from './components/shop-body/product-page/producthome';
import { BlogPage } from './pages/blogpage/blogpage';
import React from 'react';
import { LoginPage } from './pages/loginpage/loginpage';
import { SignUpPage } from './pages/loginpage/signuppage';
import { InstaGallery } from './pages/instagallery/instagallery';
import { InstaUserBody } from './components/insta-body/instabody';
import { NewPostBody } from './components/insta-body/newpostbody';
import { EditPostBody } from './components/insta-body/editpostbody';
import { CreatePostBody } from './components/insta-body/createpostbody';
import { AuthProvider } from './context/auth-provider';
import RequireAuth from './components/authentication/require-auth';
import { PostScrollBody } from './components/insta-body/postscrollbody';
import { SinglePostBody } from './components/insta-body/singlepostbody';

const PrintDetail = React.lazy(() => import("./components/shop-body/item-pages/printdetails"));
const MerchDetail = React.lazy(() => import("./components/shop-body/item-pages/merchdetails"));
const ShopCart = React.lazy(() => import("./components/shop-body/cart-page/cart"))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<BlogPage />} ></Route>
            <Route path="/login" element={<LoginPage />} ></Route>
            <Route path="/signup" element={<SignUpPage />} ></Route>

            <Route element={<RequireAuth allowedRoles={"0001"} />}>
              <Route path="/fishstagram" element={<InstaGallery />} >
                <Route path='' element={<InstaUserBody />} />
                <Route path='newpost' element={<NewPostBody />} />
                <Route path='editpost' element={<EditPostBody />} />
                <Route path='createpost' element={<CreatePostBody />} />
                <Route path='allposts' element={<PostScrollBody/>} />
                <Route path='posts/:id' element={<SinglePostBody/>} />
              </Route>
            </Route>


            <Route path="/shop" element={<ShopPage />}>
              <Route path="" element={<ProductHome />} />
              <Route path="cart" element={
                <React.Suspense fallback={<div style={{marginRight: '1rem'}}>loading...</div>}>
                  <ShopCart />
                </React.Suspense>
              } />
              <Route path="prints" element={<ShopPrints />} />
              <Route path="prints/:id" element={
                <React.Suspense fallback={<div style={{marginRight: '1rem'}}>loading...</div>}>
                  <PrintDetail />
                </React.Suspense>
              } />
              <Route path="merchandise" element={<ShopMerch />} />
              <Route path="merchandise/:id" element={
                <React.Suspense fallback={<div style={{marginRight: '1rem'}}>loading...</div>}>
                  <MerchDetail />
                </React.Suspense>
              } />
              <Route path="NFT" element={<ShopNFT />} />
              <Route path="commissions" element={<ShopCommissions />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


//Goals: Create a webshop with React Router AND implement testing
//Idea: WizardsRobbingKids art website (homepage) with link to merchandise shop
//Test any component except routes

//Structure:
//Homepage to look like ipad/mac, implement a portal slider for background
//Include an ipad doc linking to portfolio, to shop, to about page
//Dont worry about building out functionality for all the "apps"
//Home component
//a) child component: top bar displaying date/time & "signal/battery"
//b) child components: divs as apps via grid, include a weather app, an about app displaying "Wizards Robbing Kids", to start but no click events for now 
//c) child component: bottom dock with a few app links, specifically route to shop


//Shop should include a handful of categories + ability to add to cart
//Include a contact page for commissions
//Include a privacy policy/about page
//Shop component
//a) child component: top bar to be copied from home, but change symbols to shop related ones (shopping cart)
//b) page will open like an app does, for child components: have some of the apps from home stay above the shop but change them so they appear as shop navigation
//c) child component: shop items to include prints, merchandise, commissions
//d) child component: about page (home should also route here)
//e) child component: shopping cart, slide out 
//d) child component: since the idea is to simulate a website, have where you would otherwise enter a link as the search bar, the placeholder text should be the wizardsrobbingkids.com/shop

