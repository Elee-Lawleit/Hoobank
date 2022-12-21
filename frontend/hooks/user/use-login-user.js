import { useMutation } from "react-query";
import axios from "axios";


export default function useLoginUserMutation() {
    return useMutation(
        async ({ email, password }) => {
            return await axios.post("http://local.host:3000/api/users/login-user", {
                email, password
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("User logged in");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    );
}
