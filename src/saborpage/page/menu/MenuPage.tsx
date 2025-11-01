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
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Nuestro Menú
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Una experiencia culinaria que deleitará tus sentidos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-2">
              <h3 className="font-semibold text-lg mb-4 px-3">Categorías</h3>
              <Button
                variant={selectedCategory === "todos" ? "secondary" : "ghost"}
                className="w-full justify-start"
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
                  className="w-full justify-start"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </aside>

          {/* Mobile Category Select */}
          <div className="lg:hidden">
            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                handleCategoryChange(value as Category | "todos")
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los Platos</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dishes Grid */}
          <main className="flex-1">
            <h2 className="text-3xl font-bold mb-8">{currentCategoryLabel}</h2>
            {filteredDishes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
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

      {/* <Footer /> */}

      <DishDetailModal
        dish={selectedDish}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default MenuPage;
