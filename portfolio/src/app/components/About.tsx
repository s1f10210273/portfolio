import Image from "next/image";

export default function About() {
  return (
    <div className="m-5 p-4 bg-white rounded-lg overflow-hidden shadow-md">
      <h1 className="text-3xl text-center font-bold m-5">About Me</h1>
      <div className="flex justify-center items-center">
        <Image
          src="/2x3_hero.jpeg"
          width={400}
          height={600}
          className="hidden md:block rounded-lg"
          alt="me"
        />
        <Image
          src="/3x2_hero.jpeg"
          width={150}
          height={100}
          className="block md:hidden rounded-lg"
          alt="me"
        />
      </div>
    </div>
  );
}
