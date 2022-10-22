import { where, query } from 'firebase/firestore';

const GetCategoryRequirements = (queryCategories, requirements) => {

    let key = []
    let value = []
    for (const property in requirements) {
        key.push(property)
        value.push(requirements[property])
    }

    let operator;

    const getOperator = (key) => {
        switch (key) {
            case "flavour":
                operator = "array-contains"
                break;
            default:
                operator = "=="
                break;
        }
        return operator
    }

    let data = query(queryCategories, where(key[0], getOperator(key[0]), value[0]))
    for (let i = 1; i < Object.keys(requirements).length; i++) {
        data = query(data, where(key[i], getOperator(key[i]), value[i]))
    }
    return data
}
export default GetCategoryRequirements;