import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepThree() {
    const history = useHistory();
    const dispatch = useDispatch();

    const minutes = useSelector(store => store.minutes);

    const addMinutes = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_MINUTES', payload: minutes };
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/step-4')
    }

    return (
        <>
            <h3>Step Three: Minutes</h3>
            <form onSubmit={addMinutes}>
                <input type="number" />
                <input type="submit" />
            </form>
            <button onClick={nextPage}>Next</button>

        </>
    );
}
export default StepThree;