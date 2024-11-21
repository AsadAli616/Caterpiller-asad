

export const sendEmail = async (obj) => {
    const added = await fetch(`${process.env.BASE_URL}api/categories`, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    if (added.ok) {
      console.log("Category added successfully");
      revalidatePath("/admin/categories");
    }
  };