import React, { useState, useEffect ,useRef} from 'react';
export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 const attemRef = useRef(props.attempt);
 const activate = () => {
     setActive(true)
     props.activationHandler(props.value)
 }

 useEffect(()=>{
    if(attemRef.current != props.attempt){
        setActive(false);
        attemRef.current = props.attempt
    }
 })
 
 const className = `card ${active ? 'activeCard': ''}`
 return (
    <div className={className} onClick={activate}>{props.value}</div>
 )

}

