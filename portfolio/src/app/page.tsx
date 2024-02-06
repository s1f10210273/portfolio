import About from "./components/About";
import Card from "./components/Card";
import Portfolio from "./portfolio";


function createCard(content: CardProps) {
  return (
    <Card
      id = {content.id}
      title = {content.title}
      image_url = {content.image_url}
    />
  )
}
export default function Home() {
  return (
    <main>
      <div id="AboutMe">
        <About />
      </div>
      <div id="Portfolio">
        <div className="m-5 p-4 bg-white rounded-lg overflow-hidden shadow-md">
        <h1 className="text-3xl text-center font-bold m-5">Portfolio</h1>
          <div className="flex overflow-x-auto">
            {Portfolio.map(createCard)}
          </div>
        </div>
      </div>
    </main>
  );
}
