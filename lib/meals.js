import sql from "better-sqlite3";

const db = sql("meals.db");
console.log("Database connection successful");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Loading Meals Failed ....");
  return db.prepare("SELECT * FROM meals").all();
}

// to get item of id

export function getDetailMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
