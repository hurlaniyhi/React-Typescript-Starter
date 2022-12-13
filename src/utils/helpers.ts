import { ValidatorResponse } from "src/model"

const inputValidator = (data: any, exemptedPropertes?: string[]): ValidatorResponse => {
    var result = <ValidatorResponse>{ isValidated: true }
    for (let key in data) {
        if (!data[key] && !exemptedPropertes?.includes(key)) {
            result.isValidated = false;
            result.message = `Input: Kindly provide ${key}`
            break;
        }
    }
    console.log({result})
    return result
} 

const validateEmail = (email: string): boolean => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export default {
    inputValidator,
    validateEmail
}