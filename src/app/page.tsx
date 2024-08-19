import Image from "next/image";
import Features from '../Components/Features';
import Footer from '../Components/Partials/Footer';
import '../Assets/scss/Home.scss';
import Slider from '../Components/Slider';


export default function Home() {
  return (
    <div className='home'>
        <Features />
        <h2 className="recommend">Recommended for you</h2>
        <Slider />

        <Footer />
    </div>
  );
}
