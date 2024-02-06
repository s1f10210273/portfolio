import Image from "next/image";
import Link from "next/link";

export default function Card(props: CardProps) {
  return (
    <div className="m-4" style={{ width: "320px" }}>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/portfolio/${props.id}`}>
          <Image
            src={props.image_url}
            width={400}
            height={400}
            className="rounded-t-lg"
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link href={`/portfolio/${props.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ height: "6rem", width: "13rem" }}>
              {props.title}
            </h5>
          </Link>
          <Link
            href={`/portfolio/${props.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ whiteSpace: "nowrap" }}
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
