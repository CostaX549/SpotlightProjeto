
// Varíavel para armazenar os vídeos e imagens de maneira correspondente.

const videos = [
  {
    thumbnail: document.getElementById("michaeljackson"),
    player: document.getElementById("videoPlayer"),
    index: 0
  },
  {
    thumbnail: document.getElementById("cosmotsts"),
    player: document.getElementById("videoPlayer2"),
    index: 1
  },
  {
    thumbnail: document.getElementById("ironman3"),
    player: document.getElementById("videoPlayer3"),
    index: 2
  },
  {
    thumbnail: document.getElementById("ultimato"),
    player: document.getElementById("videoPlayer4"),
    index: 3
  },
  {
    thumbnail: document.getElementById("everydayiwakeup"),
    player: document.getElementById("videoPlayer5"),
    index: 4
  },
  {
    thumbnail: document.getElementById("cidadeinvisivel"),
    player: document.getElementById("videoPlayer6"),
    index: 5
  },
  {
    thumbnail: document.getElementById("arrow"),
    player: document.getElementById("videoPlayer7"),
    index: 6
  },
  {
    thumbnail: document.getElementById("batman"),
    player: document.getElementById("videoPlayer8"),
    index: 7
  },
  {
    thumbnail: document.getElementById("miranha"),
    player: document.getElementById("videoPlayer9"),
    index: 8
  },
  {
    thumbnail: document.getElementById("dark"),
    player: document.getElementById("videoPlayer10"),
    index: 9
  },
  {
    thumbnail: document.getElementById("socialdilema"),
    player: document.getElementById("videoPlayer11"),
    index: 10
  },

  {
    thumbnail: document.getElementById("oceano"),
    player: document.getElementById("videoPlayer12"),
    index: 10
  }


];

// Varíaveis para armazenar respecitvamente: O menu responsável pela abertura da sidebar, o botão de fechar o vídeo, e a div que contém todos os vídeos.
const menu = document.getElementById("menu");
const botaoRemover = document.getElementById("remover-video");
const videoOverlay = document.getElementById("video-overlay");

// Sistema de repetição (forEach) para a reprodução dos vídeos.

videos.forEach(video => {
  const { thumbnail, player } = video;

// Adiciona um ouvinte de clique as imagens para reproduzir os vídeos com um atraso.

  thumbnail.addEventListener("click", function() {
   
      player.play();
   

  
// Esconde o menu, leva o usuário automaticamente para cima da página, mostra os botões de fechar o vídeo e a div que armazena todos os vídeos .

    menu.style.display = "none";
    window.scrollTo(0, 0);
    botaoRemover.style.display = "block";
    videoOverlay.style.display = "block";

// Sistema de verificação para esconder os outros vídeos e impedir sua reprodução, quando um já estiver sendo reproduzido e mostrado .

    videos.forEach(v => {
      if (v !== video) {
        v.player.pause();
        v.player.style.display = "none";
      }
    });

    player.style.display = "block";
  });
});

// Adiciona um ouvinte de clique ao botão de fechar o vídeo para impedir a reprodução deles e esconde-los, mostrando novamente o menu.

botaoRemover.addEventListener("click", function() {
  videos.forEach(video => {
    video.player.pause();
  });

  videoOverlay.style.display = "none";
  botaoRemover.style.display = "none";
  menu.style.display = "block";
});

    
  

  

  







