import "./Home.scss";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";

const Home = () => {
    return(
         <div >
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products />
                    </div>
            </div>
            
        </div>
    );
             
};

export default Home;
