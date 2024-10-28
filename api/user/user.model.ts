export interface User {
    username: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    password: string;
    creationDate: number;
    email: string;
    file: File;
}

interface File{ 
    id?: string;
    image?  : string;    
}