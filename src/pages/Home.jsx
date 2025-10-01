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
        <div className="bg-[url(/images/bg_image.jpg)] bg-cover py-8 h-[400px] flex justify-center">
            <div className="flex flex-col justify-center items-center gap-8 sm:grid grid-cols-2 container  mx-auto">
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
        <div className='bg-white md:grid md:grid-cols-3 container mx-auto'>
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
                <img src="/images/gym1.jpg" alt="" className='h-full w-full'/>
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
            <div className='col-span-2'>
                <img src="/images/gym2.jpg " alt="" className='w-full h-full'/>
            </div>
                <div>
                 <div className="container mx-auto px-4 py-2 bg-black lg:h-full">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black text-white">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-white">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
            <div>
                <img src="/images/gym4.jpg" alt="" className='h-full' />
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
                 <div className="container mx-auto px-4 py-2 bg-black h-full">
                    <h2 className="text-3xl   my-2 font-ubuntu-condensed black text-white">Fitness</h2>
                        <div className="max-w-lg   text-white">
                            <p className="mb-4 text-white">Improving technique that allows to change the body shape and weight and permanently 
                    fix the result achieved. It includes physical training combined with properly chosen diet And exercise. </p>
                         </div>
                </div>
            </div>
            <div className='col-span-2'>
                <img src="/images/gym5.jpg" alt="" className='w-full h-full'/>
            </div>
        </div>
        <div>
    <section className="py-4 bg-gray-200 md:grid grid-cols-2">
      <div className="container mx-auto px-4 md:max-w-[400px] lg:max-w-[800px]">
        <h2 className="text-3xl font-ubuntu-condensed mb-4">Benefits Join Today</h2>
        <div className="grid grid-cols-1  gap-8">
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px] text-white'>1</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px] text-white'>2</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px] text-white'>3</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
            <div  className="flex gap-2">
              <div className=" bg-[#00bbd3]  h-[54px] w-[88px] p-[11px]">
                <h4 className='text-center m-auto text-[20px] text-white'>4</h4>
              </div>
              <p className="text-gray-600 ">porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci Neque velit.</p>
            </div>
        </div>

      </div>
      <form action="" className='flex flex-col gap-2 pt-4 md:max-w-[380px] lg:max-w-[800px]'>
            <input required type="text" placeholder='Name *' className='bg-white placeholder-gray-400 p-[0.8em]'/>
            <input required type="email" name="" id="" placeholder='Email *' className='bg-white placeholder-gray-400 p-[0.8em]'  />
            <input required type="number" name="" id="" placeholder='Phone Number *' className='bg-white placeholder-gray-400 p-[0.8em]'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your message *' className='bg-white placeholder-gray-400 p-[0.8em]'></textarea>
            <input type="submit" value="Join Now" className='bg-black text-white font-ubuntu-condensed p-[0.5em] text-[1.3em]'/>
        </form>
    </section>
        </div>
        <section className="py-3">
      <div className="container mx-auto px-4 ">
        <h2 className="font-ubuntu-condensed text-[1.8em]  mb-4">Testimonials</h2>
        <div className="max-w-xl mx-auto md:max-w-4xl lg:max-w-7xl bg-gray-600/40 mb-4  p-4 sm:flex gap-3">
          <img src="/images/person1.png" alt="Person" className="w-24 h-24 rounded-full mx-auto mb-4 lg:h-[180px] lg:w-[180px]" />
          <div>
          <p className="text-gray-700 text-[14px] leading-[2] mb-4 ">
          Epsum factorial non deposit quid pro quo hic escorol. 
          Olypian quarrels et gorilla congolium sic ad nauseum. 
          Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. 
          Marquee selectus non provisio incongruous feline nolo contendre. 
          Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.
          </p>
          <h4 className="text-xl font-ubuntu-condensed text-center">Antonio Brightman</h4>
          </div>

        </div>
        <div className="max-w-xl mx-auto bg-gray-600/40 md:max-w-4xl lg:max-w-7xl  p-4  flex flex-col-reverse sm:flex-row-reverse gap-3">
          <img src="/images/person2.png" alt="Person" className="w-24 h-24 rounded-full mx-auto mt-4 lg:h-[180px] lg:w-[180px] " />
          <div>
          <p className="text-gray-700 text-[14px] leading-[2] mt-4">
          Epsum factorial non deposit quid pro quo hic escorol. 
          Olypian quarrels et gorilla congolium sic ad nauseum. 
          Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. 
          Marquee selectus non provisio incongruous feline nolo contendre. 
          Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.
          </p>
          <h4 className="text-xl font-ubuntu-condensed text-center">Antonio Brightman</h4>
          </div>

        </div>
      </div>
      
    </section>
        </>
    )
}
export default Home