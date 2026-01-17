import { X } from "lucide-react";
import { Input } from "./ui/input";
import Button from "./ui/button";
import { useRef } from "react";

interface NewCardProps {
  open: boolean;
  onClose: () => void;
}

export default function NewCard({ open, onClose }: NewCardProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const contentLinkRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const typeOfContentRef = useRef<HTMLInputElement>(null);

  async function AddContent() {
    const title = titleRef.current?.value;
    const mainContent = contentRef.current?.value;
    const link = contentLinkRef.current?.value;
    const tags = tagsRef.current?.value;
    const typeOfContent = typeOfContentRef.current?.value;

    // ✅ CORRECT KEY
    const token = localStorage.getItem("jwt");
    console.log("Token:", token);

    if (!token) {
      alert("User not authenticated");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/v1/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          mainContent,
          link,
          tags,
          typeOfContent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert(data.msg || "Failed to add content");
        return;
      }

      alert("Content added successfully");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Adding content failed");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="relative bg-white min-w-40 min-h-40 rounded-lg p-10">
        <X
          className="absolute top-3 right-3 w-5 h-5 text-gray-600 cursor-pointer hover:text-black"
          onClick={onClose}
        />

        <div className="mb-4 text-lg font-semibold">Add content</div>

        <div className="flex flex-col gap-2 ml-5">
          <Input ref={titleRef} placeholder="Title" type="text" />
          <Input ref={contentRef} placeholder="Content" type="text" />
          <Input ref={contentLinkRef} placeholder="Content Link" type="text" />
          <Input ref={tagsRef} placeholder="Tags" type="text" />
          <Input
            ref={typeOfContentRef}
            placeholder="Type of content"
            type="text"
          />

          <Button
            variant="Primary"
            size="md"
            text="Add Content"
            onClick={AddContent}
          />
        </div>
      </div>
    </div>
  );
}
