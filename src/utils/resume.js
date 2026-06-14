/** Resume link — only source: VITE_RESUME_URL in .env */

export function getResumeUrlFromEnv() {
  return import.meta.env.VITE_RESUME_URL?.trim() ?? "";
}

export function isDriveFolderUrl(url) {
  return Boolean(url?.includes("drive.google.com/drive/folders"));
}

export function getDriveFileId(url) {
  if (!url) return null;
  const fileMatch = url.match(/\/file\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];
  const idMatch = url.match(/[?&]id=([^&]+)/);
  if (idMatch) return idMatch[1];
  return null;
}

export function getResumeLinkProps() {
  const url = getResumeUrlFromEnv();
  if (!url) {
    return null;
  }

  if (isDriveFolderUrl(url)) {
    return {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  const fileId = getDriveFileId(url);
  if (fileId) {
    return {
      href: `https://drive.google.com/file/d/${fileId}/preview`,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  return {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}
