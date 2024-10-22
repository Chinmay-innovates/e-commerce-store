import { Category } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
	const res = await fetch(`${BASE_URL}/${id}`);
	return res.json();
};

export default getCategory;
