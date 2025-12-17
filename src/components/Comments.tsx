/* Reference: https://www.thomasledoux.be/blog/hosting-blog-comments-reactions-github-discussions */

import Giscus from "@giscus/react";
import * as React from "react";

const id = "inject-comments";

const Comments = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id={id}>
      {mounted ? (
        <Giscus
          id={id}
          repo="mhetrerajat/mhetrerajat.github.io"
          repoId="MDEwOlJlcG9zaXRvcnk2MzEyNjc1Mw=="
          category="Announcements"
          categoryId="DIC_kwDOA8M84c4CdFPu"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          theme="preferred_color_scheme"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

export default Comments;
