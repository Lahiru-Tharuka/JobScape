const apiUrl = import.meta?.env?.VITE_API_URL || process.env.VITE_API_URL;

if (!apiUrl) {
  const message =
    "VITE_API_URL is not defined. Please set VITE_API_URL in your environment.";
  console.warn(message);
  throw new Error(message);
}

export default apiUrl;
