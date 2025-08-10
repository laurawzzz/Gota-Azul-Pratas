# Gota-Azul-Pratas
`silver_shop.html`
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Argentum Lux - Joias em Prata</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;700&display=swap');
        
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0a192f;
            color: #ffffff;
        }
        
        .title-font {
            font-family: 'Playfair Display', serif;
        }
        
        .nav-link:hover {
            border-bottom: 2px solid #ffffff;
        }
        
        .product-card {
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .login-box {
            background: rgba(10, 25, 47, 0.9);
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body class="min-h-screen">
    <!-- Navbar -->
    <nav class="bg-gray-900 text-white py-4 px-6 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="title-font text-2xl md:text-3xl">Argentum Lux</h1>
            <div class="hidden md:flex space-x-8">
                <a href="#" class="nav-link">Coleções</a>
                <a href="#" class="nav-link">Sobre</a>
                <a href="#" class="nav-link">Contato</a>
                <button id="loginBtn" class="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">Login</button>
            </div>
            <button class="md:hidden" id="mobileMenuBtn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-96 flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900">
        <div class="text-center px-4 z-10">
            <h2 class="title-font text-4xl md:text-6xl mb-4">Prata que Inspira</h2>
            <p class="text-xl max-w-2xl mx-auto">Descubra nossas exclusivas peças em prata 925 com acabamento impecável</p>
        </div>
        <div class="absolute inset-0 bg-black opacity-30"></div>
    </header>

    <!-- Featured Products -->
    <section class="py-16 px-4">
        <div class="container mx-auto">
            <h3 class="title-font text-3xl text-center mb-12">Coleção Exclusiva</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Product 1 -->
                <div class="product-card rounded-lg overflow-hidden p-6">
                    <div class="product-image mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64c7dbd6-fbe4-4d97-a83a-84afc92dee94.png" alt="Anel em prata 925 com detalhe em zircônia, fundo preto" class="w-full h-64 object-cover rounded" />
                    </div>
                    <h4 class="title-font text-xl mb-2">Anel Luna</h4>
                    <p class="text-gray-300 mb-4">Prata 925 com zircônia</p>
                    <button class="view-price-btn w-full py-2 bg-gray-800 hover:bg-gray-700 rounded transition">
                        Cadastre-se para ver preço
                    </button>
                </div>
                
                <!-- Product 2 -->
                <div class="product-card rounded-lg overflow-hidden p-6">
                    <div class="product-image mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6095186-991f-4ec1-a0d4-2aa3c102ba11.png" alt="Pulseira em prata entrelaçada com pingente, fundo azul escuro" class="w-full h-64 object-cover rounded" />
                    </div>
                    <h4 class="title-font text-xl mb-2">Pulseira Oceano</h4>
                    <p class="text-gray-300 mb-4">Prata 925 entrelaçada</p>
                    <button class="view-price-btn w-full py-2 bg-gray-800 hover:bg-gray-700 rounded transition">
                        Cadastre-se para ver preço
                    </button>
                </div>
                
                <!-- Product 3 -->
                <div class="product-card rounded-lg overflow-hidden p-6">
                    <div class="product-image mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/728fea6e-88d5-48ac-9b93-8c5662aa5479.png" alt="Colar em prata com pedra azul safira em fundo branco" class="w-full h-64 object-cover rounded" />
                    </div>
                    <h4 class="title-font text-xl mb-2">Colar Safira</h4>
                    <p class="text-gray-300 mb-4">Prata 925 com safira</p>
                    <button class="view-price-btn w-full py-2 bg-gray-800 hover:bg-gray-700 rounded transition">
                        Cadastre-se para ver preço
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Login Modal -->
    <div id="loginModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50">
        <div class="login-box rounded-lg p-8 max-w-md w-full relative">
            <button id="closeModal" class="absolute top-4 right-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <h3 class="title-font text-2xl text-center mb-6">Acesse sua conta</h3>
            
            <form id="loginForm" class="space-y-4">
                <div>
                    <label for="email" class="block mb-2">E-mail</label>
                    <input type="email" id="email" required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div>
                    <label for="password" class="block mb-2">Senha</label>
                    <input type="password" id="password" required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <button type="submit" class="w-full py-2 bg-blue-700 hover:bg-blue-600 rounded transition">Entrar</button>
                
                <p class="text-center mt-4">
                    Não tem conta? <a href="#" class="text-blue-400 hover:underline" id="showRegister">Cadastre-se</a>
                </p>
            </form>
            
            <form id="registerForm" class="space-y-4 hidden">
                <div>
                    <label for="regEmail" class="block mb-2">E-mail</label>
                    <input type="email" id="regEmail" required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div>
                    <label for="regPassword" class="block mb-2">Senha</label>
                    <input type="password" id="regPassword" required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <div>
                    <label for="confirmPassword" class="block mb-2">Confirme sua senha</label>
                    <input type="password" id="confirmPassword" required class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                
                <button type="submit" class="w-full py-2 bg-blue-700 hover:bg-blue-600 rounded transition">Cadastrar</button>
                
                <p class="text-center mt-4">
                    Já tem conta? <a href="#" class="text-blue-400 hover:underline" id="showLogin">Faça login</a>
                </p>
            </form>
        </div>
    </div>

    <script>
        // Modal functionality
        const loginBtn = document.getElementById('loginBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const loginModal = document.getElementById('loginModal');
        const closeModal = document.getElementById('closeModal');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const viewPriceBtns = document.querySelectorAll('.view-price-btn');

        // Show login modal
        loginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });

        mobileMenuBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });

        // Close modal
        closeModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });

        // Switch to register form
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });

        // Switch to login form
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

        // View price buttons
        viewPriceBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                loginModal.classList.remove('hidden');
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            });
        });

        // Form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login (in a real app, you would send this to a server)
            alert(`Login realizado com sucesso!\nE-mail: ${email}`);
            loginModal.classList.add('hidden');
        });

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            // Simulate registration (in a real app, you would send this to a server)
            alert(`Cadastro realizado com sucesso!\nE-mail: ${email}\nVocê pode fazer login agora.`);
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    </script>
</body>
</html>
