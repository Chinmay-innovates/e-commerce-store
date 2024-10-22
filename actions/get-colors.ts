import { Color } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
	const res = await fetch(BASE_URL);
	return res.json();
};

export default getColors;
