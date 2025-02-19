import Loader from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useGetAllOrdersQuery,
  useGetCheckoutMutation,
  useGetPricingQuery,
} from "@/lib/endpoints";

const products = [
  {
    id: 1,
    name: "The Great Gatsby",
    key: "the-great-gatsby",
    price: 1599,
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    key: "to-kill-a-mockingbird",
    price: 1499,
  },
  {
    id: 3,
    name: "1984",
    key: "1984",
    price: 1299,
  },
  {
    id: 4,
    name: "Pride and Prejudice",
    key: "pride-and-prejudice",
    price: 1199,
  },
  {
    id: 5,
    name: "The Catcher in the Rye",
    key: "the-catcher-in-the-rye",
    price: 1399,
  },
  {
    id: 6,
    name: "Lord of the Rings",
    key: "lord-of-the-rings",
    price: 2499,
  },
  {
    id: 7,
    name: "The Hobbit",
    key: "the-hobbit",
    price: 1699,
  },
  {
    id: 8,
    name: "Fahrenheit 451",
    key: "fahrenheit-451",
    price: 1299,
  },
  {
    id: 9,
    name: "Animal Farm",
    key: "animal-farm",
    price: 1099,
  },
  {
    id: 10,
    name: "Brave New World",
    key: "brave-new-world",
    price: 1399,
  },
];

export default function BuyProducts() {
  const { data, error, isPending } = useGetPricingQuery();
  const { data: orders } = useGetAllOrdersQuery();

  if (isPending) return <Loader />;

  if (error)
    return (
      <div className="flex h-full items-center justify-center">
        <p>Error loading products</p>
      </div>
    );

  const variantId = data.find((p) => p.productName === "Products")?.variantId;

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variantId={variantId}
          isBought={orders?.some((order) => order.productName === product.key)}
        />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  variantId,
  isBought = false,
}: {
  product: {
    id: number;
    name: string;
    key: string;
    price: number;
  };
  variantId?: number;
  isBought?: boolean;
}) {
  const checkout = useGetCheckoutMutation();

  return (
    <div key={product.id} className="bg-gray-light rounded-lg border p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">
        ${(product.price / 100).toFixed(2)}
      </p>
      {isBought ? (
        <Badge>Bought</Badge>
      ) : (
        <Button
          onClick={() =>
            checkout.mutate({
              variantId: variantId?.toString() || "",
              custom: {
                product_name: product.key,
              },
              options: {
                name: product.name,
                price: product.price,
              },
            })
          }
        >
          {checkout.isPending ? <Loader /> : "Buy"}
        </Button>
      )}
    </div>
  );
}
