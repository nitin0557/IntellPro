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


export const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setIsModalOpen(true);
  };


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
            src="https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/623104e9b3e071663f5059df_mobile%20folio.png"
            alt="Subscribe"
          />
        </ImageWrapper>
      </Container>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} handleClose={handleClose} />
      )}
    </SubscribeContainer>
  );
};
