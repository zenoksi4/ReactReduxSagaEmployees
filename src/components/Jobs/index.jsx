import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import { useEffect } from "react"

export default function Jobs() {
    useEffect(() => {
            async function fetchData() {
                const response = await api.fetch(JOBS);

                console.log(response);
        } fetchData();
    } , []);

    return(
        <div>
            Jobs Component
        </div>
    )
}