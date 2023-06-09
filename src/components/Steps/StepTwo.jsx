import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo() {
    const history = useHistory();
    const dispatch = useDispatch();

    const activityType = useSelector(store => store.activityType);

    const addActivity = (event) => {
        event.preventDefault();
        const action = { type: 'SET_PERSON_NAME', payload: activityType };
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/step-3')
    }

    return (
        <>
            <h3>Step Two: Activity Type</h3>
            <form onSubmit={addActivity}>
                <input type="text" />
                <input type="submit" />
            </form>
            <button onClick={nextPage}>Next</button>

        </>
    );
}

export default StepTwo;