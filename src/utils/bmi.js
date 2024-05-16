import IM from "imperial-metric";

export const calculateBMI = (weight, height) => {
  const heightCm = height / 100;
  const heightSq = heightCm ** 2;
  const bmi = Number((weight / heightSq).toFixed(1));
  return bmi;
};

export const calculateImperialBMI = (weight, inches, ft) => {
  const height = inches + ft * 12;
  const heightSq = height ** 2;
  const bmi = Number(((weight / heightSq) * 703).toFixed(1));
  return bmi;
};

export const getNutrition = (
  gender,
  age,
  units,
  weight,
  height,
  activity,
  goal
) => {
  console.log(gender, age, units, weight, height, activity, goal);
};

export const calcImperialBMR = (
  inches,
  ft,
  weight,
  age,
  activity,
  gender,
  goal
) => {
  let s;
  gender === "male" ? (s = 5) : (s = -161);

  const inchesToCm = IM(inches).from("inch").to("cm"); // 2.54
  const feetToCm = IM(ft).from("foot").to("cm"); // 2.54
  const w = weight * 0.453592;
  const h = Math.round(inchesToCm + feetToCm, 0);
  const bmr = (
    (10 * Number(w) + 6.35 * Number(h) - 5 * Number(age) + s) *
      Number(activity) +
    Number(goal)
  ).toFixed(0);

  console.log(6.35 * Number(h));

  const fat = Number((bmr * 0.3) / 9).toFixed(1);
  const carbs = Number((bmr * 0.48) / 4).toFixed(1);
  const protein = Number((bmr * 0.22) / 4).toFixed(1);
  return { bmr, protein, fat, carbs };
};

export const calcMetricBMR = (weight, height, age, activity, gender, goal) => {
  // console.log(weight);
  let s;
  gender === "male" ? (s = 5) : (s = -161);
  const bmr = (
    (10 * weight + 6.35 * height - 5 * Number(age) + s) * Number(activity) +
    Number(goal)
  ).toFixed(0);
  console.log(6.35 * height);

  const fat = Number((bmr * 0.3) / 9).toFixed(1);
  const carbs = Number((bmr * 0.48) / 4).toFixed(1);
  const protein = Number((bmr * 0.22) / 4).toFixed(1);
  return { bmr, protein, fat, carbs };
};
