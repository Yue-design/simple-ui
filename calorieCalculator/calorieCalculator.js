function inputCaloriesByDay(day) {
  switch (day) {
    case "Monday":
      return 3500;
      break;
    case "Tuesday":
      return 1500;
      break;
    case "Wednesday":
      return 1800;
      break;
    case "Thursday":
      return 2300;
      break;
    case "Friday":
      return 2400;
      break;
    case "Saturday":
      return 1500;
      break;
    case "Sunday":
      return 1500;
      break;
    default:
      return "Please enter a valid day";
  }
}

console.log(inputCaloriesByDay("Sunday"));
console.log(inputCaloriesByDay("Sumday"));

function getTotalCalories() {
  return (
    inputCaloriesByDay("Monday") +
    inputCaloriesByDay("Tuesday") +
    inputCaloriesByDay("Wednesday") +
    inputCaloriesByDay("Thursday") +
    inputCaloriesByDay("Friday") +
    inputCaloriesByDay("Saturday") +
    inputCaloriesByDay("Sunday")
  );
}

function getIdealCalories() {
  var idealDailyCalories = 2000;
  return idealDailyCalories * 7;
}

function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return "You ate just the right amount of food!";
  } else if (actualCalories > idealCalories) {
    return "Time to head to the gym!";
  } else {
    return "Time for seconds!";
  }
}

console.log(calculateHealthPlan());
