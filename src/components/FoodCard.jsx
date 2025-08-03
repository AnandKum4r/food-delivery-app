import Button from "./Button";

const FoodCard = ({ item, onAdd }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4 text-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-contain mx-auto mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-red-500 font-bold mt-2">₹{item.price}</p>
      <Button onClick={() => onAdd(item)} className="mt-3 w-full">
        Add to Cart
      </Button>
    </div>
  );
};

export default FoodCard;
