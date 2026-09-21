import Logo from "../assets/images/logo.svg";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0 md:space-x-20 md:px-10">
        {/* Logo */}
        <img src={Logo} alt="logo" />

        {/* Menus Container */}
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
          {/* Menu 1 */}
          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Features</div>

            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Link shortening
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Branded links
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Analytics
              </a>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">
              Resources
            </div>

            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Blog
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Developers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Support
              </a>
            </div>
          </div>

          {/* Menu 3 */}
          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Company</div>

            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                About
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Our Team
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Careers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Container */}
        <div className="flex space-x-6">
          <a href="#">
            <img src={FacebookIcon} alt="Facebook" className="ficon" />
          </a>

          <a href="#">
            <img src={TwitterIcon} alt="Twitter" className="ficon" />
          </a>

          <a href="#">
            <img src={PinterestIcon} alt="Pinterest" className="ficon" />
          </a>

          <a href="#">
            <img src={InstagramIcon} alt="Instagram" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
