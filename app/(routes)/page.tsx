import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;
export default async function HomePage() {
	const products = await getProducts({ isFeatured: true });
	const billboards = await getBillboard("40891489-60ae-4acc-b9dd-2f5380b9ee0b");
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboards} />

				<div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
}
