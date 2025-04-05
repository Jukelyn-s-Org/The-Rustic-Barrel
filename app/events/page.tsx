import Navbar from "@/src/components/navbar";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="cursive-font text-4xl font-bold text-center mb-8 text-amber-900">
          Upcoming Events
        </h1>
        <p className="text-xl text-center mb-12 text-amber-800">
          Stay updated on our live music, special nights, and other exciting
          events at The Rustic Barrel.
        </p>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">
            Live Music Fridays
          </h2>
          <p className="text-amber-800">
            Join us every Friday night for live music from talented local
            artists.
          </p>
          <p className="text-sm text-amber-700">Time: 8:00 PM - 11:00 PM</p>
          {/* You can add a list of upcoming artists/dates here */}
        </div>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">
            Trivia Night Tuesdays
          </h2>
          <p className="text-amber-800">
            Test your knowledge and compete with friends every Tuesday for fun
            prizes.
          </p>
          <p className="text-sm text-amber-700">Time: 7:00 PM - 9:00 PM</p>
          {/* You can add more event details here */}
        </div>
      </div>
    </main>
  );
}
