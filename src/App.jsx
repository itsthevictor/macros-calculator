import { useEffect, useState } from "react";
import {
  calcImperialBMR,
  calculateBMI,
  calculateImperialBMI,
  calcMetricBMR,
} from "./utils/bmi";
import Result from "./components/Result";

function App() {
  const [results, setResults] = useState(null);
  const [imperialUnits, setImperialUnits] = useState(false);
  const [formData, setFormData] = useState({
    gender: "female",
    age: null,
    weight: null,
    height: null,
    ft: null,
    inches: null,
    activity: 1.375,
    goal: -500,
  });

  const handleSubmit = () => {
    console.log(formData);
    const { age, gender, height, weight, inches, ft, activity, goal } =
      formData;

    if (imperialUnits) {
      const bmi = calculateImperialBMI(weight, inches, height);
      const bmr = calcImperialBMR(
        inches,
        height,
        weight,
        age,
        activity,
        gender,
        goal
      );
      console.log(bmr);
      setResults(bmr);
    } else {
      const bmi = calculateBMI(weight, height);
      const bmr = calcMetricBMR(weight, height, age, activity, gender, goal);
      setResults(bmr);
      console.log(bmr);
    }
  };

  useEffect(() => {});

  return (
    <main>
      <div className="title">
        <h1>Macro Calculator</h1>
      </div>
      <div className="info">
        <p>
          To calculate your daily caloric needs and macro goals, fill out the
          information below! This macro calculator gives you an estimated
          calorie intake based on the Mifflin St Jeor Equation and your provided
          values, this should be used wisely. If you are not sure how to apply
          this information, seek advise from your healthcare professional.
        </p>
      </div>
      <div className="calculator-container ">
        <div className="calculator">
          <div className="measurements">
            <div className="gender">
              <label htmlFor="gender-radio" className="input-label">
                gender
              </label>
              <div className="gender-radio-input" id="gender-radio">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  defaultChecked
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <label htmlFor="female" className="radio-label">
                  female
                </label>

                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                <label htmlFor="male" className="radio-label">
                  male
                </label>
              </div>
            </div>
            <div className="age-units">
              <div className="double-input-row">
                <div className="single-input">
                  <label htmlFor="age" className="input-label">
                    age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={(e) =>
                      setFormData({ ...formData, age: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="single-input">
                  <label htmlFor="units" className="input-label">
                    units
                  </label>
                  <div className="units" id="units">
                    <input
                      type="radio"
                      name="units"
                      id="lb"
                      value="lb"
                      onClick={() => setImperialUnits(true)}
                    />
                    <label htmlFor="lb" className="radio-label-lowercase">
                      lb
                    </label>

                    <input
                      type="radio"
                      name="units"
                      id="kg"
                      value="kg"
                      defaultChecked
                      onClick={() => setImperialUnits(false)}
                    />
                    <label htmlFor="kg" className="radio-label-lowercase">
                      kg
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="weight-height">
              {" "}
              {!imperialUnits && (
                <div className="double-input-row">
                  <div className="input-row">
                    <label htmlFor="weight" className="input-label">
                      weight
                    </label>
                    <input
                      type="number"
                      id="weight"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          weight: Number(e.target.value),
                        })
                      }
                    />
                    <span className="metric-span">kg</span>
                  </div>
                  <div className="input-row">
                    <label htmlFor="height" className="input-label">
                      height
                    </label>
                    <input
                      type="number"
                      id="height"
                      className="number-input"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          height: Number(e.target.value),
                        })
                      }
                    />
                    <span className="metric-span">cm</span>
                  </div>
                </div>
              )}
              {imperialUnits && (
                <div className="triple-input-row">
                  <div className="input-row">
                    <label htmlFor="weight" className="input-label">
                      weight
                    </label>
                    <input
                      type="number"
                      id="weight"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          weight: Number(e.target.value),
                        })
                      }
                    />
                    <span className="metric-span">lb</span>
                  </div>
                  <div className="input-row">
                    {" "}
                    <label htmlFor="height" className="input-label">
                      height
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="ft"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          height: Number(e.target.value),
                        })
                      }
                    />
                    <span className="metric-span">ft</span>
                  </div>
                  <div className="input-row">
                    <input
                      type="number"
                      name="in"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inches: Number(e.target.value),
                        })
                      }
                    />
                    <span className="metric-span">in</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="activity-levels-container">
            <label htmlFor="activity-levels" className="input-label">
              activity level
            </label>
            <div className="activity-levels">
              <input
                type="radio"
                name="activity"
                id="sedentary"
                value={1.2}
                onClick={(e) => setFormData({ ...formData, activity: 1.2 })}
              />
              <label htmlFor="sedentary" className="radio-label">
                sedentary
              </label>
              <input
                type="radio"
                name="activity"
                id="lightly"
                value="1.375"
                defaultChecked
                onClick={(e) => setFormData({ ...formData, activity: 1.375 })}
              />
              <label htmlFor="lightly" className="radio-label">
                lightly active
              </label>
              <input
                type="radio"
                name="activity"
                id="moderately"
                value={1.55}
                onClick={(e) => setFormData({ ...formData, activity: 1.55 })}
              />
              <label htmlFor="moderately" className="radio-label">
                moderately active
              </label>
              <input
                type="radio"
                name="activity"
                id="very"
                value={1.725}
                onClick={(e) => setFormData({ ...formData, activity: 1.725 })}
              />
              <label htmlFor="very" className="radio-label">
                very active
              </label>
              <input
                type="radio"
                name="activity"
                id="extra"
                value={1.9}
                onClick={(e) => setFormData({ ...formData, activity: 1.9 })}
              />
              <label htmlFor="extra" className="radio-label">
                extra active
              </label>
            </div>
          </div>
          <div className="goals-container">
            <label htmlFor="goals" className="input-label goals-label">
              goal
            </label>
            <div className="goals" id="goals">
              <input
                type="radio"
                name="goal"
                id="lose"
                value={-500}
                defaultChecked
                onClick={(e) => setFormData({ ...formData, goal: -500 })}
              />
              <label htmlFor="lose" className="radio-label">
                lose weight
              </label>
              <input
                type="radio"
                name="goal"
                id="gain"
                value={300}
                onClick={(e) => setFormData({ ...formData, goal: 300 })}
              />
              <label htmlFor="gain" className="radio-label">
                gain
              </label>
              <input
                type="radio"
                name="goal"
                id="maintain"
                value={0}
                onClick={(e) => setFormData({ ...formData, goal: 0 })}
              />
              <label htmlFor="maintain" className="radio-label">
                maintain
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!formData.age || !formData.weight || !formData.height}
            >
              calculate
            </button>
          </div>
        </div>
        {results && (
          <div className="results-container">
            {" "}
            <label htmlFor="results" className="input-label goals-label">
              results
            </label>
            <div className="results" id="results">
              <Result title="calories" amount={results.bmr} cal />
              <Result title="Protein" amount={results.protein} />
              <Result title="Fat" amount={results.fat} />
              <Result title="Carbs" amount={results.carbs} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
