const Card = (props) => {
  const { cardData } = props;
  const work = "Software Engineer";
  const { name, detail, image } = cardData;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-200">
      <div className="h-48 w-full flex items-center justify-center bg-gray-100 p-0">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-lg font-semibold mb-1">{name}</h4>
        <h5 className="text-sm text-gray-500 mb-1">{work}</h5>
        <h5 className="text-sm text-gray-600 mb-4">{detail}</h5>
        <div className="links flex gap-4 mt-auto">
          <a href="https://www.fb.com" target="_blank" >
            <img src="/src/assets/links-img/facebook.png" alt="facebook" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="/src/assets/links-img/instagram.png" alt="instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" >
            <img src="/src/assets/links-img/twitter.png" alt="twitter" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;