import ReactDOM from 'react-dom';
import './App.css';
import Logo from './assets/images/logo.svg';
import HamMenu from './assets/images/icon-hamburger.svg';
import CloseMenu from './assets/images/icon-close.svg';
import Footerlogo from './assets/images/logo-footer.svg';
import DesktopIntro from './assets/images/bg-intro-desktop.svg';
import MobileIntro from './assets/images/bg-intro-mobile.svg';
import MockMobile from './assets/images/image-mockups.png';
import Banking from './assets/images/icon-online.svg';
import Budgeting from './assets/images/icon-budgeting.svg';
import Onboarding from './assets/images/icon-onboarding.svg';
import Openapi from './assets/images/icon-api.svg';
import Currency from './assets/images/image-currency.jpg';
import Restaurant from './assets/images/image-restaurant.jpg';
import Plane from './assets/images/image-plane.jpg';
import Confetti from './assets/images/image-confetti.jpg';

function App() {
  function openNav(e) {
    let sidemenu = document.getElementById('sidemenu');
    ReactDOM.findDOMNode(sidemenu).style.display = 'block';
    let main = document.getElementById('main');
    // ReactDOM.findDOMNode(main).style.opacity = '0.9';
    let mock = document.getElementById('mockMobile');
    ReactDOM.findDOMNode(mock).style.display = 'none';
    ReactDOM.findDOMNode(main).style.filter = 'grayscale(80%)';
  }
  function closeNav(e) {
    let mock = document.getElementById('mockMobile');
    ReactDOM.findDOMNode(mock).style.display = 'block';
    let main = document.getElementById('main');
    ReactDOM.findDOMNode(main).style.filter = '';
    let sidemenu = document.getElementById('sidemenu');
    ReactDOM.findDOMNode(sidemenu).style.display = 'none';
  }

  return (
    <div id="main" className="w-full mx-auto min-w-[400px]">
      <div className="w-full sticky top-0 z-50 bg-neutral-White shadow-sm">
        <div className="mx-auto container max-xl:max-w-4xl">
          <nav className="flex justify-between items-center py-4 px-2 z-10 max-md:px-8 max-md:py-6 transition-all ease-linear">
            <picture className="w-1/3">
              <img src={Logo} alt="Logo" />
            </picture>

            <div
              id="sidemenu"
              className="w-9/12 hidden bg-neutral-White text-primary-DarkBlue font-normal text-xl text-center absolute right-12 top-24 transition-all ease-in shadow-2xl py-8 rounded-xl"
            >
              <div className="flex flex-col ">
                <img
                  className="w-5 self-end mr-4 transition-all ease-in-out"
                  onClick={closeNav}
                  src={CloseMenu}
                  alt="close menu"
                />

                <ul className="w-full flex flex-col justify-around items-center mx-auto h-48 transition-all ease-in-out duration-75">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Contact</li>
                  <li className="cursor-pointer">Blog</li>
                  <li className="cursor-pointer">Careers</li>
                </ul>
              </div>
            </div>

            <ul className="w-1/3 max-md:w-1/2 flex justify-evenly items-center text-sm max-sm:hidden">
              <li className="max-md:mx-2">Home</li>
              <li className="max-md:mx-2">About</li>
              <li className="max-md:mx-2">Contact</li>
              <li className="max-md:mx-2">Blog</li>
              <li className="max-md:mx-2">Careers</li>
            </ul>

            <div className="flex justify-end w-1/3 mx-auto">
              <button
                className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-8 py-3 text-center max-md:hidden"
                type="submit"
              >
                Request Invite
              </button>
            </div>
            <picture className="hidden max-sm:block">
              <img onClick={openNav} src={HamMenu} alt="hamburger menu" />
            </picture>
          </nav>
        </div>
      </div>

      <header className="max-lg:flex-col max-lg:items-center max-lg:text-center w-full flex justify-between items-center bg-neutral-VeryLightGray max-lg:pb-12">
        <div className="w-full my-auto mx-auto flex max-lg:flex-col-reverse justify-between items-center">
          <div className="max-lg:w-10/12 max-lg:mx-auto flex flex-col justify-evenly items-start max-lg:items-center self-start max-lg:self-center max-lg:mt-0 max-lg:pb-12 my-auto pl-20 max-lg:pl-0 pb-20 max-md:-mt-12">
            <h1 className="text-5xl text-primary-DarkBlue tracking-wide pr-8 max-lg:pr-0">
              Next generation digital banking
            </h1>
            <p className="py-8 leading-relaxed max-md:px-4">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button
              className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-8 py-3 text-center"
              type="submit"
            >
              Request Invite
            </button>
          </div>

          <div className="w-full relative overflow-hidden max-lg:hidden transition-all ease-in-out pb-60">
            <img
              className="max-w-4xl min-h-[800px] relative my-auto -mt-48 ml-20 bg-cover bg-no-repeat max-xl:scale-120 aspect-auto max-xl:-mt-48 max-xl:ml-0"
              src={DesktopIntro}
              alt="intro"
            />
            <img
              id="mock"
              className="absolute -right-32 -top-32 max-xl:scale-120"
              src={MockMobile}
              alt="mockup mobile"
            />
          </div>
          <div className="w-full relative overflow-hidden hidden max-lg:block">
            <img
              className="w-full max-h-[480px] relative bg-center bg-no-repeat bg-cover"
              src={MobileIntro}
              alt="Intro Mobile"
            />
            <img
              id="mockMobile"
              className="max-h-[80vh] bg-cover absolute right-0 -top-[11rem] mx-auto max-lg:left-0 max-lg:scale-120"
              src={MockMobile}
              alt="mockup mobile"
            />
          </div>
        </div>
      </header>
      <div className="w-full bg-neutral-LightGrayishBlue -mt-52 py-32 max-lg:pt-20 max-lg:py-0 max-lg:pb-10 max-lg:mt-0 max-lg:text-center">
        <div className="mx-auto container max-xl:max-w-4xl">
          <div className="flex flex-col justify-evenly">
            <div className="w-1/2 max-lg:w-3/4 max-lg:mx-auto">
              <h2 className="text-primary-DarkBlue text-3xl max-lg:text-4xl max-lg:pb-2">
                Why choose Easybank?
              </h2>
              <p className="leading-relaxed py-4">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="flex justify-around items-center pt-12 max-lg:flex-col">
              <div className="flex flex-col justify-between items-start max-lg:items-center pb-10">
                <img
                  className="w-10 max-lg:w-20"
                  src={Banking}
                  alt="online banking"
                />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Online Banking
                </h4>
                <p className="text-md max-lg:text-lg w-10/12 leading-normal">
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-lg:items-center pb-10">
                <img
                  className="w-10 max-lg:w-20"
                  src={Budgeting}
                  alt="online banking"
                />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Simple Budgeting
                </h4>
                <p className="text-md max-lg:text-lg w-10/12 leading-normal">
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-lg:items-center pb-10">
                <img
                  className="w-10 max-lg:w-20"
                  src={Onboarding}
                  alt="online banking"
                />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Fast Onboarding
                </h4>
                <p className="text-md max-lg:text-lg w-10/12 leading-normal">
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-lg:items-center pb-10">
                <img
                  className="w-10 max-lg:w-20"
                  src={Openapi}
                  alt="online banking"
                />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Open API
                </h4>
                <p className="text-md max-lg:text-lg w-10/12 leading-normal">
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-VeryLightGray">
        <div className="mx-auto container py-20 max-md:py-24 max-xl:max-w-4xl">
          <div className="flex flex-col items-start max-lg:items-center">
            <h2 className="text-primary-DarkBlue text-3xl">Latest Articles</h2>
            <div className="w-full flex max-md:flex-col justify-between items-center pt-12 max-md:flex-wrap">
              <div className="w-72 max-lg:w-60 max-md:w-8/12 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-md max-md:pb-8 max-md:mb-8 max-xl:mr-4">
                <img className="rounded-t-md" src={Currency} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Claire Robinson</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Receive money in any currency with no fees
                  </h6>
                  <p className="text-xxs">
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
              <div className="w-72 max-lg:w-60 max-md:w-8/12 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-md max-md:pb-8 max-md:mb-8 max-xl:mr-4">
                <img className="rounded-t-md" src={Restaurant} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Wilson Hutton</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Treat yourself without worrying about money
                  </h6>
                  <p className="text-xxs">
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </div>
              </div>
              <div className="w-72 max-lg:w-60 max-md:w-8/12 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-md max-md:pb-8 max-md:mb-8 max-xl:mr-4">
                <img className="rounded-t-md" src={Plane} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Wilson Hutton</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Take your Easybank card wherever you go
                  </h6>
                  <p className="text-xxs">
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </div>
              </div>
              <div className="w-72 max-lg:w-60 max-md:w-8/12 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-md max-md:pb-8 max-md:mb-8 max-xl:mr-4">
                <img className="rounded-t-md" src={Confetti} alt="currency" />
                <div className="pr-3 pl-4">
                  <p className="pt-4 text-xxs">By Claire Robinson</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Our invite-only Beta accounts are now live!
                  </h6>
                  <p className="text-xxs">
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-primary-DarkBlue py-20 px-8">
        <div className="mx-auto container flex max-md:flex-col justify-between items-center max-xl:max-w-4xl">
          <div className="flex flex-col justify-between items-start h-20 max-md:h-28 max-md:items-center max-md:pb-5">
            <img src={Footerlogo} alt="footer logo" />
            <div className="flex justify-between items-center w-36 max-md:w-52">
              <i className="text-neutral-White cursor-pointer text-xl max-md:text-3xl fa-brands fa-square-facebook"></i>
              <i className="text-neutral-White cursor-pointer text-xl max-md:text-3xl fa-brands fa-square-youtube"></i>
              <i className="text-neutral-White cursor-pointer text-xl max-md:text-3xl fa-brands fa-twitter"></i>
              <i className="text-neutral-White cursor-pointer text-xl max-md:text-3xl fa-brands fa-pinterest"></i>
              <i className="text-neutral-White cursor-pointer text-xl max-md:text-3xl fa-brands fa-instagram"></i>
            </div>
          </div>
          <ul className="flex flex-col justify-evenly items-start max-md:items-center text-neutral-LightGrayishBlue opacity-90 h-28 max-md:h-32 max-md:py-4 max-md:justify-between">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className="flex flex-col justify-evenly items-start max-md:items-center text-neutral-LightGrayishBlue opacity-90 h-28 max-md:h-32 max-md:pb-4 max-md:justify-between">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="flex flex-col items-end max-md:items-center justify-between h-20 max-md:pt-4">
            <button
              className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-8 py-3 text-center"
              type="submit"
            >
              Request Invite
            </button>
            <p className="text-xxs font-thin max-md:pt-6 max-md:text-md pt-6">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
