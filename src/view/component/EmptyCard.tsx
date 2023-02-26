import emptyLogo from "../../assets/cloud-computing.png";

function EmptyCard(props:any) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={emptyLogo} alt="No Data" className="w-20 mx-auto" />
      <p className="text-onBackground text-center">{props.message ?? 'Data tidak ditemukan'}</p>
    </div>
  );
}

export { EmptyCard };
