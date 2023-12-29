import classes from "./AppShell.module.css";
import { Header } from "./Header/Header";

interface AppShellProps {
  children: React.ReactNode;
}
export function AppShell({ children }: AppShellProps) {
  return (
    <div className={classes.AppShell}>
      <div className={classes.HeaderSection}>
        <Header />
      </div>
      {children}
      <div className={classes.FooterSection}></div>
    </div>
  );
}
