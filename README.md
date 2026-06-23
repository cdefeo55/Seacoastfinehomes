# Chantal O'Hare Seacoast NH Real Estate Website

Static, SEO-focused website draft for Chantal O'Hare.

## Included
- Homepage
- About
- Buy
- Sell
- Home Valuation
- Seacoast Communities landing page
- 12 unique town pages
- Resources page
- Contact page
- Responsive CSS
- Basic JavaScript for mobile navigation and demo-form status
- SEO titles and meta descriptions
- JSON-LD RealEstateAgent schema
- sitemap.xml and robots.txt
- Chantal headshot at `assets/images/chantal-ohare-headshot.png`

## Before Launch
1. Confirm the final domain and update `site_url` in `generate_site.py`, sitemap, canonical URLs, and schema.
2. Connect forms to Netlify Forms, Formspree, HubSpot, Follow Up Boss, or the brokerage CRM.
3. Add IDX/property search links if allowed by brokerage and MLS rules.
4. Confirm all brokerage, license, email, and compliance language.
5. Replace or approve any testimonial language before publishing.
6. Add Google Search Console, GA4, call tracking, and conversion tracking.
7. Compress images and serve WebP versions for production.

## Editing
The HTML files are already generated. For bulk content changes, edit `generate_site.py` and run:

```bash
python generate_site.py
```

