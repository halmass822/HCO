import { useLoaderData, useParams } from "react-router-dom";

export default function RouterChild() {
    const data = useParams();
    return <>
        <h2>hmm</h2>
        <h2>{data.unit}</h2>
    </>
}