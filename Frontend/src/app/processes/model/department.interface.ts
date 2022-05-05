
    export interface UserInterface {
        id: number;
        name: string;
        email: string;
        country: string;
        phone: string;
        avatar: string;
        email_verified?: any;
        job_title: string;
        company_name: string;
    }

    export interface StepInterface {
        id: number;
        stepid: number;
        name: string;
        description: string;
        archive: number;
        position: number;
        create_date: Date;
        completed:boolean;
        timecompleted:number;
    }
    export interface NewStepInterface {
       
        name: string;
        description: string;
        position: number;
    }

    export interface ProcessInterface {
        id: number;
        departmentid: number;
        name: string;
        description: string;
        archive: number;
        create_date: Date;
        steps: StepInterface[];
        position:number;
    }

    export interface DepartmentInterface {
        id: number;
        userid: number;
        name: string;
        description: string;
        archive: number;
        create_date: Date;
        user: UserInterface;
        process: ProcessInterface[];
    }
    
    export interface SaveStepInterface{
        department:number;
        name:string;
        description:string;
        position:number;
        steps:NewStepInterface[];
    }