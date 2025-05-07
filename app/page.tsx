import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-amber-950 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-black rounded-md p-1.5">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">Products</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium hover:text-black/70 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-black/70 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="font-medium hover:text-black/70 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="font-medium hover:text-black/70 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-black/70 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <Link
            href="/get-started"
            className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-black/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-black text-white">
          <div className="container mx-auto px-4 py-12 md:py-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 py-8 md:py-16">
                <p className="uppercase tracking-wider text-sm font-medium">
                  Live for quality
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Our Products
                </h1>
                <p className="text-lg text-gray-300 max-w-md">
                  Explore our top-quality products designed to meet your needs.
                  Influential, innovative and progressive.
                </p>
                <div className="flex gap-4 items-center">
                  <Link
                    href="/products"
                    className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
                  >
                    View All Products
                  </Link>
                  <Link
                    href="/trending"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <TrendingUp className="h-5 w-5" />
                    <span>What's Trending?</span>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309&width=360"
                  alt="Featured Product"
                  fill
                  className="object-cover rounded-lg"
                />

                

                
              </div>
            </div>
          </div>
        </section>

        {/* Brands/Partners Section */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                {
                  source: 
                    "data:image/png;base64,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",
                    name:"U.S.POLO"
                },
                {
                  source:
                    "https://i.pinimg.com/474x/49/cf/03/49cf035d58c92c4076e34ee3caed1e23.jpg",
                    name:"Vanhuesen"
                },
                {
                  source:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s",
                    name:"ZARA"
                },
                {
                  source:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s",
                    name:"Puma"
                },
              ].map((brand, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all"
                >
                  <Image
                    src={brand.source}
                    alt={brand.name}
                    width={120}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-10 bg-fuchsia-900">Featured Products</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Trouser",
                  description:
                    "From smart tailored styles to contemporary cuts, find it all here. Shop all colours and styles.",
                  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcuV_7wo7yxbYBrQcJueNIPlZmeF3_RMLx1jvTs5h0CHYIZTCf1XN_LP1TpG5b-jQyH6u3cNPmTXzO0yBuBRAfhplEM85Z09HCbsroGIw",
                },
                {
                  title: "Jackets",
                  description:
                    "Cropped fit denim jacket with a suede finish.",
                  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_qoY8wbRqkEoVP5xaIfeTxH6xqvr5UjVc0fbKy4J4G2_Y6rVaugpI1DXHXeAhsqlLJpw2OR0hHaVYi3kTIE6gsuNmvAHgOrofyjc5-aIj",
                },
                {
                  title: "Shirts",
                  description:
                    "shirt designed for relaxed, everyday wear, offering more comfort and style freedom",
                  image: "https://static.zara.net/assets/public/95d2/e02f/9be74b2caa3e/cd80dc2d8a8c/07200420400-p/07200420400-p.jpg?ts=1741166257082&w=1024",
                },
              ].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700/90 transition-colors inline-block"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Items Section */}
        <section className="py-16 bg-gray-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Trending Items</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-8">
                {[
                  {
                    title: "Beige Loose Fit Hoodie",
                    description:
                      "offering a good balance of quality, style, and affordability.",
                    image: "https://images.unsplash.com/photo-1542327534-59a1fe8daf73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dplaceholder.svg?height=200&width=300",
                  },
                  {
                    title: "Black Denim Hoodie",
                    description:
                      "Provides extra warmth and Comfort.",
                    image: "https://images.unsplash.com/photo-1635715390924-3936ee04f584?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2 relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1647243498368-8c19cf82031a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Featured Product"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg max-w-xs">
                  <h3 className="text-xl font-bold mb-2">PREMIUM COLLECTION</h3>
                  <p className="text-gray-600 mb-4">
                    Discover our exclusive line of premium products designed for
                    those who demand the best.
                  </p>
                  <Link
                    href="/premium"
                    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-black/90 transition-colors inline-block"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white rounded-md p-1">
                  <ShoppingBag className="h-4 w-4 text-black" />
                </div>
                <span className="font-bold">Products</span>
              </div>
              <p className="text-gray-400">
                Quality products designed to meet your everyday needs.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>Greater Noida</p>
                <p className="mt-2">Email: prateekkaushik601@gmail.com</p>
                <p>Phone: (+91) 8218277683 </p>
              </address>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on new products and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-md font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Products Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
