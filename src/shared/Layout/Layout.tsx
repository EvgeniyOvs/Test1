
import styles from './layout.module.scss';
import {Header} from "../Header";
import {Gallery} from "../Gallery";




export function Layout() {

  return (
    <div className={styles.container}>
        <Header/>
      <main>
        <Gallery/>
      </main>

    </div>
  );
}
