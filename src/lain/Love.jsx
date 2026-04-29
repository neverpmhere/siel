import "./love.css";

function Love({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="love-bg" />

      <img
        className="love-lain"
        src={`${base}lain/lainbehindmove.gif`}
        alt="LoveLain"
        draggable="false"
        onClick={() => goTo("wind")}
      />
    </>
  );
}

export default Love;