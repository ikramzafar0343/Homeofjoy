from PIL import Image
import os

src = r"C:\Users\HP\.cursor\projects\c-Users-HP-Desktop-HomeOfJoyWelfareFoundation\assets\c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_de09be3fadf1d235fc2d73540c519d4a_images_ChatGPT_Image_Sep_12__2026__01_10_40_PM-313746d8-122e-4db1-ad7d-392088838e87.png"
out_dir = r"C:\Users\HP\Desktop\HomeOfJoyWelfareFoundation\Frontend\public"
img_dir = os.path.join(out_dir, "images")
app_icon = r"C:\Users\HP\Desktop\HomeOfJoyWelfareFoundation\Frontend\src\app\icon.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
        if luminance < 18 and max(r, g, b) < 28:
            pixels[x, y] = (r, g, b, 0)
        elif luminance < 42 and max(r, g, b) < 55:
            alpha = int(a * ((luminance - 18) / 24.0))
            pixels[x, y] = (r, g, b, max(0, min(255, alpha)))

bbox = img.getbbox()
if bbox:
    pad = 24
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    img = img.crop((left, top, right, bottom))

side = max(img.size)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
ox = (side - img.size[0]) // 2
oy = (side - img.size[1]) // 2
square.paste(img, (ox, oy), img)

square_lg = square.resize((1024, 1024), Image.Resampling.LANCZOS)

master_png = os.path.join(img_dir, "homeOfJoyLogo.png")
square_lg.save(master_png, "PNG")

icons = [square_lg.resize((s, s), Image.Resampling.LANCZOS) for s in (16, 32, 48)]
icons[1].save(
    os.path.join(out_dir, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=[icons[0], icons[2]],
)
icons[1].save(os.path.join(out_dir, "favicon.png"), "PNG")
icons[1].save(app_icon, "PNG")

apple = square_lg.resize((180, 180), Image.Resampling.LANCZOS)
apple.save(os.path.join(out_dir, "apple-touch-icon.png"), "PNG")
apple.save(os.path.join(img_dir, "homeOfJoyIcon.png"), "PNG")

print("ok", square_lg.size)
for p in [
    master_png,
    os.path.join(out_dir, "favicon.ico"),
    os.path.join(out_dir, "favicon.png"),
    app_icon,
    os.path.join(out_dir, "apple-touch-icon.png"),
]:
    print(os.path.basename(p), os.path.getsize(p))
