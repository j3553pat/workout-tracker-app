import { connect } from "react-redux"
import CalorieIntake from "../components/CalorieIntake"
import { trackCalories } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        calories: state.calories,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        trackCalories: (calorieIntake) => 
            dispatch(trackCalories(calorieIntake))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalorieIntake)