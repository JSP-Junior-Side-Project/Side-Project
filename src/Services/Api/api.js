import axios from "axios";
import moment from "moment";
import { ACCOUNT_API_ENDPOINT, PROJECT_API_ENDPOINT, USER_API_ENDPOINT } from "./Endpoint";

//project
export const createProject = async (userData, postData) => {
    // !--파트를 json과 file 로 나누어서 보내야함--!
    const formData = new FormData();
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const projectData = {
        user_id: userData.uid,
        created_at: moment().format("YYYY-MM-DD"),
        ...postData
    }
    Object.keys(postData).forEach((key) => formData.append(key, projectData[key]));
    // 
    // 헤더 설정  -> key:        content-ID
    //          -> value:      json / image / video
    // 
    await axios.post(`${PROJECT_API_ENDPOINT}`, formData, config)
    .then((res) => {
        console.log(postData)
        for (let key of formData.keys()) {
            console.log(key);
          }
          
          for (let value of formData.values()) {
            console.log(value);
          }          
    })
    .catch((error) => {
        console.log(error.message)
    })
}

export const fetchProject = async (id) => {
    await axios.get(`${PROJECT_API_ENDPOINT}/${id}`)
    .then((response) => {
        return (
            response.data
        )
    })
}

//user
export const createNewUser = async (user) => {
    await axios.post(`${USER_API_ENDPOINT}`, {
        id: user.uid
    })
    await axios.post(`${ACCOUNT_API_ENDPOINT}`, {
        id: user.uid
    })
}

export const updateProfile = async (user, profile) => {
    await axios.put(`${USER_API_ENDPOINT}/${user.uid}`, {
        ...profile,
        created_at: moment().format("YYYY-MM-DD")
    })
    .catch((error) => {
        console.log(error.message)
    })
}

export const updateAccount = async (user, account) => {
    await axios.put(`${ACCOUNT_API_ENDPOINT}/${user.uid}`, {
        ...account,
        created_at: moment().format("YYYY-MM-DD")
    })
    .catch((error) => {
        console.log(error.message)
    })
}

export const fetchArtist = async(id) => {
    const response = await axios.get(`${USER_API_ENDPOINT}/${id}`)
    .catch((error) => {
        throw new Error(error.message)
    })
    return (
        response.data
    )
}

// export const fetchProfileImage = async(id) => {
//     storageService().
// }