import React from 'react'
import './home.css'
import FourProductCard from '../../../components/FourProductCard/FourProductCard';
import img1 from '../../../assets/login_bg.jpg';
import img2 from '../../../assets/login_bg.jpg';
import img3 from '../../../assets/login_bg.jpg';
import img4 from '../../../assets/login_bg.jpg';
import bannerImg1 from '../../../assets/Banner Images/banner1.jpg'
import bannerImg2 from '../../../assets/Banner Images/banner2.jpg'
import bannerImg3 from '../../../assets/Banner Images/banner3.jpg'
import product1 from '../../../assets/login_bg.jpg';
import product2 from '../../../assets/resume_Photo.jpg';
import BannerImgSlider from '../components/BannerimageSlider/BannerImgSlider';
import ImgSlider from '../components/image_slider/ImgSlider';

function Home() {
  const HomeProducts = [
    { name: "Cushion covers", image: img1 },
    { name: "Figurines", image: img2 },
    { name: "Home storage", image: img3 },
    { name: "Lighting", image: img4 },
  ];

  const bannerImages = [bannerImg1, bannerImg2, bannerImg3];
  // const productImages = [{
  //   product1, product2, product1, product2, product1, product2, product1, product2,
  //   product1, product2, product1, product2, product1, product2, product1, product2,
  //   product1, product2, product2, product2
  // }];

  return (
    <div>
      <div className="bannerContainer">
        <BannerImgSlider slides={bannerImages} />
      </div>

      <div className="allCardsContainer">
        <FourProductCard title="Revamp your home in style" products={HomeProducts} linkText="Explore all" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        {/* <ImgSlider slides={productImages} /> */}
      </div>
    </div>
  )
}

export default Home
