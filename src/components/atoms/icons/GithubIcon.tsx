import { SVGProps } from "react";
import tailwindConfig from "tailwind.config";

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9609 31.4219C13.9609 31.5781 13.7812 31.7031 13.5547 31.7031C13.2969 31.7266 13.1172 31.6016 13.1172 31.4219C13.1172 31.2656 13.2969 31.1406 13.5234 31.1406C13.7578 31.1172 13.9609 31.2422 13.9609 31.4219ZM11.5312 31.0703C11.4766 31.2266 11.6328 31.4062 11.8672 31.4531C12.0703 31.5312 12.3047 31.4531 12.3516 31.2969C12.3984 31.1406 12.25 30.9609 12.0156 30.8906C11.8125 30.8359 11.5859 30.9141 11.5312 31.0703ZM14.9844 30.9375C14.7578 30.9922 14.6016 31.1406 14.625 31.3203C14.6484 31.4766 14.8516 31.5781 15.0859 31.5234C15.3125 31.4687 15.4688 31.3203 15.4453 31.1641C15.4219 31.0156 15.2109 30.9141 14.9844 30.9375ZM20.125 1C9.28906 1 1 9.22656 1 20.0625C1 28.7266 6.45312 36.1406 14.2422 38.75C15.2422 38.9297 15.5938 38.3125 15.5938 37.8047C15.5938 37.3203 15.5703 34.6484 15.5703 33.0078C15.5703 33.0078 10.1016 34.1797 8.95312 30.6797C8.95312 30.6797 8.0625 28.4062 6.78125 27.8203C6.78125 27.8203 4.99219 26.5937 6.90625 26.6172C6.90625 26.6172 8.85156 26.7734 9.92188 28.6328C11.6328 31.6484 14.5 30.7812 15.6172 30.2656C15.7969 29.0156 16.3047 28.1484 16.8672 27.6328C12.5 27.1484 8.09375 26.5156 8.09375 19C8.09375 16.8516 8.6875 15.7734 9.9375 14.3984C9.73438 13.8906 9.07031 11.7969 10.1406 9.09375C11.7734 8.58594 15.5312 11.2031 15.5312 11.2031C17.0938 10.7656 18.7734 10.5391 20.4375 10.5391C22.1016 10.5391 23.7812 10.7656 25.3438 11.2031C25.3438 11.2031 29.1016 8.57812 30.7344 9.09375C31.8047 11.8047 31.1406 13.8906 30.9375 14.3984C32.1875 15.7812 32.9531 16.8594 32.9531 19C32.9531 26.5391 28.3516 27.1406 23.9844 27.6328C24.7031 28.25 25.3125 29.4219 25.3125 31.2578C25.3125 33.8906 25.2891 37.1484 25.2891 37.7891C25.2891 38.2969 25.6484 38.9141 26.6406 38.7344C34.4531 36.1406 39.75 28.7266 39.75 20.0625C39.75 9.22656 30.9609 1 20.125 1ZM8.59375 27.9453C8.49219 28.0234 8.51562 28.2031 8.64844 28.3516C8.77344 28.4766 8.95312 28.5312 9.05469 28.4297C9.15625 28.3516 9.13281 28.1719 9 28.0234C8.875 27.8984 8.69531 27.8437 8.59375 27.9453ZM7.75 27.3125C7.69531 27.4141 7.77344 27.5391 7.92969 27.6172C8.05469 27.6953 8.21094 27.6719 8.26562 27.5625C8.32031 27.4609 8.24219 27.3359 8.08594 27.2578C7.92969 27.2109 7.80469 27.2344 7.75 27.3125ZM10.2812 30.0937C10.1562 30.1953 10.2031 30.4297 10.3828 30.5781C10.5625 30.7578 10.7891 30.7812 10.8906 30.6562C10.9922 30.5547 10.9453 30.3203 10.7891 30.1719C10.6172 29.9922 10.3828 29.9687 10.2812 30.0937ZM9.39062 28.9453C9.26562 29.0234 9.26562 29.2266 9.39062 29.4062C9.51562 29.5859 9.72656 29.6641 9.82812 29.5859C9.95312 29.4844 9.95312 29.2812 9.82812 29.1016C9.71875 28.9219 9.51562 28.8437 9.39062 28.9453Z"
        fill={props.color ?? tailwindConfig.theme.extend.colors.brandWhite}
      />
    </svg>
  );
};