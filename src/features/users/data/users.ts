import { faker } from '@faker-js/faker'

export const users = Array.from({ length: 20 }, () => {
  return {
    id: faker.string.uuid(),
    fullname: faker.person.fullName(),
    username: faker.number.int({ min: 3000000, max: 9000000 }).toString(),
    email: faker.internet.email().toLocaleLowerCase(),
    phoneNumber: faker.phone.number({ style: 'national' }),
    status: faker.helpers.arrayElement(['active', 'inactive']),
    role: faker.helpers.arrayElement(['super', 'admin', 'member']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
