
import { createUser, uploadPhoto } from "../utils";

export default async function asyncUploadUser(){
    let x = "";
    let y =  "";
    try {
         x = await createUser();
         y = await uploadPhoto();
    } catch (error) {
        return{
                photo: null,
                user: null,
        };
    }
    return{
        photo: x,
        user: y,
    }

}