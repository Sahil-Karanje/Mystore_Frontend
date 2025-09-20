import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, imageUrl, products }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search_page", { state: { results: products } });
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <h3 className="category-title">{title}</h3>
      <img src={imageUrl} alt={title} className="category-image" />
      <p className="shop-now">Shop Now</p>
    </div>
  );
};

export default CategoryCard;
