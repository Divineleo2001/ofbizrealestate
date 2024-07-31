import { Navbar } from "@/components/shared/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar>{children}</Navbar>
    </section>
  );
}
