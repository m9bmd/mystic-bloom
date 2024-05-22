type FormObject = {
  [key: string]: string | File | string[] | File[];
};
export const constructFormObject = (formData: FormData) => {
  const formObject: FormObject = {};

  formData.forEach((value, key) => {
    if (key === "images") {
      if (!formObject.hasOwnProperty(key)) {
        formObject[key] = [];
      }
      //@ts-ignore
      formObject[key].push(value);
    } else {
      formObject[key] = value;
    }
  });

  return formObject;
};
