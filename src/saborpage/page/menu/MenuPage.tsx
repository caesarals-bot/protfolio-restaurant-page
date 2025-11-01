import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dishes, categories } from "@/data/menuData";
import type { Category, Dish } from "@/types/menu";
import DishDetailModal from "./components/DishDetailModal";
import DishCard from "./components/DishCard";


const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "todos">(
    "todos"
  );
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category: Category | "todos") => {
    setSelectedCategory(category);
  };

  const filteredDishes = dishes.filter((dish) => {
    if (!dish.isActive) return false;
    if (selectedCategory === "todos") return true;
    return dish.category === selectedCategory;
  });

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const currentCategoryLabel =
    categories.find((c) => c.id === selectedCategory)?.label || "Todos los Platos";

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-[#0f0f0f] via-[#141414] to-[#050505] text-stone-100">
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,128,0.18),transparent_60%)]" aria-hidden="true" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight text-stone-50">
            Nuestro Menú
          </h1>
          <p className="text-base md:text-lg text-stone-300 max-w-xl mx-auto">
            Una experiencia culinaria que deleitará tus sentidos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-2 bg-black/30 border border-yellow-500/10 rounded-xl p-5 backdrop-blur">
              <h3 className="font-semibold text-lg mb-4 px-1 text-yellow-200">Categorías</h3>
              <Button
                variant={selectedCategory === "todos" ? "secondary" : "ghost"}
                className="w-full justify-start font-semibold tracking-tight"
                onClick={() => handleCategoryChange("todos")}
              >
                Todos los Platos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "secondary" : "ghost"
                  }
                  className="w-full justify-start font-semibold tracking-tight"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </aside>

          <div className="lg:hidden">
            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                handleCategoryChange(value as Category | "todos")
              }
            >
              <SelectTrigger className="w-full bg-black/40 border border-yellow-500/20 text-stone-100">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent className="bg-[#1f1f1f] text-stone-100 border-yellow-500/30">
                <SelectItem value="todos">Todos los Platos</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id} className="focus:bg-yellow-500/20">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <main className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-yellow-100 tracking-tight">
              {currentCategoryLabel}
            </h2>
            {filteredDishes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-stone-300 text-lg">
                  No hay platos disponibles en esta categoría.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    onClick={() => handleDishClick(dish)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <DishDetailModal
        dish={selectedDish}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default MenuPage;
