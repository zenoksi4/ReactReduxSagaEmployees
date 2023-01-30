import { apiActions } from "modules/api/actions";
import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Jobs() {
    const state = useSelector(state => state.api[JOBS]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {  
                dispatch(apiActions.fetch(JOBS))

                const data = await api.fetch(JOBS);

                dispatch(apiActions.fetchSuccess(JOBS, data))
            } catch(e) {
                dispatch(apiActions.fetchFailure(JOBS, e))

            }
        } 
        fetchData();}, [])
    console.log(state)

    return(
        <div>
            Jobs Component
        </div>
    )
}