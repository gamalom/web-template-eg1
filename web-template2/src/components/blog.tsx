import Card from "./card";

const imagePath = "/src/assets/card-img/";
const avatarPath = "/src/assets/person-img/";

const cardData = [
  {
    image: imagePath + "card1.png",
    work: "Design",
    title: "UX review presentations",
    detail: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    avatar: avatarPath + "Avatar (1).png",
    name: "Olivia Rhyne",
    date: "20 Jan 2022",
  },
  {
    image: imagePath + "card2.png",
    work: "Product",
    title: "Migrating to Linear 101",
    detail: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    avatar: avatarPath + "Avatar (2).png",
    name: "Phoenix Baker",
    date: "19 Jan 2022",
  },
  {
    image: imagePath + "card3.png",
    work: "Software Engineering",
    title: "Building your API Stack",
    detail: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    avatar: avatarPath + "Avatar (3).png",
    name: "Lana Steiner",
    date: "18 Jan 2022",
  },
  {
    image: imagePath + "card4.png",
    work: "Product",
    title: "Migrating to Linear 101",
    detail: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    avatar: avatarPath + "Avatar (2).png",
    name: "Phoenix Baker",
    date: "19 Jan 2022",
  },
  {
    image: imagePath + "card5.png",
    work: "Software Engineering",
    title: "Building your API Stack",
    detail: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    avatar: avatarPath + "Avatar (3).png",
    name: "Lana Steiner",
    date: "18 Jan 2022",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h3 className="rounded-lg p-8 text-center font-bold text-3xl">
          My Blog
        </h3>
        <h4 className="rounded-lg p-4 text-center font-medium text-gray-500 mb-8">
          The latest industry news, interviews, technologies, and resources.
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto p-6">
        {cardData.map((data, id) => (
          <Card key={id} cardData={data} />
        ))}
      </div>
    </div>
  );
};
export default Blog;