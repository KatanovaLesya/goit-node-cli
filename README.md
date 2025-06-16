# goit-node-cli

Консольний додаток для управління списком контактів.

## Технології

- Node.js
- Commander
- FS (Promises API)
- nanoid

## Команди для запуску

### Показати всі контакти

```bash
node index.js -a list
```

### Отримати контакт по ID

```bash
node index.js -a get -i <contactId>
```

### Додати новий контакт

```bash
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
```

### Видалити контакт

```bash
node index.js -a remove -i <contactId>
```

### Структура

goit-node-cli/
├── index.js
├── contacts.js
├── db/
│   └── contacts.json

### Автор

Катанова Леся