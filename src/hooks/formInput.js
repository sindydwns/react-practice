import { useState } from "react"

export function useInput(initValue) {
    const [value, setValue] = useState(initValue);
    const onChange = x => setValue(x.target.value);
    return {
        attr: { value, onChange },
        entire: { value, onChange, setValue }
    };
}

