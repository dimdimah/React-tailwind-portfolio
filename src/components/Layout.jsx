export default function project({ title, children, className }) {
  return (
    <div className="h-full px-8 py-20 lg:py-5 bg-[#FFF8F8]">
      <div className="h-full lg:px-10 lg:mt-10">
        <p
          className={`my-2 text-2xl font-bold underline underline-offset-8 lg:text-4xl  ${className}`}
        >
          {title}
        </p>
        <div className="my-5 text-lg lg:text-xl lg:flex">{children}</div>
      </div>
    </div>
  );
}
