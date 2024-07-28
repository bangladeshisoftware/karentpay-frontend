import { convert } from "html-to-text";

export const htmlToTextConverter = (html) => {
  return convert(html);
};
