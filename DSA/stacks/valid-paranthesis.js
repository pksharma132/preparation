 function isValid(s) {
        const stack = [];
        const open = new Set(['(', '[', '{']);

        for (let i of s) {
            if (open.has(i)) {
                stack.push(i);
            } else {
                const current = stack.pop();
                if (current === "[" && i === "]" || current === "(" && i === ")" || current === "{" && i === "}") {
                    continue;
                } else {
                    return false
                }
            }
        }

        return stack.length === 0;
    }


    console.log(isValid("([{}])")) // true