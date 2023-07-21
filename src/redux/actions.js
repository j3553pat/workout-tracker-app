export const updateUser = (user) => {
    return {
      type: "UPDATE_USER",
      value: user
    }
}

export const trackCalories = (calorieIntake) => {
    return {
        type: "TRACK_CALORIES",
        value: calorieIntake
    }
}

export const trackFoodIntake = (foodIntake) => {
    return {
        type: "TRACK_FOODINTAKE",
        value: foodIntake
    }
}

export const trackExercises = (exercise) => {
    return {
        type: "TRACK_EXERCISES",
        value: exercise
    }
}