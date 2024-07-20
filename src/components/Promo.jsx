import React from "react";
import Anniversary from "../asset/Anniversary.png";
import Button from "./ui/button";

function Promo() {
    return (
        <div className="w-full 2xl:max-w-7xl mx-auto">
            <div className="max-w-3xl bg-blue-400 mx-auto px-6 py-3 font-medium rounded-3xl mt-10" style={{ background: "#E6F0FD" }}>
                <ul className="flex text-center justify-between">
                    <li>Refer</li>
                    <li>Benefit</li>
                    <li>FAQs</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-400 my-10 rounded-3xl px-6 py-3" style={{ background: "#EEF5FF" }}>
                <div className="max-w-[40%]">
                    <div>
                        <p className="text-[4rem] font-bold my-4">
                            Let&apos;s Learn & Earn
                        </p>
                        <p className="text-[2.5rem] my-4">
                            Get a chance to win
                            up-to <span className="text-blue-500 font-bold">Rs. 15,000</span>
                        </p>
                    </div>
                    <Button>
                        Refer now
                    </Button>
                </div>
                <img src={Anniversary} alt="promo" className="max-w-[814px] max-h-[650px] object-cover" />
            </div>
        </div>
    );
}

export default Promo;
