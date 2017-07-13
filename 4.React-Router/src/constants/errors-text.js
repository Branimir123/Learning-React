export default class stringErrors{
    stringLength(name, length){
        return `${name} must be at least ${length} symbols long`;
    }

    stringEmpty(name){
        return `${name} cannot be empty`;
    }
}