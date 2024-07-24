// can you provide me the boiler plate code for the layout.tsx

import { Navbar } from "@/components/shared/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar children={children} />
    </section>
  );
}
