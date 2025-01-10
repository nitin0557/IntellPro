import React from "react";
import {
  ModalContent,
  ModalOverlay,
  ModalText,
  ModalTitle,
  Button,
} from "./modal.style";

interface ModalProps {
  isModalOpen: Boolean;
  handleClose: () => void;
}
export const Modal: React.FC<ModalProps> = ({ handleClose, isModalOpen }) => {
  if (!isModalOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Success!</ModalTitle>
        <ModalText>Thank you for subscribing to our newsletter!</ModalText>
        <Button onClick={handleClose}>Close</Button>
      </ModalContent>
    </ModalOverlay>
  );
};
