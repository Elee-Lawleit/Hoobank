import axios from "axios";

const getAllAdmins = async()=>{
    const response = await axios.get("http://local.host:3000/api/admin/");

    // console.log(response.data);

    if(!response.data.success){
        return {sucess: false, error: "Something", data: {}};
    }

    return {success: true, error: null, data: response.data.result};

}

export default getAllAdmins;