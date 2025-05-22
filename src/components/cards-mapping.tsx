import Card from './cards';
import { v4 as uuidv4 } from 'uuid';

const imgPath = "/src/assets/cards-img/";
const id = uuidv4();

const CardMapping = () => {
  const cardData = [
    { name: "Jocelyn Schleifer", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img1.png", id: id },
    { name: "Martin Donin", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img2.png", id: id },
    { name: "Jordyn Septimus", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img3.png", id: id },
    { name: "Leo Arcand", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img4.png", id: id },
    { name: "Marilyn Levin", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img5.png", id: id },
    { name: "Lindsey Dokidis", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img6.png", id: id },
    { name: "Hanna Dias", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img7.png", id: id },
    { name: "Ryan Gouse", detail: "There are many variations of passages of Lorem Ipsum available", image: imgPath + "img8.png", id: id }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className=" rounded-lg p-8 mb-10 text-center">
        <div className="text-sm font-semibold tracking-widest text-gray-500 mb-2">OUR TEAM</div>
        <h2 className="text-4xl font-bold mb-4">Meet the Clonify team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map((data, id) => (
          <Card key={id} cardData={data} />
        ))}
      </div>
    </div>
  );
};
export default CardMapping;