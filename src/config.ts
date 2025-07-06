const BASE_PATH = import.meta.env.BASE_URL;

export const IMAGE_PATH =
  import.meta.env.MODE === "development" ? "/images/" : "/images/";
