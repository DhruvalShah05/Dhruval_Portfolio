export function formatDateRange(start, end) {
  const options = { month: "short", year: "numeric" };
  const startDate = new Date(start);

  const endLabel =
    end === "present"
      ? "Present"
      : new Date(end).toLocaleDateString("en-US", options);

  return `${startDate.toLocaleDateString("en-US", options)} – ${endLabel}`;
}

export function calculateExperienceByType(data, type) {
  let totalMonths = 0;

  data
    .filter((job) => job.type === type)
    .forEach((job) => {
      const startDate = new Date(job.startDate);
      const endDate =
        job.endDate === "present" ? new Date() : new Date(job.endDate);

      const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) +
        1;

      totalMonths += months;
    });

  if (totalMonths <= 0) return "0 Months";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) return `${years} Years ${months} Months`;
  if (years > 0) return `${years} Year${years > 1 ? "s" : ""}`;
  return `${totalMonths} Month${totalMonths > 1 ? "s" : ""}`;
}

export function getExperienceSummary(experienceData) {
  return {
    internships: calculateExperienceByType(experienceData, "Internship"),
    work: calculateExperienceByType(experienceData, "Work"),
  };
}
