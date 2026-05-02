import os
import re
import json

src_dir = '/Users/muhammedmidlaj/Desktop/nitaq/src'
routes = []

seo_pattern = re.compile(r'<SEO\s*([^>]*)/>', re.DOTALL)
prop_pattern = re.compile(r'(\w+)=(?:(?:\"([^\"]*)\")|(?:\{([^\}]*)\}))', re.DOTALL)

for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith('.jsx'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as fp:
                content = fp.read()
                
            matches = seo_pattern.findall(content)
            for m in matches:
                props = prop_pattern.findall(m)
                route_data = {}
                for p in props:
                    key = p[0]
                    val = p[1] if p[1] else ('{' + p[2] + '}')
                    # Clean up some weird JSX spacings
                    route_data[key] = val.replace('\n', ' ').strip()
                
                path = route_data.get('path')
                if path:
                    # some fixes
                    title = route_data.get('title', '')
                    desc = route_data.get('description', '')
                    ogImage = route_data.get('ogImage', '/images/logo1.webp')
                    
                    routes.append({
                        "path": path,
                        "title": title,
                        "description": desc,
                        "canonical": f"https://www.nitaqacademy.com{path}",
                        "ogTitle": title,
                        "ogDescription": desc,
                        "ogImage": ogImage,
                        "twitterCard": "summary_large_image",
                        "courseSchemaRaw": route_data.get('courseSchema'),
                        "faqSchemaRaw": route_data.get('faqSchema')
                    })

print(f"Found {len(routes)} routes.")

out_path = '/Users/muhammedmidlaj/Desktop/nitaq/src/seo-routes.js'
with open(out_path, 'w', encoding='utf-8') as fp:
    fp.write("export const seoRoutes = [\n")
    for r in routes:
        cs = r.get("courseSchemaRaw")
        fs = r.get("faqSchemaRaw")
        s = '  {\n'
        s += f'    path: "{r["path"]}",\n'
        s += f'    title: "{r["title"]}",\n'
        s += f'    description: "{r["description"].replace('"', '\\"')}",\n'
        s += f'    canonical: "{r["canonical"]}",\n'
        s += f'    ogTitle: "{r["ogTitle"]}",\n'
        s += f'    ogDescription: "{r["ogDescription"].replace('"', '\\"')}",\n'
        s += f'    ogImage: "{r["ogImage"]}",\n'
        s += f'    twitterCard: "{r["twitterCard"]}",\n'
        s += '  },\n'
        fp.write(s)
    fp.write("];\n\n")

    fp.write("export const getSeoRoute = (path) => {\n")
    fp.write("  return seoRoutes.find(r => r.path === path) || null;\n")
    fp.write("};\n")
