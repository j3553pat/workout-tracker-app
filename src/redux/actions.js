export const updateUser = (user) => {
    return {
      type: "UPDATE_USER",
      value: user
    }
}

export const trackCalories = (calorieIntake) => {
    return {
        type: "TRACK_ CALORIES",
        value: calorieIntake
    }
}