import { useState } from 'react';
import WidgetCard from '../components/widget-card';

function IndexPage(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-gray-900">
      <div className={`w-screen h-screen flex flex-row fixed z-40 ${menuOpen ? '' : 'hidden'}`}>
        <div className="bg-purple-600 w-5/6">abc</div>
        <button onClick={() => setMenuOpen(false)} className="w-1/6 bg-white opacity-95"></button>
      </div>
      <nav className="py-1 flex items-center bg-purple-600 text-white">
        <button onClick={() => setMenuOpen(true)} className="ml-4 sm:ml-8 p-2 text-xl opacity-65" type="button">☰</button>
        <h1 className="ml-4">
          <img className="ml-1" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
        </h1>
      </nav>
      <header className="pt-24 h-screen bg-purple-600 text-white">
        <h2 className="ml-4 sm:ml-10 sm:w-2/3 font-medium leading-10 sm:leading-tight text-4xl sm:text-4.5xl">Create Beautiful Dashboards</h2>
        <p className="ml-4 sm:ml-10 mt-5 w-2/3 sm:w-5/6 sm:text-lg font-thin leading-relaxed overflow-visible">Get timely information about things that matter to you at a glance.</p>
        <a className="ml-4 sm:ml-10 mt-6 pl-6 py-2 inline-block rounded-full bg-white text-purple-600" href="#">
          <span className="font-medium tracking-widest text-xs">BUILD DASHBOARD</span>
          <svg className="ml-4 mr-2 inline-block relative right-0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
            <title>ionicons-v5-a</title>
            <polyline className="stroke-current" points="262.62 336 342 256 262.62 176" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
            <line className="stroke-current" x1="330.97" y1="256" x2="170" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
            <path className="stroke-current" d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'42px'}}/>
          </svg>
        </a>
        <p className="ml-12 sm:ml-20 mt-4 text-sm">No account required</p>
        <div className="mt-2 flex justify-center">
          <a href="#" target="_blank" className="w-9/10">
            <img src="https://dashful.co/assets/img/dashboard-hero.png"></img>
          </a>
        </div>
      </header>
      <main>
        <section className="pb-12">
          <h2 className="mx-8 my-12 text-center text-3xl sm:text-4xl text-teal-900 font-medium">Watch Dashful in action</h2>
          <iframe className="w-full" src="https://www.youtube.com/embed/D37RXZsdVm8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section id="widgets" className="pt-16 bg-gray-100">
          <h2 className="text-center text-3xl sm:text-4xl text-teal-900 font-medium">Widget</h2>
          <p className="mx-4 mt-16 text-center text-lg leading-relaxed text-gray-600">You can find several widgets with connections to web services like YouTube or MailChimp or get creative with custom ones.</p>
          <nav className="mx-4 mt-16 flex flex-row flex-wrap justify-center">
            <button className="px-3 py-1 rounded whitespace-no-wrap uppercase text-gray-600 font-bold text-xs bg-gray-300">All</button>
            <button className="px-3 py-1 rounded whitespace-no-wrap uppercase text-gray-600 font-bold text-xs">Social Media</button>
            <button className="px-3 py-1 rounded whitespace-no-wrap uppercase text-gray-600 font-bold text-xs">Time Management</button>
            <button className="px-3 py-1 rounded whitespace-no-wrap uppercase text-gray-600 font-bold text-xs">Custom</button>
            <button className="px-3 py-1 rounded whitespace-no-wrap uppercase text-gray-600 font-bold text-xs">Other</button>
          </nav>
          <div className="mt-8 pb-16 mx-2 sm:mx-auto sm:max-w-2xl grid grid-cols-2 gap-2 sm:gap-4">
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/youtube.png"
              title="YouTube"
              description="Track the number of your subscribers or total views."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/twitter-followers.png"
              title="Twitter"
              description="Track the number of your followers."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/custom-api.png"
              title="Custom API"
              description="Hook up your custom API endpoint."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/intercom-total.png"
              title="Intercom"
              description="Track the total number of your users, tags and others."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/twitch-followers.png"
              title="Twitch"
              description="Track the number of your followers."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/cryptocurrency-price.png"
              title="Cryptocurrency Price"
              description="Track the price of any cryptocurrency."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/mailchimp.png"
              title="MailChimp"
              description="Track the number of subscribers of your list."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/intercom-conversations.png"
              title="Intercom"
              description="Track the number of your conversations."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/today.png"
              title="Today"
              description="Shows you current date, time and weather."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/countdown.png"
              title="Countdown"
              description="Track the time left to your vacation or that scary deadline."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/twitch-views.png"
              title="Twitch"
              description="Track the number of your total views."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/unsplash-followers.png"
              title="Unsplash Followers"
              description="Track the number of your followers or downloads."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/unsplash-downloads.png"
              title="Unsplash Downloads"
              description="Track the number of your followers or downloads."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/dribbble.png"
              title="Dribbble"
              description="Track the number of your followers."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/producthunt.png"
              title="Product Hunt"
              description="Track the number of your Product Hunt post upvotes."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/twitter-likes-retweets.png"
              title="Twitter"
              description="Track the number of likes and retweets of your recent tweet."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/year-progress.png"
              title="Year Progress"
              description="Track the progress of the current year."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/static-kpi.png"
              title="Static KPI"
              description="For KPIs without API."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/image.png"
              title="Image"
              description="A place to put your image."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/logo.png"
              title="Logo"
              description="A place to put your shiny logo."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/iframe.png"
              title="<iframe>"
              description="Embed a YouTube video or any other external resource."
            />
            <WidgetCard
              imgLink="https://dashful.co/assets/img/widgets/more-coming-soon.png"
              title="More widgets"
              description="More widgets coming soon."
            />
          </div>
        </section>
        <section id="features" className="py-16">
          <h2 className="text-center text-3xl sm:text-4xl text-teal-900 font-medium">Features</h2>
          <div className="mt-16 sm:mt-4 sm:flex sm:flex-row sm:items-center">
            <div className="sm:order-last sm:pr-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Public dashboards</h4>
              <p className="mx-4 mt-2 text-sm sm:text-base text-gray-600">All dashboards are public by default. Share them with your colleagues, friends or the whole internet.</p>
            </div>
            <div className="px-4 sm:pl-8">
              <img className="mt-12 sm:w-216 rounded" src="https://dashful.co/assets/img/features/public-dashboard.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:pl-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Private dashboards</h4>
              <p className="mx-4 sm:mr-0 mt-2 text-sm sm:text-base text-gray-600">You can make your dashboards private by protecting them with password.</p>
            </div>
            <div className="px-4 sm:pr-8">
              <img className="mt-12 sm:w-176 rounded" src="https://dashful.co/assets/img/features/private-dashboard.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:order-last sm:pr-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Dashboard Builder</h4>
              <p className="mx-4 mt-2 text-sm sm:text-base text-gray-600">Build and customize your dashboards with a simple to use builder. Change the number of rows & cols. Resize and arrange the widgets with drag and drop.</p>
            </div>
            <div className="px-4 sm:pl-8">
              <img className="mt-12 sm:w-216 rounded" src="https://dashful.co/assets/img/features/editor.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:pl-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Themes</h4>
              <p className="mx-4 sm:mr-0 mt-2 text-sm sm:text-base text-gray-600">You can choose from a number of dashboard themes.</p>
            </div>
            <div className="px-4 sm:pr-8">
              <img className="mt-12 sm:w-176 rounded" src="https://dashful.co/assets/img/features/themes.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:order-last sm:pr-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Custom dashboard backgrounds</h4>
              <p className="mx-4 mt-2 text-sm sm:text-base text-gray-600">Choose a custom background image for your dashboard.</p>
            </div>
            <div className="px-4 sm:pl-8">
              <img className="mt-12 sm:w-216 rounded" src="https://dashful.co/assets/img/features/custom-background.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:pl-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Responsive Design</h4>
              <p className="mx-4 sm:mr-0 mt-2 text-sm sm:text-base text-gray-600">Dashboards adapt to any window or screen sizes so they can look good on any device. Be it your computer, phone, tablet or a TV.</p>
            </div>
            <div className="px-4 sm:pr-8">
              <img className="mt-12 sm:w-176 rounded" src="https://dashful.co/assets/img/features/iphone.png"></img>
            </div>
          </div>
        </section>
        <section id="roadmap" className="px-4 py-16 bg-gray-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium">Roadmap</h2>
          <p className="mt-4 text-gray-700 sm:text-lg">Coming soon...</p>

          <div className="sm:px-8 sm:flex sm:flex-row sm:flex-wrap">
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Custom Domains</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Host your dashboards on custom domains.</p>
            </div>
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Email &amp; Slack Reports</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Get dashboard snapshots into your mailbox or Slack channel.</p>
            </div>
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Historical Data</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Check data from the past and see how you've grown.</p>
            </div>
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">API Access</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Get data presented in your dashboards in JSON format via API.</p>
            </div>
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">More Integrations</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Widgets with connections to web services like Google Analytics, Stripe, <s>Intercom</s> and others.</p>
            </div>
            <div className="pr-6 w-1/2">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">More Widgets</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">World time, <s>iframe</s>, <s>rich text notes</s>, ...</p>
            </div>
          </div>
        </section>
        <section className="px-4 pt-16 pb-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium">What customers say about us</h2>

          <div className="sm:flex sm:flex-row">
            <div className="sm:w-1/2 sm:pl-8 sm:pr-6">
              <p className="mt-24 sm:mt-20 px-4 text-lg sm:text-xl sm:font-light text-gray-600 leading-relaxed">&ldquo; Dashful has been an incredible addition to our toolset. By constantly using it to monitor our indicators it has allowed us to swiftly react to any sudden changes in all areas of our business. &rdquo;</p>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                - Fermin Rodriguez P. - <a href="#" target="new"><strong>lookea.me</strong></a>
              </p>
            </div>
            <div className="sm:w-1/2 sm:pl-6 sm:pr-8">
              <p className="mt-16 sm:mt-20 px-4 text-lg sm:text-xl sm:font-light text-gray-600 leading-relaxed">&ldquo; Dashful makes it very easy to build new dashboards for our projects. The product allows us to concentrate on what matters: extract meaningful insights for our team - and the product support is outstanding! &rdquo;</p>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                - Carlos Martinez - <a href="#" target="new"><strong>wizeline.com</strong></a>
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 bg-gray-100">
          <h2 className="text-3xl sm:text-4xl font-medium text-center">Try it yourself. No account required!</h2>
          <div className="mt-24 flex justify-center">
            <a className="mt-3 pl-6 py-2 inline-block rounded-full bg-purple-600 text-white uppercase" href="#">
              <span>Start Building Dashboard</span>
              <svg className="ml-4 mr-2 inline-block relative right-0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
                <title>ionicons-v5-a</title>
                <polyline className="stroke-current" points="262.62 336 342 256 262.62 176" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <line className="stroke-current" x1="330.97" y1="256" x2="170" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <path className="stroke-current" d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'42px'}}/>
              </svg>
            </a>
          </div>
        </section>
        <section className="px-4 py-20">
          <p className="text-gray-600 text-center sm:text-xl">Subscribe to newsletter and receive the latest news.</p>
          <div className="mt-4 mx-auto sm:mt-8 sm:w-128 flex flex-row relative">
            <input className="pl-4 py-2 w-full rounded-l-full border border-r-0 border-gray-200 sm:border-gray-400" placeholder="Email Address"></input>
            <button className="px-6 py-2 h-full absolute right-0 rounded-full bg-purple-600 align-middle text-white text-sm font-semibold tracking-wider uppercase leading-none">Subscribe</button>
          </div>
        </section>
        <section className="px-4 py-16 bg-gray-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium">Who made this?</h2>
          <p className="mt-24 px-4 text-lg text-gray-600 leading-relaxed">I'm a solo developer and I made this to "scratch my own itch". I've worked on this for months and months and I love ❤️ to see what you're creating with this platform. Thank you for your support!</p>
          <p className="mt-12 text-sm text-gray-600">
            Adam - <a href="#">Twitter</a>
          </p>
        </section>
        <footer className="px-4 pt-8 pb-12 bg-gray-900 text-white">
          <img className="" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
          <p className="mt-4 text-sm">A platform to create beautiful and customizable dashboards.</p>
          <hr className="mt-8 border-gray-700 opacity-75" />
          <div className="mt-8 w-2/3 grid grid-cols-2 row-gap-2 text-sm text-gray-400">
            <a href="#">Home</a>
            <a href="#widgets">Widgets</a>
            <a href="#">Live Demo</a>
            <a href="#features">Features</a>
            <a href="#">Changelog</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#">Terms</a>
            <a href="#">Credits</a>
            <a href="#">Privacy</a>
            <a href="#">Pricing</a>
          </div>
          <div className="mt-8">
            <h6>Get Started</h6>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">No account required unless you want to ​​​​​​​save your dashboard.</p>
            <a className="mt-3 pl-6 py-2 inline-block rounded-full bg-purple-600 text-white" href="#">
              <span className="font-medium tracking-widest text-xs">BUILD DASHBOARD</span>
              <svg className="ml-4 mr-2 inline-block relative right-0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
                <title>ionicons-v5-a</title>
                <polyline className="stroke-current" points="262.62 336 342 256 262.62 176" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <line className="stroke-current" x1="330.97" y1="256" x2="170" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <path className="stroke-current" d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'42px'}}/>
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default IndexPage;
