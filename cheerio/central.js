const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  // 1. Criar uma instância do axios com suporte a cookies

const response = await axios.get('https://servicedesk.openfinancebrasil.org.br/HelpDesk.jsp?fromId=List&showFirstPage=true', {
  headers: {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'if-modified-since': 'Fri, 23 May 2025 22:06:44 GMT',
    'priority': 'u=0, i',
    'referer': 'https://servicedesk.openfinancebrasil.org.br/HelpDesk.jsp?fromId=List&showFirstPage=true',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'cookie': '_ga=GA1.1.157536016.1746015636; _ga_50CLQ1V1LY=GS1.1.1746018607.2.0.1746018607.0.0.0; lgpd-approve=true; _ga_TG68451C83=GS2.1.s1747923587$o2$g0$t1747923587$j0$l0$h0; __goc_session__=vwohhwpedmxdhjglpjlqdlmedltdhvgv; accountId=obkbrasil; userType=ad00; JSESSIONID=426155AB9EEF6BD6ABDA29E099F3A009; rememberMe=Y; communityUserName=BASE64c3Vwb3J0ZS1vcGVuZmluYW5jZUB0ZWNiYW4uY29tLmJy; communityUserHash=i24q1VtiTqe6vvRGdEPAiA%3D%3D'
  }
});

 try {
    // Testar se o login funcionou
    if (response.status === 200 && !response.data.includes('senha incorreta')) {
      console.log('✅ Login bem-sucedido!');
    } else {
      console.log('❌ Login falhou! Verifique usuário e senha.');
      return;
    }

    const $ = cheerio.load(response.data);
    const dados = $('truncate').text();

    if(!dados) {return console.log('deu ruim')}
    console.log('📄 Dados raspados:', dados);
  } catch (err) {
    console.error('❌ Erro na requisição:', err.message);
  }
})();
