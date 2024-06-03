type FormObject = {
  [key: string]: string | File | string[] | File[];
};

export const constructFormObject = (formData: FormData): FormObject => {
  const formObject: FormObject = {};

  formData.forEach((value, key) => {
    if (key === "images") {
      if (!formObject.hasOwnProperty(key)) {
        formObject[key] = [];
      }
      (formObject[key] as File[]).push(value as File);
    } else {
      formObject[key] = value as string;
    }
  });

  return formObject;
};
