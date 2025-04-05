import Navbar from "@/src/components/navbar";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="cursive-font text-4xl font-bold text-center mb-8 text-amber-900">
          Our Delicious Menu
        </h1>
        <p className="text-xl text-center mb-12 text-amber-800">
          Explore our wide selection of craft beers, artisanal cocktails, and
          tasty bites.
        </p>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">Beers</h2>
          <p className="text-amber-800">
            A curated selection of local and international craft beers on tap
            and in bottles.
          </p>
          {/* You'll add your beer list here */}
        </div>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">
            Cocktails
          </h2>
          <p className="text-amber-800">
            Handcrafted cocktails using premium spirits and fresh ingredients.
          </p>
          {/* You'll add your cocktail list here */}
        </div>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">Food</h2>
          <p className="text-amber-800">
            Delicious appetizers and small plates to complement your drinks.
          </p>
          {/* You'll add your food menu here */}
        </div>
      </div>
    </main>
  );
}
