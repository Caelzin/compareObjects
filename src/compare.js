module.exports = function compare(obj1, obj2) {
    let result = obj1 !== undefined && obj2 !== undefined && obj1 !== null && obj2 !== null
        && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
        && Object.getOwnPropertyNames(obj1).length === Object.getOwnPropertyNames(obj2).length;

    if (result) {
        if (typeof obj1 !== "object") {
            return (obj1 === obj2)
        }

        let obj1Props = Object.getOwnPropertyNames(obj1);

        for (let i = 0; i < obj1Props.length; i++) {
            result = result && compare(obj1[obj1Props[i]], obj2[obj1Props[i]]);
            if (!result) {
                break;
            }
        }
    }

    return result;
};