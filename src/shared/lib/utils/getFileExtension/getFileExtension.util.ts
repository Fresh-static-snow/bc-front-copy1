export const getFileExtension = (fileName: string): string => {
  const re = /(?:\.([^.]+))?$/;

  return re.exec(fileName)[1];
};
