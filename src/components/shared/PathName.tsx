import { usePathname } from "next/navigation"

export const PathName=({prop}:{prop:string})=>{
    const pathname=usePathname();
    const basePath=pathname.includes(prop)?pathname:pathname+"/"+prop+"/";

    return basePath;
}