import "./SearchPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const products = location.state?.results || [];

    const goToProduct = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="searchPage_container">
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="searchPage_grid">
                    {products.map((product) => (
                        <div key={product.productId} className="searchPage_card" onClick={()=>{goToProduct(product.productId)}}>
                            <img
                                src={"https://localhost:7007" + product.imageUrl}
                                alt={product.name}
                                className="searchPage_img"
                            />
                            <h3>{product.name}</h3>
                            <p>₹{product.price}</p>
                            <p className="searchPage_brand">{product.brand}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
