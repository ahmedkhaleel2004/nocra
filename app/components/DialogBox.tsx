// DialogBox.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DialogBoxProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode; // To render the feedback content
}

const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, onClose, children }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 flex justify-center items-center p-4"
					onClick={onClose}
				>
					<motion.div
						className="bg-white shadow-custom-large rounded-lg p-6"
						onClick={(e) => e.stopPropagation()} // Prevents click event from reaching the overlay
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.9 }}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default DialogBox;
