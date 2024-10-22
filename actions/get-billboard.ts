import { Billboard } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
	const res = await fetch(`${BASE_URL}/${id}`);
	return res.json();
};

export default getBillboard;
