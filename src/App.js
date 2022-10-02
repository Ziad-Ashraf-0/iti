// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./components/navbar/Navbar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./App.css";
import Cards from "./components/cards/Cards";
import Home from "./components/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/favourites/Favourites";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-3/5 h-80"
        >
          <SwiperSlide>
            <img
              className="object-fill w-full h-96"
              src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
              alt="slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill w-full h-96"
              src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
              alt="slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-fill w-full h-96"
              src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
              alt="slide 3"
            />
          </SwiperSlide>
        </Swiper>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" exact element={<Cards />} />
          <Route path="/favourites" exact element={<Favourites />} />
          {/* <Route path="/movies/:id" exact component={Moviedetails} />
        <Route path="/home" component={Home} />
        <Route path="/tvs" component={Tv} />
        <Route path="/products" component={Products} />
        <Route path="/favs" component={Favs} />
        <Route path="/productdetails/:id" component={Productdetails} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
