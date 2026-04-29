import "./wind.css";

function Wind({ goTo }) {
  return (
    <>
      <div className="wind-bg" />

      <img
        className="wind-sun"
        src="/lain/sun.gif"
        alt="Sun"
        draggable="false"
        onClick={() => goTo("invlain")}
      />

      <img
        className="wind-lain"
        src="/lain/laindressslow.gif"
        alt="Lain"
        draggable="false"
      />
    </>
  );
}

export default Wind;