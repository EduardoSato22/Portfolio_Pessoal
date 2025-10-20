// ===== JAVASCRIPT DO PORTFÓLIO =====

// Inicialização dos ícones Lucide
document.addEventListener('DOMContentLoaded', function () {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ===== FUNCIONALIDADES DE NAVEGAÇÃO =====

// Toggle do menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Scroll suave para links de navegação
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// ===== FUNCIONALIDADES DE CERTIFICAÇÕES =====

// Toggle das certificações adicionais
function toggleCertifications() {
  const extraCerts = document.querySelectorAll('[data-cert="extra"]');
  const button = document.getElementById('toggle-certifications');
  const chevron = document.getElementById('cert-chevron');
  const text = document.getElementById('cert-text');

  if (!button || !chevron || !text) return;

  const isHidden = extraCerts[0]?.classList.contains('hidden');

  extraCerts.forEach(cert => {
    if (isHidden) {
      cert.classList.remove('hidden');
    } else {
      cert.classList.add('hidden');
    }
  });

  // Atualizar ícone e texto do botão
  if (isHidden) {
    chevron.setAttribute('data-lucide', 'chevron-up');
    text.textContent = 'Ver Menos';
  } else {
    chevron.setAttribute('data-lucide', 'chevron-down');
    text.textContent = 'Ver Todas';
  }

  // Recriar ícones
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===== FUNCIONALIDADES DO FORMULÁRIO DE CONTATO =====

// Validação de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validação de formulário
function validateForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = 'Nome é obrigatório';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Email inválido';
  }

  if (!formData.message.trim()) {
    errors.message = 'Mensagem é obrigatória';
  }

  return errors;
}

// Envio do formulário
async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // Validar formulário
  const errors = validateForm(data);
  if (Object.keys(errors).length > 0) {
    showFormErrors(errors);
    return;
  }

  // Mostrar loading
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML =
    '<i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i>Enviando...';
  submitButton.disabled = true;

  try {
    // Simular envio (substitua pela sua lógica real)
    await simulateFormSubmission(data);
    showSuccessMessage('Mensagem enviada com sucesso!');
    form.reset();
  } catch (error) {
    showErrorMessage('Erro ao enviar mensagem. Tente novamente.');
  } finally {
    // Restaurar botão
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}


// Mostrar erros do formulário
function showFormErrors(errors) {
  // Limpar erros anteriores
  clearFormErrors();

  Object.keys(errors).forEach(field => {
    const input = document.querySelector(`[name="${field}"]`);
    if (input) {
      input.classList.add('border-red-500');

      // Criar mensagem de erro
      const errorDiv = document.createElement('div');
      errorDiv.className = 'text-red-400 text-sm mt-1';
      errorDiv.textContent = errors[field];
      errorDiv.id = `error-${field}`;

      input.parentNode.appendChild(errorDiv);
    }
  });
}

// Limpar erros do formulário
function clearFormErrors() {
  document.querySelectorAll('[id^="error-"]').forEach(error => error.remove());
  document.querySelectorAll('.border-red-500').forEach(input => {
    input.classList.remove('border-red-500');
  });
}

// Mostrar mensagem de sucesso
function showSuccessMessage(message) {
  showMessage(message, 'success');
}

// Mostrar mensagem de erro
function showErrorMessage(message) {
  showMessage(message, 'error');
}

// Mostrar mensagem genérica
function showMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type} fixed top-4 right-4 z-50 max-w-sm`;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  // Remover após 5 segundos
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// ===== FUNCIONALIDADES DO CURRÍCULO =====

// Controles de zoom do Canvas
let currentZoom = 1.4;

function zoomIn() {
  currentZoom = Math.min(currentZoom + 0.2, 2.0);
  updateZoom();
}

function zoomOut() {
  currentZoom = Math.max(currentZoom - 0.2, 0.8);
  updateZoom();
}

function resetZoom() {
  currentZoom = 1.4;
  updateZoom();
}

function updateZoom() {
  const iframe = document.querySelector('.canva-iframe');
  if (iframe) {
    iframe.style.transform = `scale(${currentZoom})`;
    const scale = 1 / currentZoom;
    iframe.style.width = `${scale * 100}%`;
    iframe.style.height = `${scale * 100}%`;
  }
}

// Toggle de tela cheia
function toggleFullscreen() {
  const container = document.getElementById('canvas-container');
  if (!document.fullscreenElement) {
    container.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Simulação de carregamento do Canvas
function simulateCanvasLoading() {
  setTimeout(function () {
    const loading = document.getElementById('loading');
    const iframe = document.getElementById('canvas-iframe');

    if (loading) loading.classList.add('hidden');
    if (iframe) iframe.classList.remove('hidden');
  }, 2000);
}

// ===== FUNCIONALIDADES DE ANIMAÇÃO =====

// Intersection Observer para animações
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // Observar elementos que devem ser animados
  document.querySelectorAll('.fade-in, .hover-lift').forEach(el => {
    observer.observe(el);
  });
}
// Função para atualizar os ícones de tema
function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('[id^="theme-icon-sun"]');
  const moonIcons = document.querySelectorAll('[id^="theme-icon-moon"]');

  sunIcons.forEach(icon => {
    if (isDark) {
      icon.classList.remove('hidden');
    } else {
      icon.classList.add('hidden');
    }
  });

  moonIcons.forEach(icon => {
    if (isDark) {
      icon.classList.add('hidden');
    } else {
      icon.classList.remove('hidden');
    }
  });

  // Recriar ícones lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
// ===== FUNCIONALIDADES DE TEMA =====

// Toggle de tema escuro/claro
function toggleTheme() {
  // Usamos documentElement (<html>) pois é onde o Tailwind aplica a classe 'dark'
  const htmlEl = document.documentElement;
  const isDark = htmlEl.classList.contains('dark');

  if (isDark) {
    htmlEl.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateThemeIcons(false);
  } else {
    htmlEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateThemeIcons(true);
  }
}

// Carregar tema salvo
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const htmlEl = document.documentElement;

  // Verifica o tema salvo OU a preferência do sistema
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    htmlEl.classList.add('dark');
    updateThemeIcons(true);
  } else {
    htmlEl.classList.remove('dark');
    updateThemeIcons(false);
  }
}

// ===== FUNCIONALIDADES DE PERFORMANCE =====

// Lazy loading para imagens
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Debounce para funções que são chamadas frequentemente
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== FUNCIONALIDADES DE ACESSIBILIDADE =====

// Navegação por teclado
function initKeyboardNavigation() {
  document.addEventListener('keydown', e => {
    // ESC para fechar menu mobile
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
}

// Foco visível para elementos interativos
function initFocusManagement() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

// ===== INICIALIZAÇÃO =====

// Função principal de inicialização
function init() {
  // Carregar tema salvo
  loadSavedTheme();

  // Inicializar funcionalidades
  initSmoothScrolling();
  initScrollAnimations();
  initLazyLoading();
  initKeyboardNavigation();
  initFocusManagement();

  // Configurar event listeners
  setupEventListeners();

  // Simular carregamento do Canvas (se estiver na página do currículo)
  if (document.getElementById('canvas-container')) {
    simulateCanvasLoading();
  }

  console.log('Portfólio inicializado com sucesso!');
}

// Configurar event listeners
function setupEventListeners() {
    // Menu mobile
    const mobileMenuButton = document.querySelector(
      '[onclick="toggleMobileMenu()"]'
    );
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
  
    // Toggle de certificações
    const certButton = document.getElementById('toggle-certifications');
    if (certButton) {
      certButton.addEventListener('click', toggleCertifications);
    }
  
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    if (themeToggleBtnMobile) {
      themeToggleBtnMobile.addEventListener('click', (e) => {
        e.preventDefault(); // Previne que o link '#' mude a URL
        toggleTheme();
      });
    }

  // Controles de zoom (se estiver na página do currículo)
  const zoomInBtn = document.querySelector('[onclick="zoomIn()"]');
  const zoomOutBtn = document.querySelector('[onclick="zoomOut()"]');
  const resetZoomBtn = document.querySelector('[onclick="resetZoom()"]');
  const fullscreenBtn = document.querySelector(
    '[onclick="toggleFullscreen()"]'
  );

  if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
  if (resetZoomBtn) resetZoomBtn.addEventListener('click', resetZoom);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
}

// Inicializar quando o DOM estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== UTILITÁRIOS =====

// Função para copiar texto para clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showSuccessMessage('Copiado para a área de transferência!');
    })
    .catch(() => {
      showErrorMessage('Erro ao copiar texto');
    });
}

// Função para formatar data
function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

// Função para truncar texto
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Exportar funções para uso global
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCertifications = toggleCertifications;
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetZoom = resetZoom;
window.toggleFullscreen = toggleFullscreen;
window.copyToClipboard = copyToClipboard;
