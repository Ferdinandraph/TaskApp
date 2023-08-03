import Logo from "../Assets/762686.png"
import "./Header.css"
export const Header = () => {
  return (
    <section className="Header">
      <img src={Logo} alt="image" />
      <ul>
      <li>home</li>
      </ul>
    </section>
    )
}