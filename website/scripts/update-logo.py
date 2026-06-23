"""Optimize avid-logo.png for web header (transparent background, ~420px wide)."""
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parent.parent
src = root / "Avid Realty Partners" / "New Logo" / "avid-logo.png"
logo_out = root / "public" / "logo.png"
favicon_out = root / "public" / "favicon.png"

if not src.is_file():
    raise SystemExit(f"Logo source not found: {src}")

img = Image.open(src).convert("RGBA")
width = 420
height = int(img.height * width / img.width)
img = img.resize((width, height), Image.Resampling.LANCZOS)

pixels = img.load()
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if r < 35 and g < 35 and b < 35:
            pixels[x, y] = (r, g, b, 0)

img.save(logo_out, optimize=True)

icon = img.crop((0, 0, int(width * 0.32), height))
icon.thumbnail((64, 64), Image.Resampling.LANCZOS)
icon.save(favicon_out, optimize=True)

print(f"logo.png {width}x{height} ({logo_out.stat().st_size // 1024} KB)")
print(f"favicon.png ({favicon_out.stat().st_size // 1024} KB)")
