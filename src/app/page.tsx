import ProductList from "@/components/products/ProductList";
import Modal from "@/components/templates/Modal";

import { store } from "@/store";
import { setStartupProduct } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  store.dispatch(setStartupProduct(data.products));

  return (
    <main>
      {/*2. Image slider with getStatics props */}
      {/*3.  */}
      {/* Modal handle screen pop up */}
      {/* <h1>Workng on payment form.</h1> */}
      <ProductList products={data.product} />
      {/* <Modal /> */}
      {/* <LogIn /> */}
    </main>
  );
}
