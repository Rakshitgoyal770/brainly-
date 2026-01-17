import Button from "./ui/button"
import { useContent } from "./hooks/useContent";
import { Plus, Share, StickyNote, Clipboard, Siren } from "lucide-react";
import Card from "./ui/Card";
export default function Dashboard({onAdd} : {onAdd : () => void}){
    const contant = useContent();
    return(
        <div className="h-full flex flex-col">
            <div className="flex flex items-center">
                <div className="text-3xl font-sans font-bold m-6 mt-6 ">
                    ALL NOTES
                </div>
                <div className="flex gap-4 mt-4 right-[30px] absolute">
                    <Button variant="Secondary" size="md" onClick={onAdd} startsWith={<Share className="h-4 w-4 text-purple-600"/>} text={"Delete Note"}/>
                    <Button variant="Primary" size="md" onClick={onAdd} startsWith={<Plus className="h-4 w-4 text-white"/>} text={"New Note"}/>
                </div>
            </div>
            <div className="flex flex-wrap overflow-y-auto h-[85vh]">
                <Card titleStartWith={<Clipboard/>} title="Numpy" mainContent={"This is campusx"} typeOfContent={"Youtube"} link={"https://www.youtube.com/live/XF6DCrNTzug?si=fSRk9nvwU_fD1Dlr"} tags={["#Python", "#Campusx"]} />
                <Card titleStartWith={<Siren/>} title="Politics" mainContent={"Does Trump invade Greenland"} typeOfContent={"Youtube"} link={"https://youtu.be/FdjnOdLDAbg?si=itaabKPFfeEvuOND"} tags={["#Donald Trump", "#Amarica"]} /> 
                {contant.map(item => (
                <Card
                    key={item._id}
                    titleStartWith={<StickyNote />}
                    title={item.title}
                    mainContent={item.mainContent}
                    typeOfContent={item.typeOfContent} 
                    link={item.link}
                    tags={item.tags}
                />
            ))}
            </div>
        </div>
    )
}

