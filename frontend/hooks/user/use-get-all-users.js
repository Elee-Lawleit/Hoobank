import { useQuery } from "react-query";
import axios from "axios";

const useGetAllUsers = () => {

    return useQuery(["all-users"], async () => {
        const res = await axios.get(`http://localhost:3000/api/users`);
        return res?.data;

    })
}

export default useGetAllUsers;