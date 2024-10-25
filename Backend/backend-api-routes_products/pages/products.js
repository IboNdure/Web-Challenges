// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function ProductsPage() {
//   const { data, error } = useSWR("/api/products", fetcher);

//   if (error) return <div>Fehler beim Laden der Produkte</div>;
//   if (!data) return <div>Laden...</div>;

//   return (
//     <ul>
//       {data.map((product) => (
//         <li key={product.id}>
//           <a href={`/products/${product.id}`}>{product.name}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
