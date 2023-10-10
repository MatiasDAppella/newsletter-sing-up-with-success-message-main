export default function Page(){
  return (<main className="bg-clr-white w-full h-full">
    <img
      className="w-full"
      src="/assets/images/illustration-sign-up-mobile.svg"
    />
    <div id="wrapper" className="my-8 mx-6">
      <h1 className="roboto-bold text-[3em] m-0 p-0">
        Stay updated!
      </h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="list-image-[url(/assets/images/icon-list.svg)] list-inside my-8 flex flex-col gap-3">
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </div>
  </main>)
}