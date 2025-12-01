import axios from "axios";
import { BASE_URL } from "../constants";
import { useEffect, useState } from "react";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };
  useEffect(() => {
    verifyPremiumUser();
  }, []);
  
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    // It sholud open the razorpay Dialog Box
    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return isUserPremium ? (
    "You're are already a premium user"
  ) : (
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
          <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-primary w-full mt-auto"
          >
            Buy Silver
          </button>
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
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-accent w-full mt-auto"
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
