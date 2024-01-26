import parse from "html-react-parser";
const stats = [
  {
    id: 1,
    no: "1",
    title: "Year of Experience",
  },

  {
    id: 2,
    no: "+20",
    title: "Completed Projects",
  },
];
const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => (
        

<div className="card" key={index}>
    <div className="title">
        <span>
          
        </span>
    </div>
    <div className="data">
        <p>    
{no} <br/> {parse(title)}
        </p> 
        <div className="range">
            <div className="fill">
            </div>
        </div>
    </div>
</div>
      ))}
    </>
  );
};

export default Stats;
