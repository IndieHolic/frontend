import classes from "./AppShell.module.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface AppShellProps {
  children: React.ReactNode;
}
export function AppShell({ children }: AppShellProps) {
  return (
    <div className={classes.AppShell}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
