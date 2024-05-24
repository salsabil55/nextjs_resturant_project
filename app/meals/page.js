import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import styles from "./page.module.css";
import { getMeals } from "@/lib/meals";

async function Meal() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals , created {""}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your Favourite reciepe and cook it yourself . It easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="meals/share">Share your favorite Reciepe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>loadingPage ....</p>}>
          <Meal />
        </Suspense>
      </main>
    </>
  );
}
