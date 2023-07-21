import { connect } from "react-redux"
import CalorieIntake from "../components/CalorieIntake"
import { trackCalories } from "../redux/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        trackCalories: (calorieIntake) => 
            dispatch(trackCalories(calorieIntake))
    }
}

export default connect(null, mapDispatchToProps)(CalorieIntake)