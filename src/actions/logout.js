import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction(){
    localStorage.removeItem("username")
    toast.success("User Deleted")
    return redirect("/")
}