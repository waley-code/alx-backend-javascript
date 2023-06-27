import { uploadPhoto, createUser } from "../utils";

export default function handleProfileSignup(){
    createUser().then((x)=>{
        return x;
    }).then((y)=>{
        uploadPhoto().then((z)=>{
           console.log(z.body + "  "+y.firstName + "  "+ y.lastName);
        })
    }).catch((error)=>{
        console.log("Signup system offline");
    })

}