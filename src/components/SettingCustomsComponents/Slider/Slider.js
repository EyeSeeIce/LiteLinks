import React, {useEffect, useState} from 'react';

const Slider = ({customBlock}) => {
    let a = customBlock.slider
    let ar = []
    for (let key in a){
        ar.push(a[key])
    }

    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => current === ar.length - 1 ? 0 : current + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            {<img width='100%' src={ar[index]} alt=""/>}
        </>
    );
};

export default Slider;
