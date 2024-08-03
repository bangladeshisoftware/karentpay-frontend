import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <ResizablePanelGroup direction="horizontal">
        {children}
      </ResizablePanelGroup>
    </section>
  );
}
