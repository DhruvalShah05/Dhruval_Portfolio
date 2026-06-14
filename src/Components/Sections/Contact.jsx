import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { FiCode } from "react-icons/fi";
import Section from "../Ui/Section";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import ResumeButton from "../Ui/ResumeButton";
import { SITE } from "../../data/portfolio";
import { THEME } from "../../theme";

const inputClass = `w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted/60 text-sm ${THEME.accentRing}`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("error");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      window.location.href = `mailto:${SITE.email}?subject=Portfolio contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          full_message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        },
        userId,
      );
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to internships and junior SDE roles. Reach out anytime."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <a
            href={`mailto:${SITE.email}`}
            className={`flex items-center gap-3 group ${THEME.linkSecondary}`}
          >
            <span
              className={`p-2.5 rounded-lg border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.groupHoverAccentBorder}`}
            >
              <SiGmail size={18} style={{ color: "#EA4335" }} />
            </span>
            <span className="text-sm break-all">{SITE.email}</span>
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 group ${THEME.linkSecondary}`}
          >
            <span
              className={`p-2.5 rounded-lg border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.groupHoverAccentBorder}`}
            >
              <FaGithub size={18} style={{ color: "#FFFFFF" }} />
            </span>
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 group ${THEME.linkSecondary}`}
          >
            <span
              className={`p-2.5 rounded-lg border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.groupHoverAccentBorder}`}
            >
              <FaLinkedin size={18} style={{ color: "#0A66C2" }} />
            </span>
            <span className="text-sm">LinkedIn</span>
          </a>
          {SITE.codolio && (
            <a
              href={SITE.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 group ${THEME.linkSecondary}`}
            >
              <span
                className={`p-2.5 rounded-lg border ${THEME.borderDefault} ${THEME.bgSurface} ${THEME.groupHoverAccentBorder}`}
              >
                <FiCode className="text-accent" size={18} />
              </span>
              <span className="text-sm">Codolio</span>
            </a>
          )}
          <ResumeButton size="md">Download Resume</ResumeButton>
        </div>

        <Card className="lg:col-span-3" hover={false}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className={inputClass}
            />
            <textarea
              placeholder="Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className={`${inputClass} resize-none`}
            />
            <Button type="submit" variant="primary" className="w-full">
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-accent">Message sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Try email directly.
              </p>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
}
