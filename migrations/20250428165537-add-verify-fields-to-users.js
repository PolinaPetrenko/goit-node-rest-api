'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'verify', {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  });

  await queryInterface.addColumn('users', 'verificationToken', {
    type: Sequelize.STRING,
    allowNull: true,
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'verify');
  await queryInterface.removeColumn('users', 'verificationToken');
}
