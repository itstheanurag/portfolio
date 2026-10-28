import SectionIndex from "@/components/section-index";
import StatusRail from "@/components/status-rail";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[132px_minmax(0,1fr)] xl:grid-cols-[132px_minmax(0,1fr)_176px]">
        <SectionIndex />
        <div className="min-w-0 lg:border-x lg:border-line">{children}</div>
        <StatusRail />
      </div>
    </div>
  );
}
