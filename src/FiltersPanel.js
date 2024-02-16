import React from 'react';
import './filtersPanel.css'; // Импорт файла стилей

const FiltersPanel = ({ selectedFilters, onFilterChange }) => {
  const categories = [
    { id: 1, name: 'Семена' },
    { id: 2, name: 'Саженцы' },
    { id: 3, name: 'Товары для дома и сада' },
  ];

  const handleFilterChange = (filterId) => {
    const selected = selectedFilters.includes(filterId);
    const newFilters = selected
      ? selectedFilters.filter((id) => id !== filterId)
      : [...selectedFilters, filterId];

    onFilterChange(newFilters);
  };

  return (
    <div className="filters-panel">
      <h3>Фильтры</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleFilterChange(category.id)}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(category.id)}
              onChange={() => {}}
            />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersPanel;
