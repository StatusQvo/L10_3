const student = {
    name: "Maxim",
    programmingLanguage: "JavaScript"
};

const handleObject = (obj, key, action)=> {
   switch (action) {
        case 'get' :
            return obj[key]
        case 'add':
            obj[key] = ''
            return obj
        case 'delete':
            delete obj[key]
            return obj
        default:
            return obj
    }
}

let result = handleObject(student, 'programmingLanguage', 'delete')
console.log(result);

