const Premium = () => {
  return (
    <div className="w-full flex flex-col items-center p-10 gap-10 bg-base-200 min-h-screen mt-5">
      <h1 className="text-4xl font-bold mb-4">Choose Your Premium Plan</h1>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center gap-6">
        {/* Silver */}
        <div className="card bg-base-300 rounded-2xl flex flex-col gap-4 flex-1 shadow-xl p-6 min-h-72">
          <h2 className="text-2xl font-semibold">Silver Membership</h2>
          <ul className="text-sm space-y-1">
            <li>- Chat with other people</li>
            <li>- 100 connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 3 months</li>
          </ul>
          <button className="btn btn-primary w-full mt-auto">Buy Silver</button>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        {/* Gold */}
        <div className="card bg-base-300 rounded-2xl flex flex-col gap-4 flex-1 shadow-xl p-6 min-h-72">
          <h2 className="text-2xl font-semibold">Gold Membership</h2>
          <ul className="text-sm space-y-1">
            <li>- Chat with other people</li>
            <li>- Infinite connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 6 months</li>
          </ul>
          <button className="btn btn-accent w-full mt-auto">Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
