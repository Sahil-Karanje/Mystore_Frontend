import './home.css'
import FourProductCard from '../components/FourProductCard/FourProductCard';
import bannerImg1 from '../../../assets/Banner Images/banner1.jpg'
import bannerImg2 from '../../../assets/Banner Images/banner2.jpg'
import bannerImg3 from '../../../assets/Banner Images/banner3.jpg'
import headphoneImage from '../../../assets/headphone.jpg'
import sneakerImage from '../../../assets/sneakers.jpg'
import mobileImage from '../../../assets/mobile.jpg'
import clothImage from '../../../assets/cloth.jpeg'
import BannerImgSlider from '../components/BannerimageSlider/BannerImgSlider';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ProductSlider from '../components/productSlider/ProductSlider';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

  const [footWears, setFootWears] = useState([]);
  const [electronics, setelectronics] = useState([]);
  const [clothing, setclothing] = useState([]);
  const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const footwearResponse = await axios.get("https://localhost:7007/api/product/category/footwear");
        setFootWears(footwearResponse.data)
        const electronicsResponse = await axios.get("https://localhost:7007/api/product/category/electronics");
        setelectronics(electronicsResponse.data)
        const clothingResponse = await axios.get("https://localhost:7007/api/product/category/clothing");
        setclothing(clothingResponse.data)

      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [])

  const shoeProducts = [
    {
      "productId": 6,
      "name": "Bacca Bucci Men Boot",
      "longDescription": "Elastic wearable upper, waterproof exterior, breathable material which can keep feet all-day dry meanwhile provide with great comfort.\r\nAnkle-high cold-weather boots seam-sealed let you enjoy a new soft and warm wearing experience, perfect for winter.\r\nHigh traction anti-slip rubber outsole for optimal grip in wet or steep conditions and other terrains.\r\nAnti-slip Sole and durable sole let you hike with steady and easiness, providing great grip on the ground.\r\nSuitable for various outdoor activities in cold winter, daily walking, work, shopping, hiking, trekking, travelling, camping, climb and trip outdoor sport. So easy to enjoy outdoor fun.",
      "shortDescription": "superb quality, comfortable, and good value for money",
      "price": 2999,
      "discountPrice": 1499,
      "stock": 620,
      "brand": "Bacca Bucci",
      "category": "Footwear",
      "imageUrl": "/ProductImages/64413a22-5872-4bf6-bf50-b992498013f5.jpg",
      "isActive": true,
      "createdAt": "2025-09-19T14:41:50.284816",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 7,
      "name": "JQR Signature Men's Casual Sneaker Shoes",
      "longDescription": "Synthetic Fabric Upper: The upper is made of synthetic fabric, which enhances breathability within the shoe cavity. This allows for better air circulation, keeping your feet dry and comfortable during Walking.\r\nSlip-resistant outsole: Made of wear-resistant phylon material and designed with special anti-slip patterns, it provides excellent grip and stability, ensuring safety and balance on both wet and dry surfaces.\r\nResponsive Cushioning: Integrated with shock-absorbing midsole technology and a supportive heel counter to provide dynamic cushioning that propels you forward while minimizing impact on your joints during long runs.\r\nLightweight Construction: Utilizing a combination of breathable mesh and lightweight materials, these shoes minimize weight while maximizing performance, allowing for effortless strides and increased speed.\r\nFashion and functionality: modern and simple design language, combined with rich color choices, not only meets sports needs, but is also an ideal choice for daily wear and can be easily adapted to various occasions. Perfect For: trail, cross-training, gym, walking, cycling, camping, fitness, tennis, marathon, exercise, casual, travel",
      "shortDescription": "Comfortable Memory Foam Insole Lightweight Soft Cushioned Extra Grip Anti Skid Durable Synthetic Upper Lace up Design for Gym",
      "price": 1699,
      "discountPrice": 929,
      "stock": 657,
      "brand": "JQR SPORTS",
      "category": "Footwear",
      "imageUrl": "/ProductImages/3cd134f2-3f64-4666-8fb8-18ba4c597490.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T10:48:20.273831",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 8,
      "name": "Campus Men Chance Running Shoes",
      "longDescription": "Breathable Shoes' Upper — These walking shoes come with a knitted vamp upper that promotes airflow, making these feel like second-skin!\r\nGreat Grip - Thanks to the textured sole design that enhances the traction & grip, giving you safe steps on all surfaces.\r\nComfortable Shoes — These shoes are super easy to slide into, ensuring you're always on-the-go!\r\nModern Everyday Shoes — The modern design gives these shoes an effortlessly cool appeal - apt for everyday to occasional fits!\r\nEasy Care Shoes — Rinse in lukewarm water and your fav shoes are ready for their next stroll!\r\n",
      "shortDescription": "Campus, Campus Activewear Pvt. Ltd., Campus Shoes,D-1, Rohtak Road, Udyog Nagar, Opp. Peera Garhi Metro Station Gate No 2, New Delhi, Delhi 110041,ph no- 01143272600",
      "price": 1899,
      "discountPrice": null,
      "stock": 246,
      "brand": "Campus",
      "category": "Footwear",
      "imageUrl": "/ProductImages/70e5ec51-cf51-456b-8dee-9d8dbbabc08b.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T10:52:03.00043",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 9,
      "name": "Campus Men Tormentor Running Shoes",
      "longDescription": "Mesh Upper- Experience the joy of a breathable mesh upper that keeps your feet fresh and comfortable. The lace-up closure ensures a snug fit, making them your perfect companions for college, the office, or a casual date night.\r\nOutsole- Unleash your potential with the Support Tech outsole, designed to guide your feet in natural movement. Whether you're running or walking, enjoy the stability and comfort of every step.\r\nInsole- Step onto cloud-like comfort with the Memory Foam insole that adapts to your foot's contours. The cushioned base pampers your feet, turning every journey into a delightful experience.\r\nStyling Tips- These running shoes aren't just for the track. Pair them with jeans for a laid-back look or rock them with chinos for a smart-casual twist. From workouts to hangouts, they're the epitome of cool.\r\nCaring Tips- To keep these shoes looking their best, gently wipe off dirt with a damp cloth and air dry them away from direct heat. Regular care ensures they stay as vibrant as your style.",
      "shortDescription": " running shoes to be of excellent quality, comfortable, and good value for money.",
      "price": 2499,
      "discountPrice": 1269,
      "stock": 279,
      "brand": "Campus",
      "category": "Footwear",
      "imageUrl": "/ProductImages/934d9868-f728-408f-bdb4-ad58fa67086f.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T10:56:27.566584",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    }
  ];

  const electronicsProducts = [
    {
      "productId": 31,
      "name": "GoPro HERO12 Waterproof Action Camera",
      "longDescription": "1 year International + Free 1* year extended India warranty. *To avail free 1 year local India warranty please register on website (gopro luxurypersonified)\r\nHigh Dynamic Range Video + Photo : Best-in-class image quality to the next level with HDR for both videos (5.3K and 4K) and photos. Great in environments with both shadows and bright light, HDR captures the subtle details of the scene that might typically blend into the darkness of shadows or disappear in the bright spots of your shot. The result is dynamic footage with true-to-life color and precision.\r\nUnbelievable Image Quality : With 5.3K video that gives you 91% more resolution than 4K and an incredible 665% more than 1080p, HERO12 Black captures the action with crisp detail and cinematic image quality with High Dynamic Range (HDR) while also taking 27MP photos.\r\n2x Longer Runtime¹ : HERO12 Black’s dramatically improved battery efficiency combines with the included 1720mAh Enduro battery to deliver a huge 2x increase in 5.3K60 video runtime on each charge. You’ll get 70 minutes of continuous recording at 5.3K60 (our highest setting), plus over 1.5 hours at 5.3K30 and over 2.5 hours of continuous recording at 1080p30.6 Using advanced technology, Enduro also boosts performance in cold temperatures over previous GoPro cameras and batteries\r\nExtra-Large Field of View : HERO12 Black’s powerful image sensor delivers the most expansive field of view ever on a HERO camera out of the box. It features extra-large 8:7 aspect ratio footage that gets more of the sky and horizon in each shot—giving you huge canvas for your creativity. It takes 8:7 a step further with HyperView. This GoPro- exclusive digital lens takes 8:7 footage and serves it up as a wide-angle 16:9 shot.",
      "shortDescription": "with Front & Rear LCD Screens, 5.3K60 Ultra HD Video, HyperSmooth 6.0 + AutoBoost, Live Streaming with Enduro Battery (1-Yr International + 1-Yr India Warranty)",
      "price": 45000.00,
      "discountPrice": 29990.00,
      "stock": 534,
      "brand": "GoPro",
      "category": "electronics",
      "imageUrl": "/ProductImages/4a0c03b5-79ba-4087-839f-99cce8b672ca.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T12:45:41.512537",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 32,
      "name": "DEATTI4K 30FPS Action Camera",
      "longDescription": "Action Camera with 4X Zoom: Professional 4K/30FPS, 2.7K/30fps, 1080P/60FPS video and 16MP photo resolution enables you to capture exciting moment for you. This camera also features zoom range from 1.0X to 4.0X.\r\n120FT Waterproof Action Camera: Place your camera into the waterproof case and securely fasten it, you can dive below 120ft (40m). Underwater photography cameras is ideal for water sports such as swimming, surfing, diving, snorkeling etc.\r\nWireless Remote Control & Adjustable View Angle: while installing the camera on the helmet, selfie stick, etc, convenient to record moments in places. You can choose various wide angles between 70°,110°,140°, 170° as you like. it’s up to you to decide expansive or narrow field view.\r\nVersatile & Compact: 4k HD action camera features multiple functions including driving mode, image rotation, time-lapse, burst photo, loop recording, slow motion, dramashot, white balance, etc. Bringing this camera to more applicable conditions beyond your expectation.",
      "shortDescription": "Ultra HD Underwater Camera 170 Degree Wide Angle 98FT Waterproof Camera (DECM51)",
      "price": 5999.00,
      "discountPrice": 1699.00,
      "stock": 54,
      "brand": "DEATTI",
      "category": "electronics",
      "imageUrl": "/ProductImages/79bf6da0-6ae4-4fbe-af29-5107babf911c.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T12:46:40.935998",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 33,
      "name": "Canon EOS R7 32.5MP",
      "longDescription": "Unleash your creative vision with the Canon EOS R7. With 32.5MP and 4K at 120p, it's your ultimate tool for capturing the untamed beauty of wildlife and the intricate details of close-ups. In sleek black, it's ready to accompany you on every photographic adventure.\r\nImage Sensor: APS-C Sensor\r\nImage processor: DIGIC X\r\nShooting speed: Up to 30 frames per second\r\nVideo resolution/ slow motion: 4K 60p + Full HD 120p\r\nISO range: 100-32000\r\nDisplay: Vari-angle, LCD touch screen, 3.0 type with approx with 1620K dots\r\nConnectivity: Wifi + Bluetooth\r\nWarranty: 2 Years",
      "shortDescription": "Mirrorless Camera Body | APS-C Sensor | 4K Video Recording (Black)",
      "price": 138995.00,
      "discountPrice": 114990.00,
      "stock": 546,
      "brand": "Canon",
      "category": "electronics",
      "imageUrl": "/ProductImages/fa5bc9c5-d671-4129-8799-e63f6bc7efc5.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T12:47:46.033518",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 34,
      "name": "CADDLE & TOES Kids Camera for Girls Boys",
      "longDescription": "The body has a sleek design, and the grip is more comfortable to protect the child's tender hands. Kids Camera with 1080P(1920x1080) HD video camcorder and 3.0 Mega Pixel, greatly improve the photos definition compared with other children cameras.\r\nOur updated digital kids camera comes with more functions, photo capture, video recording, continuous shooting, playback, countdown photo, sticker photo, recording etc. The photo and video mode also have various scene selections and cute photo frame. Our kids recording camera max support 32GB micro SD card (Card is NOT included). It includes 5 puzzle games which also make this camera more interesting for your kid.\r\n【Child-Friendly Materials】Our kids recording camera is made of soft ABS material which is safer for children's skin and also provides effective anti-fall protection. How to clean the surface of this kids digital camera: using a soft cotton pad with tiny makeup remover water to gently clean it.\r\n【2023 Upgraded Kids Camera】Equipped with 2 Inch HD IPS screen,📸13MP pixels and 🎥1080P Video, which greatly improved the definition of photos.Upgraded 🔋1000mah battery capacity provides longer usage. And automatic shut-off better preserves battery life if no operation., you don't need to worry about the lack of storage space too. Best camera toys for boy girl age 4+ 5 6 7 8 9 10.\r\n【Muti-Functional Kids Camera】This toddler camera not only can take a photo but also record video and play puzzle games, etc. Also its magic filters and cute photo frames let children better love to take photos with this cute toy camera to record their happy moments. ❤Perfect birthday, Halloween, New Year and Christmas gifts for kid 4+ to 10 years old.",
      "shortDescription": "Kids Selfie Camera 13MP 1080P HD Digital Video Camera for Toddler,Christmas Birthday Gifts for 4+ to15 Years Old Children (Pink)",
      "price": 1999.00,
      "discountPrice": 609.00,
      "stock": 38,
      "brand": "CADDLE & TOES",
      "category": "electronics",
      "imageUrl": "/ProductImages/f379b467-2f3e-4649-b2de-9f0d833c72a9.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T12:48:51.775633",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    }
  ];

  const clothingProducts = [
    {
      "productId": 47,
      "name": "ENDEAVOUR WEAR Men's Track Pants",
      "longDescription": "Premium Stretchable Polyester Fabric – Lightweight, breathable, and flexible for all-day comfort and freedom of movement.\r\nDeep Side Cargo Pockets – Spacious, secure pockets for everyday essentials or workout gear.\r\nPerfect for Everyday & Active Use – Designed for casual wear, gym sessions, running, or travel.\r\nElasticated & Adjustable Ankle Cuffs – Provides a snug fit and shapes to your ankle for a clean, modern look.\r\nTailored Stitching – Neatly constructed for long-lasting wear and a sharp silhouette.\r\nFlexible Fit – Comfort waistband with drawstring for a personalized fit during any activity.",
      "shortDescription": "Cargo Pants|Cargo Jogger Stretchable Sports Gym Running Pants |Casual Loungewear",
      "price": 999.00,
      "discountPrice": 498.00,
      "stock": 566,
      "brand": "ENDEAVOUR",
      "category": "clothing",
      "imageUrl": "/ProductImages/1b9364bb-974d-41b7-a322-9226125947f0.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T14:08:51.404601",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 48,
      "name": "Boldfit Winter Cap for Men Winter Wear",
      "longDescription": "3-IN-1 WINTER HAT SCARF GLOVES SET. Keep your head, ears, face, neck and hands warm in winter! This set is perfect for freezing cold winter. All in classic black color, suits good with most colors of clothes.\r\nUNISEX DUAL-LAYERED BEANIE: Our beanie hats for men and women are lined with a super soft fleece that instantly locks in heat, whether you're out on a morning jog or walking a dog at night, is a great option for cold climates. Mens knit winter beanie hat can cover ears, aim to enjoy the windy weather with warm and soft hat without extra ear warmer.\r\nCLASSIC STYLISH KNITTED: Precise knitting mixed yarn fashion beanie and gloves, creating a nice and fashionable look design, matches with any wardrobe like cardigans, sweaters, tops or other formal and casual winter clothes.\r\nONE SIZE FITS ALL: We use stretchable materials so that the hat and gloves can adapt to various head shapes and hands size, whether small head or big head even basketball head. They are easy to wear or take off, combine plenty of stretch and a snug fit, are suitable for most women and men.\r\nWHEN TO WEAR. Throw this soft hat, scarf, gloves on for any chilly outdoor activity. Great for the playground, at a pumpkin patch, during Christmas season, in a stroller, at a parade, on a play date, at school or in the best spot. Also makes a great gift.",
      "shortDescription": "Women Woolen Cap for Men Beanie Cap for Men Winter Gloves for Men Winter Clothing Set for Women & Men. Mufflers for Men Neck Warmer Winter Clothes for Women",
      "price": 1599.00,
      "discountPrice": 789.00,
      "stock": 357,
      "brand": "Boldfit",
      "category": "clothing",
      "imageUrl": "/ProductImages/ee7a1e07-7fa4-4cda-af47-aa37c2e2185b.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T14:09:57.417584",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 49,
      "name": "Pashmoda Wool Men Jamawar Shawl",
      "longDescription": "SIZE: 40X80 Inches, 100x200 CM (Medium Size), COMPOSITION: Wool Blend.\r\nThis kashmiri jamawar shawl for men with luxe pashmina feel is exclusively designed for the royal gentleman, keeping in mind the rich and grandiose heritage of Mughal India. The shawl is best worn at formal evenings over a flamboyant coat, achkan or kurta, or at casual settings over more relaxed clothing.\r\nThese heritage ethnic shawls by Pashmoda reflect the meticulous work of kashmiri artisans and daily wage workers, while at the same time, helping you perfect those royal looks you have always craved. Style this stole over a dress jacket, sherwani, nehru coat, kurta, or your cardigan and be assured that your Pashmoda piece will turn heads wherever you go. This shawl is designed in medium mens size, which is better for styling with casual and ethnic menÕs clothing.",
      "shortDescription": "Authentic Kashmiri Luxury Pashmina Style Shawl, Stole",
      "price": 1569.00,
      "discountPrice": 986.00,
      "stock": 356,
      "brand": "Pashmoda",
      "category": "clothing",
      "imageUrl": "/ProductImages/a86d1624-564f-48f8-bc89-37753a417314.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T14:10:53.448716",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    },
    {
      "productId": 50,
      "name": "Googo Gaaga Boy's Cotton full Sleeves Printed Sweatshirt and Pant Set in Multi Color",
      "longDescription": "Googo Gaaga sweatshirt has a round neck and long sleeves. Soft fabric ensures optimum air circulation, Smooth and soft texture prevents causing any irritation to the skin. Tailored in the finest quality fabric for utmost comfort. Bottoms with an elasticated waist for a comfortable fit. The colorfast design avoids fading or bleeding of dyes. Googo Gaaga is one of the top kid's wear choices & the best brand you can trust with hundreds of styles. Fabric 90% Cotton + 10% Polyester. Boys clothing set, Item Included: 1 Sweatshirt 1 Pant, Type: Regular Fit, Occasion: Casual Wear, Gentle machine wash.",
      "shortDescription": "Fabric that is soft, smooth & skin friendly All season comfort Easy to wash and maintain Quality stitching that lasts long",
      "price": 1400.00,
      "discountPrice": 649.00,
      "stock": 785,
      "brand": "Googo Gaaga",
      "category": "clothing",
      "imageUrl": "/ProductImages/630a0ddd-c533-4726-9bdf-339d8507beef.jpg",
      "isActive": true,
      "createdAt": "2025-09-20T14:12:43.537083",
      "updatedAt": null,
      "averageRating": null,
      "ratingCount": null,
      "sellerName": "lucifer"
    }
  ]

  return (
    <div>
      <div className="bannerContainer">
        <BannerImgSlider slides={bannerImages} />
      </div>

      <div className="allCardsContainer">
        <FourProductCard title="New arrivals" products={electronicsProducts} linkText="Explore all" />
        <FourProductCard title="Best deals for you" products={shoeProducts} linkText="See more" />
        <FourProductCard title="Outfits suits you" products={clothingProducts} linkText="Explore all" />
      </div>
      <div className="cardsContainer">
        <CategoryCard title="Upto 75% off Headphones" imageUrl={headphoneImage} products={electronics} />
        <CategoryCard title="You might also like" imageUrl={sneakerImage} products={footWears} />
        <CategoryCard title="Huge discounts on smartphones" imageUrl={mobileImage} products={electronics} />
        <CategoryCard title="Dress-up the way you are" imageUrl={clothImage} products={clothing} />
      </div>
      <div className="productSliderContainer">
        <ProductSlider title="Walk with style 👠" products={footWears} />
      </div>
      <div className="productSliderContainer">
        <ProductSlider title="Make your life full of fun and futurestic 🎧" products={electronics} />
      </div>
      <div className="cardsContainer">
        <FourProductCard title="New arrivals" products={electronicsProducts} linkText="Explore all" />
        <FourProductCard title="Best deals for you" products={shoeProducts} linkText="See more" />
        <FourProductCard title="Outfits suits you" products={clothingProducts} linkText="Explore all" />
        
      </div>
      <div className="productSliderContainer">
        <ProductSlider title="Level up your style game 😎" products={clothing} />
      </div>
    </div>
  )
}

export default Home
