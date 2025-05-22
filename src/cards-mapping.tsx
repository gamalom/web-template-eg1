import Card from './components/cards';

const CardMapping = () => {
  const cardData = [
    { name: "Jocelyn Schleifer", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img1.png" },
    { name: "Martin Donin", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img2.png" },
    { name: "Jordyn Septimus", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img3.png" },
    { name: "Leo Arcand", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img4.png" },
    { name: "Marilyn Levin", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img5.png" },
    { name: "Lindsey Dokidis", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img6.png" },
    { name: "Hanna Dias", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img7.png" },
    { name: "Ryan Gouse", detail: "There are many variations of passages of Lorem Ipsum available", image: "./assets/cards-img/img8.png" }
  ];

  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {cardData.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </section>
  );
};
export default CardMapping;