const finalResult = ["(abc)(def)", "((abc)(def))", "a(b)c"];

const deleteParenthesis = desiredString => {
    if (desiredString.length >= 2 && desiredString[0] === '(' && desiredString[desiredString.length - 1] === ')') {
        for (let parenthesis of desiredString) {
            let count = 0;
            count += (parenthesis === '(') ? 1 : (parenthesis === ')') ? -1 : 0;
            if (count === 0) return desiredString;
            if (count < 0) break;
        }
        return (count > 0) ? desiredString : desiredString.slice(1, -1);
    }
    return desiredString;
}

for (let i = 0; i < finalResult.length; i++) {
    console.log(deleteParenthesis(finalResult[i]));
}