
import ProfileGrid from "components/common/ProfileGrid";
import useFetch from "hooks/useFetch";
import { EMPLOYEES } from "modules/api/endpoints";
import { useEffect } from "react";


export default function Employees() {

    const {response, performFetch} = useFetch(EMPLOYEES);
    const {loading, data} = response;
    
    useEffect(() => {
        performFetch();
    }, [performFetch]); 


    return(
        <ProfileGrid profiles={data} loading={loading}/>
    )
}