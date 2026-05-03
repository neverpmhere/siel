import "./space.css";

function Space({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="space-bg" />

      <img
        className="space-image"
        src={`${base}lain/step2.gif`}
        alt="Face"
        draggable="false"
        onClick={() => goTo("headless")}
      />
    </>
  );
}

export default Space;