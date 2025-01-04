import { SVGProps } from "react";
import tailwindConfig from "tailwind.config";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.936 5.818C10.936 6.94741 10.5693 7.99069 9.95172 8.83713L13.0668 11.9547C13.3744 12.2623 13.3744 12.7618 13.0668 13.0693C12.7592 13.3769 12.2597 13.3769 11.9522 13.0693L8.83708 9.95177C7.99064 10.5718 6.94736 10.936 5.81795 10.936C2.99075 10.936 0.699951 8.6452 0.699951 5.818C0.699951 2.9908 2.99075 0.700001 5.81795 0.700001C8.64515 0.700001 10.936 2.9908 10.936 5.818ZM5.81795 9.36123C6.28326 9.36123 6.744 9.26958 7.17389 9.09152C7.60377 8.91346 7.99437 8.65246 8.32339 8.32344C8.65241 7.99442 8.91341 7.60382 9.09147 7.17394C9.26954 6.74405 9.36118 6.28331 9.36118 5.818C9.36118 5.3527 9.26954 4.89195 9.09147 4.46207C8.91341 4.03218 8.65241 3.64158 8.32339 3.31256C7.99437 2.98354 7.60377 2.72255 7.17389 2.54448C6.744 2.36642 6.28326 2.27477 5.81795 2.27477C5.35265 2.27477 4.8919 2.36642 4.46202 2.54448C4.03213 2.72255 3.64153 2.98354 3.31251 3.31256C2.98349 3.64158 2.7225 4.03218 2.54443 4.46207C2.36637 4.89195 2.27472 5.3527 2.27472 5.818C2.27472 6.28331 2.36637 6.74405 2.54443 7.17394C2.7225 7.60382 2.98349 7.99442 3.31251 8.32344C3.64153 8.65246 4.03213 8.91346 4.46202 9.09152C4.8919 9.26958 5.35265 9.36123 5.81795 9.36123Z"
        fill={props.color ?? tailwindConfig.theme.extend.colors.brandBlack}
      />
    </svg>
  );
};