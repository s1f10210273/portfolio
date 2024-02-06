import Image from "next/image";

export default function About() {
  return (
    <div className="m-5 p-4 bg-white rounded-lg overflow-hidden shadow-md">
      <h1 className="text-3xl text-center font-bold m-5">About Me</h1>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="m-2 flex flex-col items-center justify-center bg-white p-8 rounded-lg md:w-1/2">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-center mb-2">名前: 押久保秀英</h2>
            <h2 className="text-center mb-2">出身: 東京都江戸川区</h2>
            <h2 className="text-center mb-2">生年月日: 2002年8月11日</h2>
            <h2 className="text-center mb-2">
              趣味: ギター・プログラミング・写真
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center rtl:text-right text-gray-800 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:border-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">2018年4月</td>
                  <td className="px-6 py-4">私立京華高校 入学</td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">2021年4月</td>
                  <td className="px-6 py-4">私立京華高校 卒業</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">2021年4月</td>
                  <td className="px-6 py-4">東洋大学 情報連携学部 入学</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative">
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
    </div>
  );
}
