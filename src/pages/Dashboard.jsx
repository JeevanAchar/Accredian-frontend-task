import React from "react";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import ReferralBenefit from "../components/ReferralBenefit";
// import ReferralForm from "../components/ReferralForm";
import ReferEarnPage from "../components/ReferEarnPage";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <Promo />
            <ReferralBenefit />
            {/* <ReferralForm /> */}
            <ReferEarnPage />
        </div>
    );
}

export default Dashboard;
