import ContentLoader from "react-content-loader";

const Items7Skeleton = ({ className }: { className: string }) => (
  <div className={className}>
    <ContentLoader
      speed={2}
      width={834}
      height={471}
      viewBox="0 0 834 471"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="30" ry="30" width="267" height="471" />
      <rect x="300" y="0" rx="30" ry="30" width="535" height="471" />
    </ContentLoader>
  </div>
);

export default Items7Skeleton;
