import { SubHeader } from "@/components/Game/SubHeader/SubHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <SubHeader>{children}</SubHeader>;
}
