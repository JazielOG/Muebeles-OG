import "./Menu.styles.scss";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <a href="/coches">Industriales</a>
      <a href="/bedrooms">Recamaras</a>
      <a href="/stove">Cocinas</a>
      <a href="/living">Salas</a>
      <a href="/dining">Comedores</a>
    </div>
  );
};

export { Menu };
