import { useParams } from "react-router";

function MessPage() {
  const { id } = useParams();

  return <>Mess Detail : {id}</>;
}

export { MessPage };
