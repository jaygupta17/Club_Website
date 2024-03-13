import React from 'react';
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import AchievementsCards from "../Components/AchievementsCards";
const Achievements = ()=>{
    return(
       <>
       <NavBar/>
       <AchievementsCards />
       <Footer/>
       </>
    );
}

export default Achievements;