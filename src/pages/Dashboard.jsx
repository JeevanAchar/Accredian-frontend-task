import React from "react";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import ReferralBenefit from "../components/ReferralBenefit";
import Footer from "../components/Footer";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <Promo />
            <ReferralBenefit />
            <Footer />
        </div>
    );
}

export default Dashboard;
