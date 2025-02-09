import { forwardRef } from "react";
import clsx from "clsx";
import { TbBusinessplan, TbMenu2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

const AppScreen = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      <div className="flex justify-between items-center px-4 pt-4">
        <TbMenu2 className="text-xl text-white" />
        <span className="flex gap-2 items-center justify-center">
          {" "}
          <TbBusinessplan className="md:text-5xl text-4xl text-white" />{" "}
          <span className="text-white">SmartVest</span>
          <span className="text-white">.</span>
        </span>
        <FaUser className="text-xl text-white" />
      </div>
      {children}
    </div>
  );
};

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {/* {children} */}
    </div>
  );
});

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {/* {children} */}
    </div>
  );
});

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("mt-6 flex-auto rounded-t-2xl bg-white", className)}
    >
      {children}
    </div>
  );
});

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  );
});
export default AppScreen;
