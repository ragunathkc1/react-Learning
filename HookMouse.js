import react, { useState, useEffect } from 'react'
// component Did mount with hook
// component will unmount with hook
function HookMouse() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    
const logMousePosition=e=>{
        setX(e.clientX)
        setY(e.clientY)
        
    }
    useEffect(()=>{
    
        window.addEventListener('mousemove', logMousePosition)
        console.log('useEffectinvoked')
return()=>
{ console.log('componetUnmount executed')
    window.removeEventListener('mousemove', logMousePosition)

}
    },[])
    
    return (
        <div>

Hook Mouse X :${X} - Y:${Y}
        </div>
    )
}

export default HookMouse

