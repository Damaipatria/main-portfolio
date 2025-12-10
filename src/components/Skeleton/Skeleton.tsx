export type SkeletonProps = {
  variant: "text" | "card" | "custom";
  count?: number;
  className?: string;
};

const variants = {
  text: "w-full h-3 rounded-md",
  avatar: "w-12 h-12 rounded-full",
  card: "w-full h-40 rounded-lg",
};

export const Skeleton = ({
  variant = "text",
  count = 1,
  className,
}: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count })?.map((_: any, i: number) => (
        <div
          key={i}
          // role="status"
          aria-label="memuat konten"
          className={`${className} ${
            variant !== "custom" && variants[variant]
          } bg-gray-200 animate-pulse`}
        ></div>
      ))}
    </>
  );
};
