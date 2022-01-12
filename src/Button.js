import { useState } from "react"

export function Button(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>{props.name}</button>
        </div>
    )
}

