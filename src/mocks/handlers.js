import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://example.com/list', () => {
    return HttpResponse.json({
      data: [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Jose' },
        { id: 3, name: 'Jose' },
        { id: 4, name: 'Jose' },
        { id: 5, name: 'Jose' },
        { id: 6, name: 'Jose' },
        { id: 7, name: 'Jose' },
        { id: 8, name: 'Jose' },
        { id: 9, name: 'Jose' },
        { id: 10, name: 'Jose' },
        { id: 11, name: 'Jose' },
      ],
    });
  }),
];
