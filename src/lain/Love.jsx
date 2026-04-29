import "./love.css";

function Love({ goTo }) {
  return (
    <>
      <div className="love-bg" />

      <img
        className="love-lain"
        src="/lain/lainbehindmove.gif"
        alt="LoveLain"
        draggable="false"
        onClick={() => goTo("wind")}
      />
    </>
  );
}

export default Love;