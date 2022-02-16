import React from 'react';

interface AssemblyLineInterface {
    stages:Array<string>
}

function AssemblyLine(props:AssemblyLineInterface) {
    const {stages} = props;
    // handled emtpy stages step
    if(!stages.length)  return <>There are no stages setup in assembly.</>
  return (
    <>
        Assembly 
    </>
  );
}

export default AssemblyLine;
