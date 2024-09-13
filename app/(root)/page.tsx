import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/totalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Yuben" };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transaction efficiently."
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={69000.56}
        />
      </div>
    </section>
  );
};

export default Home;
