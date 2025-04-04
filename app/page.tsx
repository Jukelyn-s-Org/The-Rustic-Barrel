import Navbar from "@/src/components/navbar";
import Carousel from "@/src/components/carousel";
import { Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Navbar />
      <Carousel />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">
          Person Street Bar
        </h1>
        <p className="text-xl text-center mb-12 text-amber-800">
          Stylish neighborhood joint with bar games, a covered patio offering
          cocktails, and craft beers on tap. A staple experience of Raleigh
          Downtown.
        </p>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900 flex items-center">
            <Clock className="mr-2" /> Hours of Operation
          </h2>
          <ul className="space-y-2 text-amber-800">
            <li>Monday - Friday: 4:00 PM - 2:00 AM</li>
            <li>Saturday & Sunday: 2:00 PM - 2:00 AM</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
