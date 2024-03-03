const readline = require("readline");
const makanan = ["pecel", "naspad", "nasgor"];
const minuman = ["teh", "kopi", "susu"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readInput(query) {
  return new Promise((resolve) =>
    rl.question(query, (ans) => resolve(ans.trim()))
  );
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cetakMakanan() {
  for (let i = 0; i < makanan.length; i++) {
    console.log(makanan[i]);
    await delay(100);
  }
}

async function cetakMinuman() {
  for (let i = 0; i < minuman.length; i++) {
    console.log(minuman[i]);
    await delay(50);
  }
}

async function cek(pilihan) {
  if (pilihan == "cetak") {
    cetakMakanan();
    cetakMinuman();
  }
}

async function main() {
    const pilihan = await readInput("ketik cetak/nggak\n");
    cek(pilihan);
    rl.close();
}

main();

