import type { ReactElement } from "react";

export interface CardProps{
    titleStartWith : ReactElement;
    title : string;
    mainContent : string;
    link : string;
    tags : string[];
    typeOfContent : 'Youtube' | 'Twitter' | 'Linkdin' | 'Article';
}

function getYouTubeEmbedUrl(link: string): string | null {
  const match = link.match(
    /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([^&?/]+)/ 
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}


function resolveEmbed(
  typeOfContent: CardProps["typeOfContent"],
  link: string
): string | null {
  switch (typeOfContent) {
    case "Youtube":
      return getYouTubeEmbedUrl(link);

    case "Twitter": {
        return link
}

    case "Article":
      return link;

    case "Linkdin":
      return null; // LinkedIn iframe not supported safely

    default:
      return null;
  }
}

export default function Card(props: CardProps) {

  const embedUrl = resolveEmbed(props.typeOfContent, props.link);

  return (
    <div className="border w-96  rounded-lg flex flex-col gap-2 shadow m-4 shadow-md shadow-gray-400/40 overflow-y-auto">
      <div className="flex gap-2 p-4 text-lg font-semibold">
        {props.titleStartWith} {props.title}
      </div>

      <div className="flex flex-col gap-2 p-4 text-lg font-semibold">
        <div>{props.mainContent}</div>

        <div className="flex justify-center ">
          {/* SAFE IFRAME */}
          {embedUrl && (
            <iframe
            
              width="320"
              height="180"
              src={embedUrl}
              allowFullScreen
              className="rounded-lg"
            />
          )}

          {/* LINKEDIN FALLBACK */}
          {props.typeOfContent === "Linkdin" && (
            <a
              href={props.link}
              target="_blank"
              className="text-blue-600 underline"
            >
              View LinkedIn post
            </a>
          )}
        </div>

        <div className="text-sm text-gray-600 flex flex-col justify-center">
          {props.tags.join(" ")}
        </div>
      </div>
    </div>
  );
}
