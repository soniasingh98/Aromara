import Image from "next/image";
import "../styles/HeroSection.css";
import illustrationImg from "../images/illustration2.png";
import coffee1 from "../images/coffee1.jpg";
import c3 from "../images/c4.jpg";
import c4 from "../images/c7.jpg";
import cd1 from "../images/cd1.jpg";
import cd2 from "../images/cd5.jpg";
import cd3 from "../images/cd3.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="section1">
        <div className="section1-outer">
          <div className="section1-inner2">
            <Image
              className="illustration-img"
              src={coffee1}
              alt="illustration"
            />
          </div>

          <div className="section1-inner1">
            <h1>Where Every Sip Unfolds a New Story</h1>
            <h3>
              Aromara Coffee offers a premium blend that combines rich, aromatic
              flavors with the finest beans from around the world.
            </h3>
            <Link href="/explore" className="section1-link">
              Explore→
            </Link>
          </div>
          <div className="section1-inner3">
            <Image
              className="illustration-img"
              src={illustrationImg}
              alt="illustration"
            />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section2-outer">
          <div className="section2-inner1">
            <h1 className="section2-firsth1">Top-Selling Coffees -</h1>
            <h1>
              <span className="section2-span">The Best</span> Brews of the Year
            </h1>
          </div>
          <div className="section2-inner2">
            <div className="section2-imgdiv">
              <Image src={c4} alt="coffee1" className="section2-img" />
              <p>Cold Brew</p>
            </div>
            <div className="section2-imgdiv img2">
              <Image src={c3} alt="coffee1" className="section2-img" />
              <p>Macchiato</p>
            </div>
            <div className="section2-imgdiv img3">
              <Image src={coffee1} alt="coffee1" className="section2-img" />
              <p>Cortado</p>
            </div>
          </div>
          <div className="section2-inner3">
            <p className="section2-para1">
              Discover the top coffee blends of the year, from timeless classics
              to the latest trendy roasts.
            </p>
            <p className="section2-para2">
              {" "}
              Find your perfect brew and savor the rich, aromatic flavors that
              make each cup unforgettable.
            </p>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="section3-outer">
          <h1>You&apos;re Choosing Right—We Promise Quality.</h1>
          <div className="section3-inner">
            <div className="section3-inner1">
              <div className="content-div first">
                3 out of 4 coffee drinkers trust our quality
              </div>
              <Image src={cd1} alt="coffee1" className="section3-img1"></Image>
            </div>
            <div className="section3-inner2">
              <Image src={cd2} alt="coffee1" className="section3-img2"></Image>
            </div>
            <div className="section3-inner3">
              <Image src={cd3} alt="coffee1" className="section3-img3"></Image>
              <div className="content-div second">
                Honest ingredients, unparalleled taste
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>Aromara &copy; 2024 All right reserved.</footer>
    </>
  );
};

export default HeroSection;
