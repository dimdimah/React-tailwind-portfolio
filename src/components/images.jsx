function ReusableCard({ imageSrc, alt, className }) {
  return (
    <div
      className={`mx-3 my-5 shadow-xl card w-96 bg-base-100 image-full${className}`}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  );
}

export default ReusableCard;
