import { THEME } from "../../theme";

export default function Tag({ children }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${THEME.accentTag}`}>
      {children}
    </span>
  );
}
