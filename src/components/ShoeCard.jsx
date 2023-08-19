function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer rounded-xl border-2 max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
