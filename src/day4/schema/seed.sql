INSERT INTO users (name, email)
VALUES
('Henry', 'henry@example.com'),
('John', 'john@example.com');

INSERT INTO tasks (title, description, completed, user_id)
VALUES
('Learn PostgreSQL', 'Understand databases and SQL', false, 1),
('Learn Express', 'Build REST APIs with Express', true, 1),
('Learn TypeScript', 'Understand types and interfaces', false, 2),
('Build Task API', 'Connect Express to PostgreSQL', false, 1);