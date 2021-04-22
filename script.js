const sonuc=document.getElementById("sonuc");
const filtre=document.getElementById("txtFiltre");
const kullanicilar=[];

kullanicilariGetir();

async function kullanicilariGetir(){
  const gelen=await fetch("https://randomuser.me/api?results=50");
  let veriler=await gelen.json();

  sonuc.innerHTML="";

  veriler.results.forEach(eleman => {
    const yeni=document.createElement("li");
    kullanicilar.push(yeni);

    yeni.innerHTML=`
    <img src="${eleman.picture.medium}">
    <div class="user-info">
      <h4>${eleman.name.first} ${eleman.name.last}</h4>
      <p>${eleman.location.state}/${eleman.location.country}</p>
    </div>
    `
    sonuc.appendChild(yeni);
  })
}

filtre.addEventListener("input",(e) => kullancilariFiltrele(e.target.value));

function kullancilariFiltrele(anahtarKelime){
  kullanicilar.forEach(kullanici => {
    if(kullanici.innerText.toLowerCase().includes(anahtarKelime.toLowerCase()))
    {
      kullanici.classList.remove("sakla");
    }
    else{
      kullanici.classList.add("sakla");
    }
  })
}