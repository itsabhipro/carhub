import { type } from "os";

export type ApiOptions = {
    method?:"GET"|"PUT"|"POST"|"DELETE";
    url:string;
    model?:string;
    manufacturer?:string;
    limit?:string;
    year?:string;
    fuel?:string;
}


  