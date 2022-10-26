import sunglass from "../../images/sunglasses.png";
import style from "./style.module.css";

export function Navbar() {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.home}>
          <a href="/">
            <img style={{ width: "5vw" }} src={sunglass} alt="sunglass img" />
          </a>
          <a href="/" className={style.pageName}>
            Sunglasses
          </a>
        </div>
        <div className={style.links}>
          <a href="#about" className={style.linksText}>
            ABOUT
          </a>
          <a href="#reviews" className={style.linksText}>
            REVIEWS
          </a>
        </div>
      </div>
    </div>
  );
}
