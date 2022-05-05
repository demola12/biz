
export interface UserInfo {
    id: string;
    name: string;
    email: string;
    phone: string;
}
export interface RegisterInterface{
    name: string;
    email: string;
    password: string;
    country: string;
    phone: string;
    job_title: string;
    company_name:string;
}
export interface LoginInterface{
    email: string;
    password: string;
}
export interface SelectOptionsInterface{
    id:number|string;
    value:string;
  }
export interface EndpointResponse{
    status:boolean;
    message:any;
    token:string;
    data:any;
}
export interface RegularResponse{
    status:boolean;
    message:string;
}
