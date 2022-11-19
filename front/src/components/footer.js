import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from '../styles/FooterStyle';

export default function MainFooter() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/about">Team 12</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Notion</FooterLink>
          </Column>
          <Column>
            <Heading>Stacks</Heading>
            <FooterLink href="#">Back-End</FooterLink>
            <FooterLink href="#">Front-End</FooterLink>
            <FooterLink href="#">AI-Construction</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://github.com/Nayeon97">
              Nayeon Kim
            </FooterLink>
            <FooterLink href="https://github.com/Shin-GC?tab=repositories'">
              Gwangcheong Shin
            </FooterLink>
            <FooterLink href="https://github.com/Baejuyoung?tab=repositories">
              Jooyeong Bae
            </FooterLink>
            <FooterLink href="https://github.com/hosahn/hosahn.github.io">
              Hosan Lee
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}