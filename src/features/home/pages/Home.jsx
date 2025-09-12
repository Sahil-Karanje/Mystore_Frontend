import './home.css'
import FourProductCard from '../components/FourProductCard/FourProductCard';
import bannerImg1 from '../../../assets/Banner Images/banner1.jpg'
import bannerImg2 from '../../../assets/Banner Images/banner2.jpg'
import bannerImg3 from '../../../assets/Banner Images/banner3.jpg'
import BannerImgSlider from '../components/BannerimageSlider/BannerImgSlider';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ProductSlider from '../components/productSlider/ProductSlider';

function Home() {
  const HomeProducts = [
    { name: "Cushion covers", image: bannerImg1 },
    { name: "Figurines", image: bannerImg1 },
    { name: "Home storage", image: bannerImg1 },
    { name: "Lighting", image: bannerImg1 },
  ];

  const sliderProducts = [
    { imageUrl: "/images/headphone.jpg", id: 1 },
    { imageUrl: "/images/socks.jpg", id: 2 },
    { imageUrl: "/images/gift.jpg", id: 3 },
    { imageUrl: "/images/gloves.jpg", id: 4 },

  ]

  const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

  return (
    <div>
      <div className="bannerContainer">
        <BannerImgSlider slides={bannerImages} />
      </div>

      <div className="allCardsContainer">
        <FourProductCard title="Revamp your home in style" products={HomeProducts} linkText="Explore all" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
      </div>
      <div className="productSliderContainer">
        <ProductSlider title="More Picks for you" products={sliderProducts} />
      </div>
      <div className="productSliderContainer">
        <ProductSlider title="More Picks for you" products={sliderProducts} />
      </div>
      <div className="cardsContainer">
        <FourProductCard title="Revamp your home in style" products={HomeProducts} linkText="Explore all" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
        <FourProductCard title="Best deals for you" products={HomeProducts} linkText="See more" />
        <CategoryCard title="Upto 75% off Headphones" imageUrl="/images/headphone.jpg" redirectUrl="/" />
      </div>
    </div>
  )
}

export default Home
