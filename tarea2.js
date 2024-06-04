document.querySelector('[placeholder="email"]').value = 'jhoselinesalazarorozco@gmail.com'; 
document.querySelector('#password').value = 'jhosal394!'; 
await new Promise(resolve => setTimeout(resolve, 5000)); 
document.querySelector('#root > div > div > div > div > div > div > form > button').click();