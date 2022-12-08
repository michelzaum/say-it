export const mockPosts: Array<{}> = [
  {
    id: 1,
    createdAt: Date.now(),
    content: "Comecei a estudar JavaScript. Estou adorando!",
    author: {
      id: 3,
      firstName: 'Leticia',
      lastName: 'Ribeiro',
      email: 'leticiaribeiro@mail.com',
      password: 'leticia123',
      country: 'Italy',
    },
  },
  {
    id: 2,
    createdAt: Date.now(),
    content: "Estou aprendendo inglês e isso tem me ajudado muito quando estou programando.",
    author: {
      id: 1,
      firstName: 'Michel',
      lastName: 'Oliveira',
      email: 'micheloliveira@mail.com',
      password: 'michel123',
      country: 'Canada',
    },
  },
  {
    id: 3,
    createdAt: Date.now(),
    content: "Adoro a forma que o TypeScript facilita o desenvolvimento. Uma mão na roda!",
    author: {
      id: 2,
      firstName: 'Ana Maria',
      lastName: 'Oliveira',
      email: 'anamaria@mail.com',
      password: 'ana123',
      country: 'England',
    },
  },
];
