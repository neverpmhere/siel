import "./connect.css";

function Connect({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="connect-bg" />

      <img
        className="connect-image"
        src={`${base}lain/lainwired.gif`}
        alt="Wired"
        draggable="false"
        onClick={() => goTo("love")}
      />
    </>
  );
}

export default Connect;