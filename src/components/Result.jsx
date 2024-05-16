const Result = ({ title, amount, cal }) => {
  return (
    <div className="res">
      <div className="res-title">{title}</div>
      <div className="res-amount">
        <p>{amount} </p>{" "}
        <p className="res-unit">{cal ? "calories per day" : "grams per day"}</p>
      </div>
    </div>
  );
};
export default Result;
