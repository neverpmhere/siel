import "./headless.css";

function Headless({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="headless-bg" />

      <img
        className="headless-image"
        src={`${base}lain/hover.gif`}
        alt="Hover"
        draggable="false"
        onClick={() => goTo("connect")}
      />
    </>
  );
}

export default Headless;