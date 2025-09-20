
function Card({ title, image, description, }) {
    return (
      <div className="max-w-sm bg-white  border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-2">
        <div className="w-[68px] h-[68px]  bg-[#00bbd3] rounded-full mx-auto flex justify-center">
        {image && (
          <img
            className="m-auto"
            src={image}
            alt={title}
          />
        )}
        </div>
        <div className="p-4 flex flex-col justify-between h-full text-center ">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 font-ubuntu-condensed">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 font-open-sans">{description}</p>
          </div>

        </div>
      </div>
    );
  }
  
  export default Card;