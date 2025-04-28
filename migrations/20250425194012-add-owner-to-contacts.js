// Міграція для додавання колонки 'owner' до таблиці 'contacts'

import {DataTypes} from 'sequelize';

export const up = async queryInterface => {
  // Додаємо поле 'owner' до таблиці 'contacts' з можливістю бути NULL
  await queryInterface.addColumn('contacts', 'owner', {
    type: DataTypes.INTEGER,
    allowNull: true, // Дозволяємо NULL значення тимчасово
  });

  // Оновлюємо всі контакти, щоб встановити значення 'owner'
  await queryInterface.sequelize.query(`
    UPDATE "contacts"
    SET "owner" = 1;  -- Встановіть значення за замовчуванням, наприклад, 1
  `);

  // Тепер можна змінити allowNull на false, оскільки поле вже заповнено
  await queryInterface.changeColumn('contacts', 'owner', {
    type: DataTypes.INTEGER,
    allowNull: false,
  });
};

export const down = async queryInterface => {
  // Видаляємо поле 'owner' у разі скасування міграції
  await queryInterface.removeColumn('contacts', 'owner');
};
