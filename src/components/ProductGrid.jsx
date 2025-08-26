import ProductCard from "./ProductCard";
import asuslaptop from "../assets/asus.png";
import batashoes from "../assets/batashoes.png";
import realmebuds from "../assets/realmebuds2wired.png";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1">
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: realmebuds,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: asuslaptop,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: batashoes,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: asuslaptop,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: realmebuds,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: asuslaptop,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: batashoes,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: realmebuds,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: asuslaptop,
        }}
      />
      <ProductCard
        product={{
          title: "titel",
          description: "description description",
          price: 123,
          image: batashoes,
        }}
      />
    </div>
  );
}
