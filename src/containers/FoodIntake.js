import { connect } from "react-redux"
import FoodIntake from "../components/FoodIntake"
import { trackFoodIntake } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        trackFoodIntake: state.trackFoodIntake,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        trackFoodIntake: (foodIntake) => 
            dispatch(trackFoodIntake(foodIntake))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodIntake)