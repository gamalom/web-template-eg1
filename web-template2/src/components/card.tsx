const Card = ({ cardData }) => {
  const { image, work, title, detail, avatar, name, date } = cardData;
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-yellow-500 font-semibold mb-1 uppercase tracking-wider">{work}</span>
        <h4 className="font-bold text-lg mb-2 line-clamp-2">{title}</h4>
        <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{detail}</p>
        <div className="flex items-center mt-auto pt-2 border-t border-gray-100">
          <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover mr-3 border-2 border-yellow-400" />
          <div className=" border-l  p-1 flex flex-col">
            <span className="font-semibold text-sm text-gray-700">{name}</span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
