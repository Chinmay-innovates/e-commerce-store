"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import { useCart } from "@/hooks/use-cart";

import { Button } from "./ui/button";

export default function NavbarActions() {
	const cart = useCart();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();

	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto flex flex-center gap-x-4">
			<Button
				onClick={() => router.push("/cart")}
				className="flex items-center rounded-full bg-black px-4 py-2"
			>
				<ShoppingBag size={20} color="white" />
				<span className="ml-2 text-sm font-medium text-white">
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
}
