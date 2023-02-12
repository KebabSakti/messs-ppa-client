
function ButtonComponent({
  onClick,
  text,
  loading = false,
}: {
  onClick: () => void;
  loading: boolean;
  text: string;
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={loading}
        className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full disabled:bg-background focus:bg-primaryDarker flex justify-center"
      >
        <p>{loading ? "LOADING" : text}</p>
      </button>
    </>
  );
}

export default ButtonComponent;
