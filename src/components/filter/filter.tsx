import React,{ ElementType } from "react";

interface FilterComponentProps{
  text:string,
  description: string,
  icon: ElementType
}

export default function FilterElement({text, description, icon}: FilterComponentProps) {
  return (
    <div className="text-sm flex align-center justify-center gap-2">
     <span className="align-middle bottom-0 top-0 m-auto text-[#FFA800]"> {React.createElement(icon,{color:""})}</span>
          <span>
            <p className="text-xs text-[#979797]">{text}</p>
            <strong className="text-xs text-black">{description}</strong>
          </span>
    </div>
  );
}