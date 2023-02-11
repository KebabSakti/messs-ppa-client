import { SpinnerComponent } from "../component/SpinnerComponent";

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
        className="bg-primary py-3 font-semibold text-onPrimary w-full rounded-full disabled:bg-background focus:bg-primaryDarker flex justify-center"
        disabled={loading}
      >
        <p>{loading ? <SpinnerComponent /> : text}</p>
      </button>
    </>
  );
}

export default ButtonComponent;
