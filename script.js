function openLetter() {
  // Hide main card
  document.querySelector('.card').innerHTML = `
    <h2>💌 Opening your letter...</h2>
    <p style="margin-top:10px;">Just a moment ❤️</p>
  `;

  // After delay show message
  setTimeout(() => {
    document.querySelector('.card').innerHTML = `
      <h2>🎂 Happy Birthday Mahek ❤️</h2>
      <p style="margin-top:15px; font-size:14px; line-height:1.6;">
        Happy Birthdayyyy Meriii Mahekkkkkkk 🥹❤️🎂🎉<br><br>

        Finally tera birthday aa hi gaya 😭❤️ aur obviously aaj ke din mujhe thoda emotional hona hi tha 😭.<br><br>

        14th Feb se lekar aaj tak... damn yrr 🥹 kitna kuch ho gaya.<br><br>

        Tu meri favourite notification hai 📱❤️, meri peace hai, meri comfort person hai 🫂❤️<br><br>

        Sabse pehle thank you itna understanding hone ke liye ❤️<br><br>

        Hamari memories... first date 😂, handshake 🤝❤️, kiss 💋😭, terrace sunset 🌅📸<br><br>

        I'm sorry for my mistakes 😔❤️<br><br>

        You mean everything to me 🥹❤️<br><br>

        <b>Bas itna hi bolna tha...</b><br><br>

        once again Happy Birthday meri bacchiii ❤️🫂<br>
        I love you infinity ♾️😘<br><br>

        <b>Forever Tera 🫶❤️</b>
      </p>
    `;
  }, 2000);
}/* Smooth floating animation fix */
@keyframes floatUp {
  0% { transform: translateY(100vh); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-10vh); opacity: 0; }
}
