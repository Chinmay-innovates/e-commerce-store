"use client";

import { PreviewModal } from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
	const [isMounted, seIsMounted] = useState(false);
	useEffect(() => {
		seIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return (
		<>
			<PreviewModal />
		</>
	);
};

export default ModalProvider;
