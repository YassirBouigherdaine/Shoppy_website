import NavBar from "./NavBar"
import Announcement from "./Annoncement";
import Carousel from "./Carousel";
import Newsletter from "../Newsletter/Newsletter";
import Categories from "../categories/Categories";
import Footer from "./Footer";
import Reviews from "../reviews/Reviews";







const HomeScreen = () => {

    return (
        <>
            <div>
                <Announcement/>
                <NavBar />
                <Carousel />
                <Newsletter />
                <Categories />
                <Reviews/>
                <Footer/>
            </div>
        </>
    );

}

export default HomeScreen;