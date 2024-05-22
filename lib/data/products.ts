export const fetchAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    if (res) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
