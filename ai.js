export default async function handler(req, res) {

const message = req.body.message;

// MODE TEST (tanpa AI asli)
let reply = "AI sedang offline. Kamu berkata: " + message;

if(message.toLowerCase().includes("halo")){
reply = "Halo 👋 saya AI kamu (mode test).";
}

if(message.toLowerCase().includes("uang")){
reply = "Nanti AI asli bisa bantu cari ide menghasilkan uang.";
}

res.status(200).json({ reply });

}
