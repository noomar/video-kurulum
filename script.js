```js
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('message').textContent = 'Butona tıkladınız!';
});
```

---

Şimdi sadece kodu seçip kopyala, başka yazı dahil olmasın.  
Telefonunda yeni dosya aç, adı *index.html*, *style.css*, *script.js* olarak kaydet, içine ayrı ayrı yapıştır.  

İstersen dosya oluşturma adımında da yardımcı olurum!
```javascript
function createScene() {const container = document.getElementById("sceneContainer");
  container.innerHTML = `
    <h2>Sahne Oluşturuldu!</h2>
    <img src="https://placekitten.com/400/300" alt="Sahne Görseli" style="max-width:100%;">
    <p>Bu sahne otomatik oluşturulmuştur.</p>
  `;
}
```
