import { connect } from "react-redux"
import FoodIntake from "../components/FoodIntake"
import { trackFoodIntake } from "../redux/actions"

const mapStateToProps = () => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        trackFoodIntake: (foodIntake) => 
            dispatch(trackFoodIntake(foodIntake))
    }
}

export default connect(null, mapDispatchToProps)(FoodIntake)