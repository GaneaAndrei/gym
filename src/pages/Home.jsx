import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import cardData from '../assets/data.json';  // 




function Home()
{
    const [cards, setCards] = useState([]);

    useEffect(() => {
      // import data from json
      setCards(cardData);
    }, []);

    return(
        <>
        <div className="bg-[url(/images/bg_image.jpg)] bg-cover py-8">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="bg-gray-600/40 text-white py-[20px] px-[10px] w-fit text-[14px] mx-3  ">
                    <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetuer adipig elit. Praesent vestibulummolestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta Fusce
                    </p>
                </div>
                <div className="py-[10px] font-ubuntu-condensed text-[24px] text-white">
                    <h3 className="text-center">Pain Is Temporary. Quitting Lasts Forever.</h3>
                </div>
            </div>
        </div>
        <div className="bg-gray-300">
            <div>
                <h2 className="text-center py-2 font-ubuntu-condensed text-[30px]">Train with us</h2>
            </div>
            <div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map(card => (
                <Card
                    key={card.id}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
                ))}
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home