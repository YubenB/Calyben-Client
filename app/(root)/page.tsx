import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/totalBalanceBox";
import RightSidebar from "@/components/RIghtSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Yuben",
    lastName: "Cika",
    email: "Yubencika@mail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 634534 }, { currentBalance: 634534 }]}
      />
    </section>
  );
};

export default Home;
