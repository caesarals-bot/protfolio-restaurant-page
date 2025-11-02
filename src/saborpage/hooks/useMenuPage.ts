import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

import { categories, dishes } from "@/data/menuData";
import type { Category, Dish } from "@/types/menu";

type CategoryFilter = Category | "todos";

const useMenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(() => {
    const categoryParam = searchParams.get("category") as Category | null;
    return categoryParam ?? "todos";
  });
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (!categoryParam) {
      setSelectedCategory((previous) => (previous === "todos" ? previous : "todos"));
      return;
    }

    const matchingCategory = categories.find((category) => category.id === categoryParam);
    if (!matchingCategory) {
      setSelectedCategory((previous) => (previous === "todos" ? previous : "todos"));
      setSearchParams({});
      return;
    }

    setSelectedCategory((previous) =>
      previous === matchingCategory.id ? previous : matchingCategory.id
    );
  }, [searchParams, setSearchParams]);

  const handleCategoryChange = useCallback(
    (category: CategoryFilter) => {
      setSelectedCategory(category);

      if (category === "todos") {
        setSearchParams({});
        return;
      }

      setSearchParams({ category });
    },
    [setSearchParams]
  );

  const filteredDishes = useMemo(
    () =>
      dishes.filter((dish) => {
        if (!dish.isActive) return false;
        if (selectedCategory === "todos") return true;
        return dish.category === selectedCategory;
      }),
    [selectedCategory]
  );

  const handleDishClick = useCallback((dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  }, []);

  const handleModalOpenChange = useCallback((open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setSelectedDish(null);
    }
  }, []);

  const currentCategoryLabel = useMemo(() => {
    if (selectedCategory === "todos") return "Todos los Platos";

    const categoryInfo = categories.find((category) => category.id === selectedCategory);
    return categoryInfo?.label ?? "Todos los Platos";
  }, [selectedCategory]);

  return {
    categories,
    selectedCategory,
    filteredDishes,
    currentCategoryLabel,
    handleCategoryChange,
    handleDishClick,
    selectedDish,
    isModalOpen,
    handleModalOpenChange,
  };
};

export default useMenuPage;
