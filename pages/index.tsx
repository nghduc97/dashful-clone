import { useState } from 'react';
import WidgetCard from '../components/widget-card';

function IndexPage(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-gray-900">
      <div className={`w-screen h-screen flex flex-row fixed z-40 ${menuOpen ? '' : 'hidden'}`}>
        <div className="bg-purple-600 w-76">
          <nav className="mt-8 ml-6 text-gray-200">
            <a href="#" className="px-4 py-3 block font-mono sm:text-lg font-bold tracking-wider">Home</a>
            <a href="#" className="px-4 py-3 block font-mono sm:text-lg tracking-wider">Widgets</a>
            <a href="#" className="px-4 py-3 block font-mono sm:text-lg tracking-wider">Features</a>
            <a href="#" className="px-4 py-3 block font-mono sm:text-lg tracking-wider">Pricing</a>
            <a href="#" className="px-4 py-3 block font-mono sm:text-lg tracking-wider">Live Demo</a>
          </nav>
          <hr className="mx-6 mt-4 border-gray-500 opacity-50" />
          <button className="ml-6 mt-6 px-6 py-2 bg-white rounded-full text-xs tracking-wider text-purple-700 uppercase">Sign In</button>
        </div>
        <button onClick={() => setMenuOpen(false)} className="flex-grow bg-white opacity-95"></button>
      </div>
      <nav className="py-1 lg:py-2 flex items-center lg:justify-between bg-purple-600 text-white">
        <button onClick={() => setMenuOpen(true)} className="ml-4 sm:ml-8 p-2 lg:hidden text-xl opacity-65" type="button">☰</button>
        <h1 className="ml-4 lg:ml-24">
          <img className="ml-1 lg:ml-0" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
        </h1>
        <nav className="hidden lg:flex text-gray-200">
          <a href="#" className="px-4 py-3 font-mono uppercase font-bold tracking-wider">Home</a>
          <a href="#" className="px-4 py-3 font-mono uppercase tracking-wider">Widgets</a>
          <a href="#" className="px-4 py-3 font-mono uppercase tracking-wider">Features</a>
          <a href="#" className="px-4 py-3 font-mono uppercase tracking-wider">Pricing</a>
          <a href="#" className="px-4 py-3 font-mono uppercase tracking-wider">Live Demo</a>
          <div className="ml-6 flex items-center">
            <button className="px-6 py-2 bg-white rounded-full text-xs tracking-wider text-purple-700 uppercase">Sign In</button>
          </div>
        </nav>
      </nav>
      <header className="pt-24 lg:pt-12 h-screen lg:h-screen-7/10 lg:flex lg:flex-row bg-purple-600 text-white">
        <div className="ml-4 sm:ml-10 lg:ml-24 lg:w-112 lg:flex lg:flex-col lg:justify-center">
          <div>
            <h2 className="sm:w-2/3 font-medium leading-10 sm:leading-tight text-4xl sm:text-4.5xl">Create Beautiful Dashboards</h2>
            <p className="mt-5 w-2/3 sm:w-5/6 sm:text-lg font-thin leading-relaxed overflow-visible">Get timely information about things that matter to you at a glance.</p>
            <a className="mt-6 pl-6 py-2 inline-block rounded-full bg-white text-purple-600" href="#">
              <span className="font-medium tracking-widest text-xs">BUILD DASHBOARD</span>
              <svg className="ml-4 mr-2 inline-block relative right-0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
                <title>ionicons-v5-a</title>
                <polyline className="stroke-current" points="262.62 336 342 256 262.62 176" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <line className="stroke-current" x1="330.97" y1="256" x2="170" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                <path className="stroke-current" d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'42px'}}/>
              </svg>
            </a>
            <p className="ml-2 sm:ml-6 mt-4 text-sm">No account required</p>
          </div>
        </div>
        <div className="mt-2 lg:pt-12 flex justify-center">
          <a href="#" target="_blank" className="w-9/10 lg:w-160">
            <img src="https://dashful.co/assets/img/dashboard-hero.png"></img>
          </a>
        </div>
      </header>
      <main>
        <section className="pb-12">
          <h2 className="mx-8 my-12 text-center text-3xl sm:text-4xl text-teal-900 font-medium">Watch Dashful in action</h2>
          <iframe className="mx-auto w-full max-w-6xl" src="https://www.youtube.com/embed/D37RXZsdVm8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          <div className="mt-8 pb-16 mx-2 sm:mx-auto sm:max-w-2xl lg:max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
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
              <img className="mt-12 sm:w-384 rounded" src="https://dashful.co/assets/img/features/editor.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:pl-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Themes</h4>
              <p className="mx-4 sm:mr-0 mt-2 text-sm sm:text-base text-gray-600">You can choose from a number of dashboard themes.</p>
            </div>
            <div className="px-4 sm:pr-8">
              <img className="mt-12 sm:w-128 rounded" src="https://dashful.co/assets/img/features/themes.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:order-last sm:pr-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Custom dashboard backgrounds</h4>
              <p className="mx-4 mt-2 text-sm sm:text-base text-gray-600">Choose a custom background image for your dashboard.</p>
            </div>
            <div className="px-4 sm:pl-8">
              <img className="mt-12 sm:w-144 rounded" src="https://dashful.co/assets/img/features/custom-background.png"></img>
            </div>
          </div>
          <div className="mt-32 sm:flex sm:flex-row sm:items-center">
            <div className="sm:pl-4">
              <h4 className="ml-4 font-medium text-2xl text-gray-700">Responsive Design</h4>
              <p className="mx-4 sm:mr-0 mt-2 text-sm sm:text-base text-gray-600">Dashboards adapt to any window or screen sizes so they can look good on any device. Be it your computer, phone, tablet or a TV.</p>
            </div>
            <div className="px-4 sm:pr-8">
              <img className="mt-12 sm:w-288 rounded" src="https://dashful.co/assets/img/features/iphone.png"></img>
            </div>
          </div>
        </section>
        <section id="roadmap" className="px-4 py-16 bg-gray-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium">Roadmap</h2>
          <p className="mt-4 text-gray-700 sm:text-lg">Coming soon...</p>

          <div className="sm:px-8 sm:flex sm:flex-row sm:flex-wrap">
            <div className="pr-6 w-1/2 lg:w-1/3">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Custom Domains</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Host your dashboards on custom domains.</p>
            </div>
            <div className="pr-6 w-1/2 lg:w-1/3">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Email &amp; Slack Reports</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Get dashboard snapshots into your mailbox or Slack channel.</p>
            </div>
            <div className="pr-6 w-1/2 lg:w-1/3">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">Historical Data</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Check data from the past and see how you've grown.</p>
            </div>
            <div className="pr-6 w-1/2 lg:w-1/3">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">API Access</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Get data presented in your dashboards in JSON format via API.</p>
            </div>
            <div className="pr-6 w-1/2 lg:w-1/3">
              <h5 className="mt-16 text-lg sm:text-xl font-semibold opacity-65 sm:opacity-75">More Integrations</h5>
              <p className="sm:mt-3 text-sm sm:text-base sm:opacity-50">Widgets with connections to web services like Google Analytics, Stripe, <s>Intercom</s> and others.</p>
            </div>
            <div className="pr-6 w-1/2 lg:w-1/3">
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
          <div className="lg:mx-auto lg:max-w-6xl lg:flex lg:flex-row lg:justify-between">
            <p className="text-gray-600 text-center sm:text-xl lg:font-light">Subscribe to newsletter and receive the latest news.</p>
            <div className="mt-4 mx-auto sm:mt-8 lg:mt-0 lg:mx-0 sm:w-128 lg:w-76 flex flex-row relative">
              <input className="pl-4 py-2 w-full rounded-l-full border border-r-0 border-gray-200 sm:border-gray-400" placeholder="Email Address"></input>
              <button className="px-6 py-2 h-full absolute -right-4 rounded-full bg-purple-600 align-middle text-white text-sm font-semibold tracking-wider uppercase leading-none">Subscribe</button>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-8 sm:pb-20 bg-gray-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-700">Who made this?</h2>
          <p className="mt-24 sm:mt-16 px-4 text-lg sm:text-xl sm:font-light text-gray-600 leading-relaxed">I'm a solo developer and I made this to "scratch my own itch". I've worked on this for months and months and I love ❤️ to see what you're creating with this platform. Thank you for your support!</p>
          <p className="mt-12 text-sm sm:text-base text-gray-600">
            Adam - <a href="#">Twitter</a>
          </p>
        </section>
        <footer className="px-4 pt-8 pb-12 sm:px-10 sm:pt-12 lg:px-0 lg:pb-24 bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl lg:flex lg:flex-row">
            <div>
              <img className="" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
              <p className="mt-4 text-sm sm:text-base sm:text-gray-400">A platform to create beautiful and customizable dashboards.</p>
              <div className="mt-4 flex">
                <a href="#" className="p-2 block bg-gray-800 rounded">
                  <svg className="text-gray-500 fill-current" xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/></svg>
                </a>
                <a href="#" className="ml-2 p-2 block bg-gray-800 rounded">
                  <svg className="text-gray-500 fill-current" xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z'/></svg>
                </a>
              </div>
            </div>
            <hr className="mt-8 lg:hidden border-gray-700 opacity-75" />
            <div className="mt-8 lg:mt-12 w-2/3 lg:w-1/3 grid grid-cols-2 row-gap-2 text-sm sm:text-base text-gray-400">
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
            <div className="mt-8 lg:mt-12">
              <h6 className="sm:text-lg">Get Started</h6>
              <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">No account required unless you want to ​​​​​​​save your dashboard.</p>
              <a className="mt-3 sm:mt-4 pl-6 py-2 inline-block rounded-full bg-purple-600 text-white" href="#">
                <span className="font-medium tracking-widest text-xs">BUILD DASHBOARD</span>
                <svg className="ml-4 mr-2 inline-block relative right-0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
                  <title>ionicons-v5-a</title>
                  <polyline className="stroke-current" points="262.62 336 342 256 262.62 176" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                  <line className="stroke-current" x1="330.97" y1="256" x2="170" y2="256" style={{fill:'none',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'48px'}}/>
                  <path className="stroke-current" d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style={{fill:'none',strokeMiterlimit:10,strokeWidth:'42px'}}/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default IndexPage;
