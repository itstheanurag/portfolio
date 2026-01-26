import Dock from "@/components/dock";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Dock />
    </>
  );
}
