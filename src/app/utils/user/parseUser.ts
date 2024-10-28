import { User } from "../../../../api/user/user.model"
export const parseUser = (formData:FormData):User => {
    return {
        username: `${formData.get('username')}`,
        firstName: `${formData.get('name')}`,
        lastName:  `${formData.get('lastName')}`,
        isActive: true,
        password: `${formData.get('password')}`,        
        creationDate: Math.floor(new Date().getTime()/1000),
        email: `${formData.get('email')}`,
        file: {image: ''}        
    }
}