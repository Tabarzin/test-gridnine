# Тестовое задание для компании Gridnine

Деплой: https://flourishing-stardust-7a3670.netlify.app/

## Развернуть локально:

```
git clone git@github.com:Tabarzin/test-gridnine.git

cd test-gridnine

npm install

npm run dev

```

### Стек

- React, Mantine, Vite;
- Typescript использовался формально в основном, т.к. не было такой задачи, поэтому местами тип any.

### Комментарий

Фильтрация и отображение пересадок не сделаны, т.к. в API отдельного параметра нет, stops везде равны нулю. Пытался вычислить через сопоставление количества аэропротов в сегментах, но не всегда работает как надо.
