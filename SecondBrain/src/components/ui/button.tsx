import type { ReactElement } from "react";


type Varients = "Primary" | "Secondary"
type Sizes = "sm" | "md" | "lg"
export interface ButtonProps{
    variant : Varients
    size : Sizes;
    startsWith?: ReactElement;
    endsWith?: ReactElement;
    onClick? : () => void;
    text?: String;
}

const varientStyle = {
    "Primary" : "bg-purple-600 text-white",
    "Secondary" : "bg-purple-300 text-purple-600"
}

const variableSize = {
    "sm" : "h-8 px-3 text-sm w-20",
    "md" : "h-10 px-5 text-md w-25",
    "lg" : "h-12 px-7 text-lg w-30",
}
const defaultStyle = "p-4 rounded-md font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
 
export default function Button(props: ButtonProps){
    return <button className={`${varientStyle[props.variant]} ${defaultStyle} ${variableSize[props.size]}`} onClick={props.onClick}>{props.startsWith} {props.text} {props.endsWith}</button>
}

{/* <Button variant="primary" size="md" startsWith={"  "} onClick={() => {}} endsWith={"   "} text={"helow everyonr"}/> */}