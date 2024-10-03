function About() {
  return (
    <div id="webcrumbs">
      <div className="w-[600px] bg-neutral-900 flex justify-between items-center py-4 rounded-lg shadow-lg px-8">
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-neutral-500 text-2xl">home</span>
          <p className="text-neutral-500 mt-2">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-neutral-500 text-2xl">casino</span>
          <p className="text-neutral-500 mt-2">Casino</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-neutral-500 text-2xl">games</span>
          <p className="text-neutral-500 mt-2">Live Casino</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-yellow-400 text-2xl">chat</span>
          <p className="text-yellow-400 mt-2">Chat</p>
        </div>
      </div>
    </div>
  );
}

export default About;
