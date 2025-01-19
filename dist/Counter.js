import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "counter-container", children: [_jsx("button", { className: "increment-button-counter", onClick: increment, children: "+" }), _jsx("p", { className: "count", children: count }), _jsx("button", { className: "decrement-button-counter", onClick: decrement, children: "-" })] }) }));
}
