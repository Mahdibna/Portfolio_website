const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Mahdi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ben Ahmed",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Tunisian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Tunisia",
  },

  {
    id: 7,
    title: "Phone (+216) : ",
    description: "27957245",
  },

  {
    id: 8,
    title: "Email : ",
    description: "mahdibna8@gmail.com",
  },
  {
    id: 10,
    title: "Langages : ",
    description: `Arabic,English,Frensh`,
  },
];

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
