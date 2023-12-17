import './App.css';
import Logo from './assets/images/logo.svg';
import BgDesktop from './assets/images/bg-intro-desktop.svg';
import BgMobile from './assets/images/bg-intro-mobile.svg';
import MockMobile from './assets/images/image-mockups.png';
import Banking from './assets/images/icon-online.svg';
import Budgeting from './assets/images/icon-budgeting.svg';
import Onboarding from './assets/images/icon-onboarding.svg';
import Openapi from './assets/images/icon-api.svg';

function App() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 bg-neutral-White shadow-sm">
        <div className="mx-auto max-w-6xl">
          <nav className="flex justify-between items-center py-4 px-2 z-10">
            <picture className="w-1/3">
              <img src={Logo} alt="Logo" />
            </picture>
            <ul className="w-1/3 flex justify-evenly items-center text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <div className="flex justify-end w-1/3 mx-auto">
              <button
                className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Request Invite
              </button>
            </div>
          </nav>
        </div>
      </div>

      <header className="w-full flex justify-between items-center bg-neutral-VeryLightGray">
        <div className="w-full flex justify-between items-center">
          <div className="w-6/12 flex flex-col justify-evenly items-start ml-36 mt-40 self-start">
            <h1 className="text-5xl text-primary-DarkBlue tracking-wide pr-8">
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
            className="w-full relative overflow-hidden"
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
              className="absolute -right-32 -top-32"
              src={MockMobile}
              alt=""
            />
          </div>
        </div>
      </header>
      <div className="w-full bg-neutral-LightGrayishBlue -mt-52 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-evenly">
            <div className="w-1/2">
              <h2 className="text-primary-DarkBlue text-2xl">
                Why choose Easybank?
              </h2>
              <p className="leading-relaxed py-4">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="flex justify-around items-center pt-10">
              <div className="flex flex-col justify-between items-start">
                <img className="w-10" src={Banking} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Online Banking
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <img className="w-10" src={Budgeting} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Simple Budgeting
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <img className="w-10" src={Onboarding} alt="online banking" />
                <h4 className="text-primary-DarkBlue text-xl pt-6 pb-5">
                  Fast Onboarding
                </h4>
                <p className="text-sm w-10/12 leading-normal">
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
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
    </div>
  );
}

export default App;
