import "./wind.css";

function Wind({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="wind-bg" />

      <img
        className="wind-sun"
        src={`${base}lain/sun.gif`}
        alt="Sun"
        draggable="false"
        onClick={() => goTo("invlain")}
      />

      <img
        className="wind-lain"
        src={`${base}lain/laindressslow.gif`}
        alt="Lain"
        draggable="false"
      />
    </>
  );
}

export default Wind;