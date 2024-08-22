import React from "react";
import '../assets/borat.css';

const Borat = () => {
    return (
        <div className="borat-background">


            <audio autoPlay>
                <source src="../assets/audio/VeryNice.mp4" type="audio/mpeg" />
            </audio>
            {/* Other content here */}
        </div>
    );
};

export default Borat;