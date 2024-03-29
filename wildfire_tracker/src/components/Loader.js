import spinner from "./Spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Fetching the Data</h1>
    </div>
  );
};

export default Loader;
