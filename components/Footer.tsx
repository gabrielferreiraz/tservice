import { COMPANY } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pb-24 pt-10 sm:px-6 sm:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo variant="header" theme="dark" />
        <p className="text-sm text-paper/50">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
