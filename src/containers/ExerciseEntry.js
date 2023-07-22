import { connect } from "react-redux"
import ExerciseEntry from "../components/ExerciseEntry"
import { trackExercises } from "../redux/actions"

const mapStateToProps = () => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        trackExercises: (exercise) => 
            dispatch(trackExercises(exercise))
    }
}

export default connect(null, mapDispatchToProps)(ExerciseEntry)