$(document).ready(function() {
  const menu = $('#menu');
  const nav = $('#navbar');
  const li = $('li');
  const elementById = $('#main');
  const childElements = elementById.find('img');
  const video =  $('#videoPlayer')
  const header = $('#header');
  const main = $('#main');
  const footer = $('#footer');
  const body = $('body');
  
  body.removeClass('overflow-hidden');
  body.toggleClass('overflow-auto');

 


  function addOverlay() {
    const overlay = $('<div></div>').addClass('overlay-div').css({
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%',
      'background-color': 'rgba(0, 0, 0, 0.5)',
      'z-index': 9999
    });
  
    if ($('.overlay-div').length === 0) {
      $('body > div:not(#navbar):not(header):not(#video-overlay)').append(overlay);
      $('div:not(#navbar):not(header div) img').addClass('no-hover-transform');
      
    }
  
    // Desabilitar as funções do site enquanto o overlay estiver ativo
    $('div:not(#navbar):not(header div)').addClass('no-functions');
    
  }
  
  
  
  // Remove overlay
  function removeOverlay() {
    $('.overlay-div').remove();
    $('div:not(#navbar):not(header div) img').removeClass('no-hover-transform');
    $('div:not(#navbar):not(header div)').removeClass('no-functions');


  }

  // Adicionar hover apenas quando o overlay não estiver ativo



 

  // Adiciona um ouvinte de evento para o clique do menu hamburguer
  menu.on('click', function() {
    // Verifica se a navbar possui a classe hide
    if (nav.hasClass('hide')) {
      // Mostra a navbar(menu)
      addOverlay();
      nav.addClass('show');
      nav.removeClass('hide');
      main.css('opacity', '0.5');
      footer.css('opacity', '0.5');
      header.css('opacity', '0.5');
      body.addClass('overflow-hidden');
      body.removeClass('overflow-auto');
      video[0].pause();
      childElements.off('mouseenter mouseleave').css('transform', '');
    }
  });
  
  // Adiciona um ouvinte de evento para o clique no documento
  $(document).on('click', function(event) {
    const isClickInsideMenu = nav.is(event.target) || menu.is(event.target);
    const isClickInsideNavbar = nav.has(event.target).length > 0;
  
    // Verifica se o clique ocorreu dentro do menu ou no ícone do menu hamburguer
    if (!isClickInsideMenu && nav.hasClass('show') && !isClickInsideNavbar) {
      // Esconde o menu
      nav.removeClass('show');
      nav.addClass('hide');
      main.css('opacity', '');
      footer.css('opacity', '');
      body.removeClass('no-scroll');
      header.css('opacity', '');
      body.removeClass('overflow-hidden');
      body.toggleClass('overflow-auto');
      removeOverlay();
    }
  });
  
  
  function active() {
    if (nav.hasClass('show')) {
      // Esconde a navbar
      nav.removeClass('show');
      nav.addClass('hide');
      main.css('opacity', '');
      footer.css('opacity', '');
      body.removeClass('no-scroll');
      header.css('opacity', '');
      body.removeClass('overflow-hidden');
      body.toggleClass('overflow-auto');
    }
  }

  $(document).ready(function() {
    $("li a").on("click", function(event) {
      // Prevenir o comportamento padrão do clique
      event.preventDefault();
    
      // Obter o destino do link
      var page = $(this).attr('href');
    
      // Aguardar 500ms antes de redirecionar
      setTimeout(function() {
        // Redirecionar para a página desejada
        window.location.href = page;
      }, 500);
    });
  });
  
  // Verifica cada item da navbar
  li.each(function() {
    // Adiciona um ouvinte de evento para o clique de cada item da navbar
    $(this).on('click', active);
  });
});

$(document).ready(function() {
  var darkModeSwitch = $('#darkModeSwitch');
  var navbar = $('#navbar');
  var lis = $('li');
  var teste = $('#teste');
  var ativado = $('#ativado');

  // Verifica se a condição está armazenada no localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    darkModeSwitch.prop('checked', true);
    applyDarkMode(); // Aplica o claro
  }

  darkModeSwitch.on('change', function() {
    if (darkModeSwitch.is(':checked')) {
      localStorage.setItem('darkMode', 'true');
      applyDarkMode(); // Aplica o modo claro
    } else {
      localStorage.setItem('darkMode', 'false');
      removeDarkMode(); // Remove o modo claro
    }
  });

  function applyDarkMode() {
    // Aplica as alterações de estilo correspondentes
    ativado.addClass('active-2');
    teste.css('background-image', '');
    navbar.css('background-color', 'rgb(190, 153, 58)');

    lis.on('mouseenter', function() {
      $(this).css('background-color', '#6F5233');
    });

    lis.on('mouseleave', function() {
      $(this).css('background-color', '');
    });
  }

  function removeDarkMode() {
    // Remove as alterações de estilo correspondentes
    ativado.removeClass('active-2');
    teste.css('background-image', 'rgb(15,15,15)');
    navbar.css('background-color', '');

    lis.on('mouseenter', function() {
      $(this).css('background-color', '');
    });

    lis.on('mouseleave', function() {
      $(this).css('background-color', '');
    });
  }
});







