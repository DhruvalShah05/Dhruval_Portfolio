import Button from "../Ui/Button";
import { SITE } from "../../data/portfolio";
import { GRADIENT_TEXT, THEME } from "../../theme";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className={`${THEME.overlineAccent} mb-4`}>{SITE.role}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight">
              Hi, I&apos;m{" "}
              <span className={GRADIENT_TEXT}>{SITE.name.split(" ")[0]}</span>
            </h1>
            <p
              className={`mt-6 ${THEME.textSecondary} text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0`}
            >
              {SITE.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="outline">
                Contact
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110"
                aria-hidden
              />
              <img
                src={SITE.profileImage}
                alt={SITE.name}
                width={288}
                height={288}
                loading="eager"
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover object-top border-2 border-border shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
