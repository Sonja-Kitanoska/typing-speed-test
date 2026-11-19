const Navbar = ({ personalBest }: { personalBest: number | null }) => {
  return (
    <nav className="d-flex justify-content-between py-2 bg-black">
      <div className="container d-flex justify-content-between">
        <div>
          <img
            src=".../../assets/images/logo-small.svg"
            alt="Logo Small"
            className="d-md-none"
          />
          <img
            src=".../../assets/images/logo-large.svg"
            alt="Logo Large"
            className="d-none d-md-block"
          />
        </div>
        <div className="d-flex align-items-center gap-1">
          <div>
            <img src="../../assets/images/icon-personal-best.svg" alt="Logo" />
          </div>
          <p className="m-0 text-white">
            <span className="text-secondary d-md-none">Best: </span>
            <span className="text-secondary d-none d-md-inline">
              Personal best:{" "}
            </span>
            {personalBest} WPM
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
