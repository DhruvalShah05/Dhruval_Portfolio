import Button from "./Button.jsx";
import { getResumeLinkProps } from "../../utils/resume";

export default function ResumeButton({
  children = "Resume",
  variant = "outline",
  size = "md",
  className = "",
}) {
  const linkProps = getResumeLinkProps();

  if (!linkProps) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      href={linkProps.href}
      target={linkProps.target}
      rel={linkProps.rel}
      download={linkProps.download}
    >
      {children}
    </Button>
  );
}
