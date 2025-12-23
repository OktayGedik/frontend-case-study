import styles from './App.module.css';
import { FeatureCarousel } from './features/featureCarousel/FeatureCarousel';

export function App() {
  return (
    <>
      <main className={styles.main}>
        <FeatureCarousel />
      </main>
    </>
  );
}
