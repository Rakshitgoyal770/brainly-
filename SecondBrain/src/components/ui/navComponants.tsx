import type { ReactElement } from "react";

export interface NavComponentProps{
    icon : ReactElement;
    title : string;
}

export default function NavComponent(props: NavComponentProps){
    return(
        <div className="flex gap-3 items-center text-md font-medium my-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
            {props.icon} {props.title}
        </div>
    )
}