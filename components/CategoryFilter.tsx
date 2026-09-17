'use client';

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filtrar por categoria">
      {categories.map((category) => {
        const isActive = category === selected;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide border transition-colors ${
              isActive
                ? 'bg-noche text-mostaza border-noche'
                : 'bg-transparent text-noche border-noche/20 hover:border-noche/60'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
