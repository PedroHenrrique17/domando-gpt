import "./Header.css";
const Header = (props) => {
  console.log(props);
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>{props.tittleHeader}</h1>
          <p>{props.textHeader}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
