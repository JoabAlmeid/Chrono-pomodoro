import type React from "react";
import { Container } from "../../components/Container";

import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";

import { Menu } from "../../components/Menu";

type MainTemplatesProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
