import segno

URL = "https://YOUR-GITHUB-USERNAME.github.io/eskuvo/"

qr = segno.make(URL, error="h")
qr.save("qr.svg", scale=10, border=4, dark="#2c3550")
qr.save("qr.png", scale=20, border=4, dark="#2c3550")
print("QR code saved for", URL)
