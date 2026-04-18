import { productsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(productsData).map((id) => ({
    id: id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData[id as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-surface">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-primary">
        <Image
          src={product.banner}
          alt={product.name}
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              {product.name}
            </h1>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {product.description}
            </p>

            <h3 className="text-2xl font-bold text-primary mb-6">Key Use Cases</h3>
            <ul className="space-y-4 mb-12">
              {product.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-accent/10 p-1 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </span>
                  <span className="text-lg text-gray-700 font-medium">{useCase}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Request Information</h3>
              <p className="text-gray-600 mb-6 font-medium">Interested in the {product.name}? Contact our sales engineering team for technical specifications and quotes.</p>
              <Link 
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded font-bold transition-all duration-300 w-full inline-flex items-center justify-center text-lg"
              >
                Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Gallery Widget */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Product Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.gallery.map((img, idx) => (
                <div key={idx} className={`relative rounded-xl overflow-hidden shadow-md group ${idx === 0 ? 'col-span-2 h-80' : 'h-48'}`}>
                  <Image 
                    src={img} 
                    alt={`${product.name} Gallery Image ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-zoom-in" 
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
