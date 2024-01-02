import styled, { css, keyframes } from "styled-components";

import { COLORS } from "theme/colors";

const transform = keyframes`
   0%,
      100% {
        border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
      }

      20% {
        border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
      }

      40% {
        border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
      }

      60% {
        border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
      }

      80% {
        border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
      }
`;

const movementOne = keyframes`
       0%,
      100% {
        transform: none;
      }

      50% {
        transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
      }
    `;
const movementTwo = keyframes`0%,
      500% {
        transform: none;
      }

      50% {
        transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
      }`;

export const BlobsContainer = styled.div`
  align-items: center;
  background: #0e2a47;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const height = ["200px", "500px", "350px"];
const width = ["200px", "500px", "350px"];
const left = ["70%", "-200px", "500px"];
const top = ["50%", "-150px", "-150px"];
const animation = [
  css`
    ${transform} 20s ease-in-out infinite both alternate, ${movementOne} 40s ease-in-out infinite both
  `,
  css`
    ${transform} 30s ease-in-out infinite both alternate, ${movementTwo} 60s ease-in-out infinite both
  `,
  css`
    ${transform} 30s ease-in-out infinite both alternate, ${movementTwo} 60s ease-in-out infinite both
  `,
];

const transform2 = ["none", "rotate(-180deg)", "rotate(-180deg)"];

export const Blob = styled.div<{ $item: number }>`
  animation: ${({ $item }) => animation[$item]};
  background: ${COLORS.accent2};
  border-radius: "30% 50% 20% 40%";
  height: ${({ $item }) => height[$item]};
  left: ${({ $item }) => left[$item]};
  opacity: 0.7;
  position: absolute;
  top: ${({ $item }) => top[$item]};
  transform: ${({ $item }) => transform2[$item]};
  width: ${({ $item }) => width[$item]};
`;
