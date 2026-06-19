const factBox = document.getElementById('factBox');
const btn = document.getElementById('newFact');
const localFacts = [
  "Cats sleep 12–16 hours a day.",
  "A group of cats is called a clowder.",
  "Cats have five toes on their front paws, but only four on the back.",
  "The world's oldest cat lived to be 38 years old.",
  "Cats can rotate their ears 180 degrees."
];

async function fetchFact(){
  try{
    const res = await fetch('https://catfact.ninja/fact');
    if(!res.ok) throw new Error('API error');
    const data = await res.json();
    return data.fact || localFacts[Math.floor(Math.random()*localFacts.length)];
  }catch(e){
    return localFacts[Math.floor(Math.random()*localFacts.length)];
  }
}

async function showFact(){
  if(factBox) factBox.textContent = 'Loading...';
  const fact = await fetchFact();
  if(factBox) factBox.textContent = fact;
}

if(btn) btn.addEventListener('click', showFact);
// init
showFact();
