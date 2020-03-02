function IndexPage(props) {
  return (
    <div>
      <nav className="py-1 flex items-center bg-purple-600 text-white">
        <button className="ml-4 p-2 text-xl opacity-65" type="button">☰</button>
        <h1 className="ml-4">
          <img className="" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
        </h1>
      </nav>
      <header className="pt-24 h-screen bg-purple-600 text-white">
        <h2 className="ml-4 font-semibold leading-10 text-3xl">Create Beautiful Dashboards</h2>
        <p className="ml-4 mt-5 font-light leading-relaxed text-lg overflow-visible">Get timely information about things that matter to you at a glance.</p>
        <a className="ml-4 mt-6 px-6 py-2 inline-block rounded-full bg-white text-purple-600" href="https://dashful.co/admin/dashboard/new">
          <span className="font-medium">BUILD DASHBOARD</span>
        </a>
        <p className="ml-12 mt-4 text-sm">No account required</p>
        <div className="mt-2 flex justify-center">
          <a href="https://demo.dashful.co/" target="_blank" className="w-9/10">
            <img src="https://dashful.co/assets/img/dashboard-hero.png"></img>
          </a>
        </div>
      </header>
      <main>
        <section className="pb-12">
          <h3 className="mx-8 my-12 text-center text-3xl text-teal-900 font-medium">Watch Dashful in action</h3>
          <iframe className="w-full" src="https://www.youtube.com/embed/D37RXZsdVm8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section className="pt-16 bg-gray-100">
          <h3 className="text-center text-3xl text-teal-900 font-medium">Widget</h3>
          <p className="mt-16 mx-4 text-center text-lg leading-relaxed text-gray-600">You can find several widgets with connections to web services like YouTube or MailChimp or get creative with custom ones.</p>
        </section>
      </main>
    </div>
  );
}

export default IndexPage;
