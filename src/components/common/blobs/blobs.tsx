import React from "react";

import { Blob, BlobsContainer } from "./blobs.styled";

export const Blobs = () => (
  <BlobsContainer>
    <Blob $item={0} />
    <Blob $item={1} />
    <Blob $item={2} />
  </BlobsContainer>
)
