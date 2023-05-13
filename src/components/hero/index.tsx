import Filter from "../filter";


export default function Hero() {
  return (
    <section className="w-full h-[91vh]  flex flex-col align-center pt-36 bg-[url('/bg-image.png')] bg-cover bg-no-repeat bg-center lg:h-[93vh] lg:pt-60">
      <h1 className="text-4xl text-center lg:text-6xl">Discover the most engaging places</h1>
      <button className="bg-[#7B61FF] text-white py-3 px-1 w-48 text-sm rounded-xl self-center mt-4  sm:w-64">Discover on 3D Globe</button>
      <Filter/>
    </section>
  );
}
