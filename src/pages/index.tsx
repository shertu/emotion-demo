import React from "react";
import dynamic from "next/dynamic";

const ImageEditor = dynamic(
  async () => (await import("blinq-image-editor")).ImageEditor,
  {
    ssr: false,
  }
);

export function IndexPage() {
  return (
    <div>
      <ImageEditor imageSrc="https://picsum.photos/300/200" />
    </div>
  );
}

export default IndexPage;
