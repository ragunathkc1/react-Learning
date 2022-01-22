import React, { useState } from 'react';
import HookMouse from './HookMouse';
// sample for Component will unmount - HookMouse
function MouseContainer() {
    const [display, setDisplay] = useState('true')

    return (
        <div>
            <button onClick={() => setDisplay(!display)}> ToggleDisplay  </button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer
