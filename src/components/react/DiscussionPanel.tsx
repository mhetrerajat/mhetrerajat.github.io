import Giscus from '@giscus/react';

export default function DiscussionPanel() {
  return (
    <Giscus
      id="comments"
      repo="mhetrerajat/mhetrerajat.github.io"
      repoId="MDEwOlJlcG9zaXRvcnk2MzEyNjc1Mw=="
      category="Posts"
      categoryId="DIC_kwDOA8M84c4CdFPu"
      mapping="pathname"
      strict='0'
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}