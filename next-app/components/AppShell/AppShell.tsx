import classes from "./AppShell.module.css";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface AppShellProps {
  children: React.ReactNode;
}
export function AppShell({ children }: AppShellProps) {
  return (
    <section className={classes.AppShell}>
      <Header />
      <section className={classes.MainSection}>{children}</section>
      <Footer />
    </section>
  );
}
