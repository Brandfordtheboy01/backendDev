SELECT * FROM users;

SELECT * FROM tasks;

SELECT id, title, completed
FROM tasks;

SELECT *
FROM tasks
WHERE completed = false;

SELECT *
FROM tasks
WHERE user_id = 1;

SELECT users.name, tasks.title
FROM users
JOIN tasks
ON users.id = tasks.user_id;

UPDATE tasks
SET completed = true
WHERE id = 1;

DELETE FROM tasks
WHERE id = 4;

SELECT *
FROM tasks
ORDER BY created_at DESC;

SELECT *
FROM tasks
LIMIT 2;