import React from 'react'
import FourProductCard from '../../../components/FourProductCard/FourProductCard';
import img1 from '../../../assets/login_bg.jpg';
import img2 from '../../../assets/login_bg.jpg';
import img3 from '../../../assets/login_bg.jpg';
import img4 from '../../../assets/login_bg.jpg';

function Home() {

  const HomeProducts = [
    { name: "Cushion covers", image: img1 },
    { name: "Figurines", image: img2 },
    { name: "Home storage", image: img3 },
    { name: "Lighting", image: img4 },
  ];

  return (
    <div>
      <FourProductCard title="Revmap your home in style" products={HomeProducts} linkText="explore all" />
    </div>
  )
}

export default Home