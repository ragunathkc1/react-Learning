import react, { useEffect, useState } from 'react'
// Component Dit Update  - hook
function HookConditionalRender() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const increment = () => setCount({ count: count + 1 })

    useEffect(() => {
        console.log('Updating Doc title ')
        document.title=`Clicked ${count} times`  
    },[count])


    return (
        <>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>click met {count} </button>
        </>
    )

}

export default HookConditionalRender;
