import Image from "next/image";
import Portfolio from "../../portfolio";

export default function Port({ params }: { params: { id: string } }) {
  console.log(params.id);
  const portfolioItem = Portfolio.find(item => item.id === parseInt(params.id));
  return (
    <main>
      <h1 className="m-5 text-5xl text-center font-bold">{portfolioItem?.title}</h1>
      <div className="flex justify-center">
      <figure className="ml-5 mr-5 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <div className="">
            <Image
              src={portfolioItem!.image_url}
              width={1000}
              height={100}
              className="rounded-lg"
              alt=""
            />
          </div>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p>{portfolioItem?.description}</p>
          </figcaption>
        </figure>
      </div>
      <div className="m-5 p-4 bg-white rounded-lg overflow-hidden shadow-md">

        <h1>{portfolioItem?.title}</h1>
        <p>{portfolioItem?.description}</p>
      </div>
    </main>
  );
}
