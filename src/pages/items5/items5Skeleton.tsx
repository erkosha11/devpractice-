import ContentLoader from "react-content-loader";

const Items5Skeleton = ({ className }: { className: string }) => (
  <div className={className}>
    <ContentLoader
      speed={2}
      width={397}
      height={480}
      viewBox="0 0 397 479"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="30" ry="30" width="397" height="480" />
    </ContentLoader>
  </div>
);

export default Items5Skeleton;
