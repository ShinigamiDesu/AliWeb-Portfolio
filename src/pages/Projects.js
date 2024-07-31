import React, { useState } from 'react';
import Rent1 from '../assets/rentalProj/rent1.jfif';
import Rent2 from '../assets/rentalProj/rent2.jfif';
import Rent3 from '../assets/rentalProj/rent3.jfif';
import POS1 from '../assets/rentalProj/pos1.jfif';
import POS2 from '../assets/rentalProj/pos2.jfif';
import POS3 from '../assets/rentalProj/pos3.jfif';
import POS4 from '../assets/rentalProj/pos4.jfif';
import POS5 from '../assets/rentalProj/pos5.jfif';
import Chat1 from '../assets/rentalProj/chat1.jfif';
import Chat2 from '../assets/rentalProj/chat2.jfif';
import Chat3 from '../assets/rentalProj/chat3.jfif';
import Chat4 from '../assets/rentalProj/chat4.jfif';
import Chat5 from '../assets/rentalProj/chat5.jfif';
import Chat6 from '../assets/rentalProj/chat6.jfif';
import Chat7 from '../assets/rentalProj/chat7.jfif';
import Chat8 from '../assets/rentalProj/chat8.jfif';

function Projects() {
  const Rentimages = [Rent1, Rent2, Rent3];
  const POSimages = [POS1, POS2, POS3, POS4, POS5];
  const Chatimages = [Chat1, Chat2, Chat3, Chat4, Chat5, Chat6, Chat7, Chat8];
  
  const [rentCurrentIndex, setRentCurrentIndex] = useState(0);
  const [posCurrentIndex, setPosCurrentIndex] = useState(0);
  const [chatCurrentIndex, setChatCurrentIndex] = useState(0);

  const RentprevImage = () => {
    setRentCurrentIndex(rentCurrentIndex > 0 ? rentCurrentIndex - 1 : Rentimages.length - 1);
  };

  const RentnextImage = () => {
    setRentCurrentIndex(rentCurrentIndex < Rentimages.length - 1 ? rentCurrentIndex + 1 : 0);
  };

  const POSprevImage = () => {
    setPosCurrentIndex(posCurrentIndex > 0 ? posCurrentIndex - 1 : POSimages.length - 1);
  };

  const POSnextImage = () => {
    setPosCurrentIndex(posCurrentIndex < POSimages.length - 1 ? posCurrentIndex + 1 : 0);
  };

  const ChatprevImage = () => {
    setChatCurrentIndex(chatCurrentIndex > 0 ? posCurrentIndex - 1 : Chatimages.length - 1);
  };

  const ChatnextImage = () => {
    setChatCurrentIndex(chatCurrentIndex < Chatimages.length - 1 ? chatCurrentIndex + 1 : 0);
  };

  return (
    <section id='Projects'>
        <div className='projectsContainer'>
            <div className='projTitleContainer'>
              <h1 className='projTitle'>Projects</h1>
            </div>

            <div className='projParaContainer'> 
              <p className='projPara'>Throughout my programming journey, I have developed numerous projects that have not only honed my problem-solving and analytical skills but also equipped me with a strong, solution-oriented mindset.</p>               
            </div>

          <div className='projItemsContainer'>

            

            <div className='projItem'>
              <img src={Rentimages[rentCurrentIndex]} alt="" className='rentIMG'/>
              <h1 className="projHead">Car Rental Management System (C#, SQL, .Net)</h1>
              <div className='button-container'>
                <button className="arrow-button" onClick={RentprevImage}>&lt;</button>
                <button className="arrow-button" onClick={RentnextImage}>&gt;</button>
              </div>
              <p className='projPara'>Developed a Car Rental Management System to keep track of the company’s vehicles, rentals,
              customers, and the overall renting process, making the system more organized and user-friendly.</p>
            </div>

            <br/> <br/> 

            <div className='projItem'>
              <img src={POSimages[posCurrentIndex]} alt="" className='itemIMG'/>
              <h1 className="projHead">Fast-Food Point Of Sale System (C#, SQL, .Net)</h1>
              <div className='button-container'>
                <button className="arrow-button" onClick={POSprevImage}>&lt;</button>
                <button className="arrow-button" onClick={POSnextImage}>&gt;</button>
              </div>
              <p className='projPara'>Developed a Food Ordering Point of sale System for a fast-food restaurant, aimed at improving customer experience by allowing customers to order their food using a screen, check order status, and helps the restaurant staff keep track of and prepare orders more efficiently.</p>
            </div>

             <br/> <br/> 

            <div className='projItem'>
              <img src={Chatimages[chatCurrentIndex]} alt="" className='itemIMG'/>
              <h1 className="projHead">Chat Application (C#, SQL, .Net)</h1>
              <div className='button-container'>
                <button className="arrow-button" onClick={ChatprevImage}>&lt;</button>
                <button className="arrow-button" onClick={ChatnextImage}>&gt;</button>
              </div>
              <p className='projPara'>Implemented a robust desktop-based messaging/chat application that allows users to create an account, create group chats,
              and chat privately, giving me experience with complex and relational database designs.</p>
            </div>
          </div>


          <div className='projEnd'>
            <p className='projEndText'>There are other several projects i have worked on, explore more of my exciting projects on my GitHub!</p>
          </div>
        </div>
    </section>
  )
}

export default Projects