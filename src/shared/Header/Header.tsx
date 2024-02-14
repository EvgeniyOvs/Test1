import styles from './header.module.scss';

import avatar from '../../img/Avatar.png'
import {Mail} from "../Icons/Mail.tsx";
import {Phone} from "../Icons/Phone.tsx";




export function Header() {

    // const [isOpen, setIsOpen] = useState(false);
    // function toggleMenuMode() {
    //     toggleMenu(!isMenuOpen);
    // }
    // const clickHandler = () => {
    //     toggleMenuMode();
    // };
  return (
      <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__avatar}>
                    <img src={avatar} alt= "аватар"/>
                </div>
                <div className={styles.header__name}>
                    Ricardo Cooper
                </div>
                <div className={styles.header__btns}>
                    <button className={styles.header__btn}>
                        <Mail/>
                        <span>Message</span>
                    </button>
                    <button className={styles.header__btn}>
                        <Phone/>
                        <span>Call</span>
                    </button>
                </div>
            </div>
        </div>
      </header>
  );
}
