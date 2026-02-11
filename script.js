// State management
let todos = [];

// DOM elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const prioritySelect = document.getElementById('prioritySelect');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const currentDateEl = document.getElementById('currentDate');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const pendingTasksEl = document.getElementById('pendingTasks');

// Initialize app
function init() {
    loadFromLocalStorage();
    renderTodos();
    updateStats();
    updateDate();
}

// Update current date
function updateDate() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    currentDateEl.textContent = now.toLocaleDateString('ko-KR', options);
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add new todo
function addTodo(text, priority = 'medium') {
    const todo = {
        id: generateId(),
        text: text.trim(),
        completed: false,
        priority: priority,
        createdAt: Date.now()
    };

    todos.unshift(todo);
    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage();
        renderTodos();
        updateStats();
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveToLocalStorage();
    renderTodos();
    updateStats();
}

// Format date for display
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
}

// Render todos to DOM
function renderTodos() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        emptyState.classList.add('show');
        todoList.style.display = 'none';
        return;
    }

    emptyState.classList.remove('show');
    todoList.style.display = 'flex';

    todos.forEach(todo => {
        const li = document.createElement('li');
        const priority = todo.priority || 'medium';
        li.className = `todo-item priority-${priority} ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="priority-indicator"></div>
            <div class="todo-checkbox" data-id="${todo.id}"></div>
            <div class="todo-content">
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <span class="todo-date">${formatDate(todo.createdAt)}</span>
            </div>
            <button class="delete-btn" data-id="${todo.id}">×</button>
        `;

        todoList.appendChild(li);
    });

    // Add event listeners for checkboxes
    document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            toggleTodo(id);
        });
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            deleteTodo(id);
        });
    });
}

// Update statistics
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;

    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

// Save to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Load from localStorage
function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem('todos');
        if (stored) {
            todos = JSON.parse(stored);
        }
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        todos = [];
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Event listener for form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
        todoInput.focus();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
