
const Container = ({
  children,
  className,
  style,
}) => {
  return (
    <section className={` w-full  ${className}`} style={style}>
      <div className="mx-auto  mb-[120px] w-[86.1%] max-w-[1440px] ">
        {children}
      </div>
    </section>
  );
};

export default Container;
