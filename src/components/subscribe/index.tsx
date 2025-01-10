import React, { FormEvent, useState } from "react";
import {
  Button,
  Container,
  Description,
  Image,
  ImageWrapper,
  Info,
  Input,
  SubscribeContainer,
  Title,
} from "./subscribe.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Modal } from "./modal";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

interface SubscribeProps {}

export const Subscribe: React.FC<SubscribeProps> = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <SubscribeContainer>
      <Container>
        <Info>
          <Title>Subscribe</Title>
          <Description>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Description>
          <form onSubmit={handleSubmit} className="form-container">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Button type="submit">
              Subscribe <PlayArrowIcon />
            </Button>
          </form>
        </Info>
        <ImageWrapper>
          <Image
            src="https://picsum.photos/536/354"
            alt="Subscribe to our newsletter"
          />
        </ImageWrapper>
      </Container>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} handleClose={handleClose} />
      )}
    </SubscribeContainer>
  );
};
