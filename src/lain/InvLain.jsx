import "./invlain.css";

function InvLain({ goTo }) {
  return (
    <>
      <div className="invlain-bg" />

      <img
        className="invlain-image"
        src="/lain/vislain.gif"
        alt="InvLain"
        draggable="false"
        onClick={() => goTo("love")}
      />
    </>
  );
}

export default InvLain;