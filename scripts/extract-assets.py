from PIL import Image
import os

img = Image.open("Neon Vice City Wiki Homepage.png")
width, height = img.size
print(f"Loaded image {width}x{height}")

os.makedirs("public/images/hero", exist_ok=True)
os.makedirs("public/images/cards", exist_ok=True)
os.makedirs("public/images/locations", exist_ok=True)
os.makedirs("public/images/guides", exist_ok=True)
os.makedirs("public/images/characters", exist_ok=True)

# 1. Hero background: full top banner (from y=60 to y=425)
hero_banner = img.crop((0, 60, width, 425))
hero_banner.save("public/images/hero/hero-banner.png", "PNG")

# 2. Hero characters crop (Lucia and Jason)
hero_characters = img.crop((700, 60, 1250, 425))
hero_characters.save("public/images/hero/hero-characters.png", "PNG")

# 3. Featured guide: 100% completion guide banner (Ferris wheel at sunset)
# Approx x: 540 to 1275, y: 545 to 765
featured_guide = img.crop((545, 545, 1275, 765))
featured_guide.save("public/images/guides/featured-100-guide.png", "PNG")

# 4. Updates thumbnails
# Helicopter
helicopter = img.crop((80, 555, 225, 620))
helicopter.save("public/images/cards/update-helicopter.png", "PNG")

# Malibu Club
malibu = img.crop((80, 625, 225, 690))
malibu.save("public/images/cards/update-malibu.png", "PNG")

# Secret ending / mask
secret_mask = img.crop((80, 695, 225, 760))
secret_mask.save("public/images/cards/update-secret-ending.png", "PNG")

# 5. Explore cards (y ~ 820 to 915)
# Locations
explore_locations = img.crop((80, 825, 360, 915))
explore_locations.save("public/images/cards/explore-locations.png", "PNG")

# Story & Characters
explore_characters = img.crop((370, 825, 640, 915))
explore_characters.save("public/images/cards/explore-characters.png", "PNG")

# Activities
explore_activities = img.crop((650, 825, 920, 915))
explore_activities.save("public/images/cards/explore-activities.png", "PNG")

# Easter Eggs
explore_easter_eggs = img.crop((930, 825, 1170, 915))
explore_easter_eggs.save("public/images/cards/explore-easter-eggs.png", "PNG")

# 6. Popular pages mini thumbnails
pop_vice_city = img.crop((1350, 560, 1400, 595))
pop_vice_city.save("public/images/cards/pop-vice-city.png", "PNG")

pop_lucia = img.crop((1350, 600, 1400, 635))
pop_lucia.save("public/images/cards/pop-lucia.png", "PNG")

pop_jason = img.crop((1350, 645, 1400, 680))
pop_jason.save("public/images/cards/pop-jason.png", "PNG")

pop_collectibles = img.crop((1350, 685, 1400, 720))
pop_collectibles.save("public/images/cards/pop-collectibles.png", "PNG")

pop_secrets = img.crop((1350, 725, 1400, 760))
pop_secrets.save("public/images/cards/pop-secrets.png", "PNG")

print("All mockup assets successfully extracted!")

