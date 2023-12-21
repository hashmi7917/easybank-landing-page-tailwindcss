import './App.css';
import Logo from './assets/images/logo.svg';
import HamMenu from './assets/images/icon-hamburger.svg';
import Footerlogo from './assets/images/logo-footer.svg';
import BgDesktop from './assets/images/bg-intro-desktop.svg';
import BgMobile from './assets/images/bg-intro-mobile.svg';
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
  return (
    <div className="w-full mx-auto">
      <div className="w-full sticky top-0 z-50 bg-neutral-White shadow-sm">
        <div className="mx-auto max-w-6xl">
          <nav className="flex justify-between items-center py-4 px-2 z-10 max-sm:px-4">
            <picture className="w-1/3">
              <img src={Logo} alt="Logo" />
            </picture>

            <ul className="w-1/3 flex justify-evenly items-center text-sm max-sm:hidden">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <div className="flex justify-end w-1/3 mx-auto">
              <button
                onClick={() => animationRef.current.restart()}
                className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center max-sm:hidden"
                type="submit"
              >
                Request Invite
              </button>
            </div>
            <picture className="hidden max-sm:block">
              <img src={HamMenu} alt="hamburger menu" />
            </picture>
          </nav>
        </div>
      </div>

      <header className="max-sm:flex-col max-sm:items-center max-sm:text-center w-full flex justify-between items-center bg-neutral-VeryLightGray">
        <div className="w-full flex max-sm:flex-col-reverse justify-between items-center">
          <div className="w-6/12 max-sm:w-10/12 max-sm:mx-auto flex flex-col justify-evenly items-start max-sm:items-center ml-36 mt-40 self-start max-sm:self-center max-sm:mt-0">
            <h1 className="text-5xl text-primary-DarkBlue tracking-wide pr-8 max-sm:pr-0">
              Next generation digital banking
            </h1>
            <p className="py-8 leading-relaxed">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button
              className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Request Invite
            </button>
          </div>
          <div
            className="w-full relative overflow-hidden max-sm:hidden"
            style={{
              minHeight: '800px',
              backgroundImage: `url(${BgDesktop})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionX: '80px',
              backgroundPositionY: '-200px',
            }}
          >
            <img
              id="mock"
              className="absolute -right-32 -top-32"
              src={MockMobile}
              alt="mockup mobile"
            />
          </div>
          <div
            className="w-full relative overflow-hidden hidden max-sm:block"
            style={{
              minHeight: '600px',
              backgroundImage: `url(${BgMobile})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <img
              id="mock"
              className="absolute -right-32 -top-32"
              src={MockMobile}
              alt="mockup mobile"
            />
          </div>
        </div>
      </header>
      <div className="w-full bg-neutral-LightGrayishBlue -mt-52 py-32 max-sm:mt-0 max-sm:text-center">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-evenly">
            <div className="w-1/2 max-sm:w-3/4 max-sm:mx-auto">
              <h2 className="text-primary-DarkBlue text-3xl">
                Why choose Easybank?
              </h2>
              <p className="leading-relaxed py-4">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="flex justify-around items-center pt-12 max-sm:flex-col">
              <div className="flex flex-col justify-between items-start max-sm:items-center">
                <img className="w-10" src={Banking} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Online Banking
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-sm:items-center">
                <img className="w-10" src={Budgeting} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Simple Budgeting
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-sm:items-center">
                <img className="w-10" src={Onboarding} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Fast Onboarding
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start max-sm:items-center">
                <img className="w-10" src={Openapi} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Open API
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-VeryLightGray">
        <div className="mx-auto max-w-6xl py-20">
          <div className="flex flex-col items-start">
            <h2 className="text-primary-DarkBlue text-3xl">Latest Articles</h2>
            <div className="w-full flex justify-between items-center pt-12">
              <div className="w-64 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-sm">
                <img className="w-full" src={Currency} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Claire Robinson</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Receive money in any currency with no fees
                  </h6>
                  <p className="text-sm">
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
              <div className="w-64 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-sm">
                <img className="w-full" src={Restaurant} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Wilson Hutton</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Treat yourself without worrying about money
                  </h6>
                  <p className="text-sm">
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </div>
              </div>
              <div className="w-64 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-sm">
                <img className="w-full" src={Plane} alt="currency" />
                <div className="pr-3 pl-5">
                  <p className="pt-4 text-xxs">By Wilson Hutton</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Take your Easybank card wherever you go
                  </h6>
                  <p className="text-sm">
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </div>
              </div>
              <div className="w-64 flex flex-col justify-evenly items-start shadow-md bg-neutral-White pb-5 rounded-sm">
                <img className="w-full" src={Confetti} alt="currency" />
                <div className="pr-3 pl-4">
                  <p className="pt-4 text-xxs">By Claire Robinson</p>
                  <h6 className="text-primary-DarkBlue py-2 pr-4">
                    Our invite-only Beta accounts are now live!
                  </h6>
                  <p className="text-sm">
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
      <footer className="bg-primary-DarkBlue py-20">
        <div className="mx-auto max-w-6xl flex justify-between items-center">
          <div className="flex flex-col justify-between items-start h-20">
            <img src={Footerlogo} alt="footer logo" />
            <div className="flex justify-between items-center w-36">
              <i className="text-neutral-White cursor-pointer text-xl fa-brands fa-square-facebook"></i>
              <i className="text-neutral-White cursor-pointer text-xl fa-brands fa-instagram"></i>
              <i className="text-neutral-White cursor-pointer text-xl fa-brands fa-twitter"></i>
              <i className="text-neutral-White cursor-pointer text-xl fa-brands fa-pinterest"></i>
            </div>
          </div>
          <ul className="flex flex-col justify-evenly items-start text-neutral-LightGrayishBlue opacity-80 h-28">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className="flex flex-col justify-evenly items-start text-neutral-LightGrayishBlue opacity-80 h-28">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="flex flex-col items-end justify-between h-20">
            <button
              className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Request Invite
            </button>
            <p className="text-xxs font-thin">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
