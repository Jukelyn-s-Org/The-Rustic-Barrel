import Navbar from "@/src/components/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">
          About The Rustic Barrel
        </h1>
        <p className="text-xl text-center mb-12 text-amber-800">
          Learn more about our story, our passion for craft beverages, and our
          commitment to creating a welcoming atmosphere.
        </p>

        <div className="bg-amber-100 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-amber-800 mb-4">
            Welcome to The Rustic Barrel, a place where good company and great
            drinks come together. Founded with a love for unique beers and
            expertly crafted cocktails, we strive to be your favorite
            neighborhood spot.
          </p>
          <p className="text-lg text-amber-800 mb-4">
            Our selection of beers is carefully curated, featuring local brews
            and exciting finds from around the world. Our bartenders are
            passionate about mixology and are always ready to create the perfect
            drink for you.
          </p>
          <p className="text-lg text-amber-800">
            More than just a bar, The Rustic Barrel is a community hub. We
            believe in fostering a friendly and relaxed environment where
            everyone feels welcome. Come join us and experience the warmth of
            The Rustic Barrel!
          </p>
        </div>
      </div>
    </main>
  );
}
