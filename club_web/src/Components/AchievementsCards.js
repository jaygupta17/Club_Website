import React from 'react';
import Style from "../Stylesheets/AchievementsCards.module.css";
const AchievementsHead = ()=>{
    return(
        <div className={Style.AchievementsHead}>
            Our Achievements
        </div>
    );
}

let AchievementsList = [
    {
        aname : "Tushar Pamnani",
        branch : "Computer Science and engineering [2026]",
        title : "Smart India Hackathon",
        img: "../Assets/tcblogo.jpg",
        description : "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
    },
    {
        aname : "Tushar Pamnani",
        branch : "Computer Science and engineering [2026]",
        title : "Smart India Hackathon",
        img: "../Assets/tcblogo.jpg",
        description : "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
    },
    {
        aname : "Tushar Pamnani",
        branch : "Computer Science and engineering [2026]",
        title : "Smart India Hackathon",
        img: "../Assets/tcblogo.jpg",
        description : "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
    },
    {
        aname : "Tushar Pamnani",
        branch : "Computer Science and engineering [2026]",
        title : "Smart India Hackathon",
        img: "../Assets/tcblogo.jpg",
        description : "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
    },
    {
        aname : "Tushar Pamnani",
        branch : "Computer Science and engineering [2026]",
        title : "Smart India Hackathon",
        img: "../Assets/tcblogo.jpg",
        description : "lorem epsum cortesdf dfbdf dfndf dfndf dnfdf ndf df  djsd hddf dfh",
    }
];

let AchievementsCard = AchievementsList.map((obj)=>{
    return  <div className={Style.AchievementsCard}>
            <div className={Style.leftOfAchievementCard}>
                    <img src={obj.img} alt={"Image of " + obj.aname}></img>
            </div>
            <div className={Style.rightOfAchievementCard}>
                    <h1>{obj.aname}</h1>
                    <h3>{obj.branch}</h3>
                    <div className={Style.titleAndDescription}>
                        <h2>{obj.title}</h2>
                        <p>{obj.description}</p>
                    </div>
            </div>
    </div>
})
const AchievementsCards = ()=>{
    return(
        <div className={Style.AchievementsContainer}>
        <AchievementsHead/>
        <div className={Style.AchievementsCards}>
           {AchievementsCard}
        </div>
        </div >
    );
}

export default AchievementsCards;