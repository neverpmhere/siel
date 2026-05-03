import "./hidden.css";

function Hidden({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="hidden-bg" />

      <img
        className="hidden-eyes"
        src={`${base}lain/lainmyese.gif`}
        alt="Eyes"
        draggable="false"
        onClick={() => goTo("space")}
      />
    </>
  );
}

export default Hidden;