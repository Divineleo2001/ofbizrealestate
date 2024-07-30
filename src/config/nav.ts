import { SidebarLink } from "@/components/SidebarItems";
import { Edit, Upload, User } from "lucide-react";

export const defaultLinks: SidebarLink[] = [
    { href: "/products", title: "Products", icon: User },
    { href: "/products/create", title: "Create", icon: Edit  },
    { href: "/products/upload", title: "Upload", icon: Upload  },

  ];