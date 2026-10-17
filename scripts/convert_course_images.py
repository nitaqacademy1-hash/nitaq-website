from PIL import Image
import os

images = {
    'sat': '/Users/muhammedmidlaj/.gemini/antigravity-ide/brain/9d96dfd0-16c5-4541-8c3a-46508f9e03b7/sat_student_realistic_1792263901818.jpg',
    'tuition': '/Users/muhammedmidlaj/.gemini/antigravity-ide/brain/9d96dfd0-16c5-4541-8c3a-46508f9e03b7/subject_tuition_realistic_1792263924844.jpg',
    'languages': '/Users/muhammedmidlaj/.gemini/antigravity-ide/brain/9d96dfd0-16c5-4541-8c3a-46508f9e03b7/language_training_realistic_1792263946818.jpg',
    'courses': '/Users/muhammedmidlaj/.gemini/antigravity-ide/brain/9d96dfd0-16c5-4541-8c3a-46508f9e03b7/professional_courses_realistic_1792263975873.jpg'
}

out_dir = '/Users/muhammedmidlaj/Desktop/nitaq-website/public/nitaq/courses'
os.makedirs(out_dir, exist_ok=True)

for name, src in images.items():
    with Image.open(src) as img:
        img = img.convert('RGB')
        
        # Save full (960px width)
        w, h = img.size
        new_w = 960
        new_h = int(h * (960 / w))
        img_full = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        out_full = os.path.join(out_dir, f"{name}.webp")
        img_full.save(out_full, 'WEBP', quality=85)
        print(f"Saved {out_full} ({new_w}x{new_h}, {os.path.getsize(out_full)} bytes)")
        
        # Save small (480px width)
        s_w = 480
        s_h = int(h * (480 / w))
        img_small = img.resize((s_w, s_h), Image.Resampling.LANCZOS)
        out_small = os.path.join(out_dir, f"{name}-480.webp")
        img_small.save(out_small, 'WEBP', quality=82)
        print(f"Saved {out_small} ({s_w}x{s_h}, {os.path.getsize(out_small)} bytes)")

print("All course images successfully converted to WebP!")
