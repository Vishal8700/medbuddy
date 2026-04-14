"""
Strips DRM/permission restrictions from all PDFs in public/books and public/pyq.
Overwrites files in-place. Run once.
"""
import pikepdf
from pathlib import Path

folders = [
    Path("public/books"),
    Path("public/pyq"),
]

for folder in folders:
    for pdf_path in folder.glob("*.pdf"):
        try:
            with pikepdf.open(pdf_path, allow_overwriting_input=True) as pdf:
                # Remove encryption / permission flags entirely
                pdf.save(pdf_path, encryption=False)
            print(f"  unlocked: {pdf_path}")
        except Exception as e:
            print(f"  SKIP {pdf_path.name}: {e}")

print("\nDone.")
