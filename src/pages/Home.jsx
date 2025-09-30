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
        <div className='bg-white '>
            <div className="container mx-auto px-4 py-2 bg-black">
                <h2 className="text-3xl   my-2 font-ubuntu-condensed text-white">Course days</h2>
                <div className="max-w-lg   text-white">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipig elit. Praesent vestibulum molestie lacus.</p>
                    <ul className="mb-6 space-y-2">
                        <li><strong>MONDAY - FRIDAY :</strong> 08:00 – 16:00</li>
                        <li><strong>SATURDAY :</strong> 09:30 – 15:30</li>
                        <li><strong>SUNDAY :</strong> Closed</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="/images/gym1.jpg" alt="" />
            </div>  
            <div>
                 <div className="container mx-auto px-4 py-2">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-gray-500">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
            <div>
                <img src="/images/gym2.jpg" alt="" />
            </div>
                <div>
                 <div className="container mx-auto px-4 py-2 bg-black">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black text-white">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-white">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
            <div>
                <img src="/images/gym4.jpg" alt="" />
            </div>
                        <div className="container mx-auto px-4 py-2 bg-black">
                <h2 className="text-3xl   my-2 font-ubuntu-condensed text-white">Course days</h2>
                <div className="max-w-lg   text-white">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipig elit. Praesent vestibulum molestie lacus.</p>
                    <ul className="mb-6 space-y-2">
                        <li><strong>MONDAY - FRIDAY :</strong> 08:00 – 16:00</li>
                        <li><strong>SATURDAY :</strong> 09:30 – 15:30</li>
                        <li><strong>SUNDAY :</strong> Closed</li>
                    </ul>
                </div>
            </div>
                        <div>
                            
                 <div className="container mx-auto px-4 py-2">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-gray-500">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
                            <div>
                 <div className="container mx-auto px-4 py-2 bg-black">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black text-white">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-white">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
            <div>
                <img src="/images/gym5.jpg" alt="" />
            </div>
        </div>
        <div>
    <section className="py-4 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Benefits Join Today</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px]'>1</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px]'>1</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px]'>1</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px]'>1</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
        </div>
        <form action="" className='flex flex-col gap-2 pt-4'>
            <input type="text" placeholder='Name *' className='bg-white'/>
            <input type="email" name="" id="" placeholder='Email *' className='bg-white' />
            <input type="number" name="" id="" placeholder='Phone Number *' className='bg-white'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your message *' className='bg-white'></textarea>
            <input type="submit" value="Join Now" className='bg-black text-white'/>
        </form>
      </div>
    </section>
        </div>
        <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="max-w-xl mx-auto bg-gray-300  p-8 relative">
          <img src="/images/person1.png" alt="Person" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-gray-700 italic mb-4">
            Epsum factorial non deposit quid pro quo hic escorol … Quote meon an estimate et non interruptus stadium.
          </p>
          <h4 className="text-xl font-bold">Antonio Brightman</h4>
        </div>
        <div className="max-w-xl mx-auto bg-gray-300  p-8 relative flex flex-col-reverse">
          <img src="/images/person2.png" alt="Person" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-gray-700 italic mb-4">
            Epsum factorial non deposit quid pro quo hic escorol … Quote meon an estimate et non interruptus stadium.
          </p>
          <h4 className="text-xl font-bold">Antonio Brightman</h4>
        </div>
      </div>
      
    </section>
        </>
    )
}
export default Home