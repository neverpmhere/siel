import "./invlain.css";

function InvLain({ goTo }) {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="invlain-bg" />

      <img
        className="invlain-image"
        src={`${base}lain/vislain.gif`}
        alt="InvLain"
        draggable="false"
        onClick={() => goTo("love")}
      />
    </>
  );
}

export default InvLain;