export const generateLinkFromArray = (elements: string[], dynamicElement?: string) => {
  const modifiedElements = elements?.map((element) => {
    if (element === null) {
      return dynamicElement ?? '';
    }

    return element;
  });

  return modifiedElements.join('/');
};
