# СRUD додаток - "Список контактів"

## Кроки по створенню проекту

- [ ] Створити базу даних ✅
- [ ] Створити модель
  - [ ] Взяти дані про всіх контактів: `GET /contacts`
  - [ ] Створення нового контакту: `POST /contacts`
  - [ ] Видалення контакту: `DELETE /contacts/:contactId`

## Створити базу даних

У якості бази даних використовуємо Mockapi. Для роботи з базою даних
використовуємо [mockapi](https://mockapi.io/). Базовий URL:
`https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api/`

## Створити модель

- Створюємо запит на отримання контактів:

  - створити функцію `fetchContacts` для отримання контактів з бази даних. ✅
  - додати в проект бібліотеку `React Query` для кешування запитів. ✅
  - переписати базовий запит для використання `React Query`. ✅

- Створюємо запит на створення контакту:

  - створити функцію `addContact` для створення контакту. ✅
  - створити форму за допомогою `React Hook Form` для створення контакту. ✅
  - створити перший контакт і перевірити чи він з'явився в списку контактів. ✅

- Створюємо запит на видалення контакту:

  - створити функцію `deleteContact` для видалення контакту.
  - створити кнопку видалення контакту.
  - перевірити чи видалення працює.