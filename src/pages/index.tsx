import { CacheProvider } from "@emotion/react";
import { ImageEditor } from "blinq-image-editor";
import React from "react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "xlgcyzurhl",
});

export function IndexPage() {
  return (
    <CacheProvider value={cache}>
      <div>
        <ImageEditor />
      </div>
    </CacheProvider>
  );
}

export default IndexPage;
