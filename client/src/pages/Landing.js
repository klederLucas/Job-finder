import main from '../assets/images/main.svg';
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby gentrify vaporware neutra grailed typewriter,
                        air plant readymade tumeric irony hashtag.
                        Shaman quinoa post-ironic, helvetica forage paleo plaid mlkshk
                        kale chips slow-carb polaroid blackbird spyplane everyday carry.
                    </p>
                    <Link to="/register" className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt='Job Hunt' className='img main-img'/>

            </div>
        </Wrapper>
    );
};

export default Landing;
