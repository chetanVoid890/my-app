import React from 'react'



interface Iprop {
    name: string;
   
  }  



function Welcome(props: Iprop) {
    const {name} = props;
  return (
    
    <>{name}</>
  )
}

export default Welcome