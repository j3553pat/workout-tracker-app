import { connect } from "react-redux"
import ExerciseEntry from "../components/ExerciseEntry"
import { trackExercises } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        trackExercises: state.trackExercises,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        trackExercises: (exercise) => 
            dispatch(trackExercises(exercise))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseEntry)