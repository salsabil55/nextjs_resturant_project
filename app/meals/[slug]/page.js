import Image from "next/image";
import { getDetailMeal } from "@/lib/meals";
import classes from "./page.module.css";
export default function MealPage({ params }) {
  const meals = getDetailMeal(params.slug);
  // to void brek line in instruction
  meals.instructions = meals.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meals.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meals.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:`}>{meals.creator}</a>
          </p>
          <p className={classes.summary}>{meals.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meals.instructions }}
        ></p>
      </main>
    </>
  );
}
