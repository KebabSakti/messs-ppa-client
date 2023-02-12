function ButtonComponent({
  onClick,
  text,
  loading = false,
  className = "",
}: {
  onClick: () => void;
  loading: boolean;
  text: string;
  className: string;
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={loading}
        className={`disabled:bg-background focus:bg-primaryDarker ${className}`}
      >
        <p>{loading ? "LOADING" : text}</p>
      </button>
    </>
  );
}

export default ButtonComponent;
