function IndexPage(props) {
  return (
    <div>
      <nav className="flex items-center bg-purple-600 text-white">
        <button className="ml-4 p-2 text-xl opacity-65" type="button">☰</button>
        <h1 className="ml-4">
          <img className="" src="https://dashful.co/assets/img/logo.png" alt="logo" width="100" height="30"></img>
        </h1>
      </nav>
      <header className="h-screen flex flex-col bg-purple-600 text-white">
        <h2 className="font-semibold leading-light text-4xl">Create Beautiful Dashboards</h2>
        <p className="font-light leading-relaxed text-lg">Get timely information about things that matter to you at a glance.</p>
        <a className="px-6 py-2 rounded-full bg-white text-purple-600" href="https://dashful.co/admin/dashboard/new">
          <span>BUILD DASHBOARD</span>
        </a>
      </header>
    </div>
  );
}

export default IndexPage;
