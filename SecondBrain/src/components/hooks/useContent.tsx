import { use, useEffect, useState } from "react";
import axios from "axios";


export function useContent() {
  const [content, setContent] = useState<any[]>([]);

  async function refresh() {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/content", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });

      // 🔥 GUARANTEE ARRAY
      setContent(Array.isArray(res.data.contant) ? res.data.contant : []);
    } catch (err) {
      console.error("Error fetching content:", err);
      setContent([]); // 🔥 NEVER undefined
    }
  }

    useEffect(() => {
            refresh();
            let interval = setInterval(() => {
                refresh();
            },10 * 1000);
            return () => clearInterval(interval);
        },[]);
  return content; // 🔥 ALWAYS ARRAY
}

// export function useContent() {
//     const [content, setContent] = useState<any[]>([]);
//     console.log("Fetching content with JWT:", localStorage.getItem("jwt"));
//     function refresh(){ 
//         axios.get("http://localhost:3000/api/v1/content", {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("jwt")}`
//             }
//         }).then(res => {
//             console.log("Raw response:", res.data);
//             setContent(res.data.content);
//         })
//         .catch(err => {
//             console.error("Error fetching content:", err);
//         }); 
//     }
    
//     useEffect(() => {
//         refresh();
//         let interval = setInterval(() => {
//             refresh();
//         },10 * 1000);
//         return () => clearInterval(interval);
//     },[]);
    

//     return content;
// }
