/* ====================================================
   CHANEL SPRING 2027 - SCRIPT.JS
   Korean Heritage × Modern Luxury
   ==================================================== */

// ====================================================
// EMBEDDED PRODUCT DATA - No external fetch required
// ====================================================

const PRODUCTS_DATA = {
    "project": {
        "title": "CHANEL Spring 2027: Timeless Circular Luxury",
        "theme": "Korean Heritage Reimagined Through Modern Luxury",
        "course": "FM109 First Year Experience II",
        "professor": "Hye Yeon Jeong",
        "school": "FIT SUNY Korea"
    },
    "categoryOrder": [
        "Womenswear",
        "Menswear",
        "Activewear",
        "Swimwear",
        "Innerwear",
        "Accessories",
        "Jewelry",
        "Footwear",
        "Beauty",
        "Home Textile",
        "Kidswear Girls",
        "Kidswear Boys",
        "Pet"
    ],
    "products": [
        {
            "category": "Womenswear",
            "classification": "Tank Top",
            "styleNumber": "27SSTT11-1 / 27SSTT11-2",
            "itemName": "Camellia Wrap Tank Top",
            "description": "Wrap tank top with linen texture, contrast binding, tie closure detail, camellia appliqué, and gold CC buttons.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 55% Linen, 30% Cotton, 15% Viscose; Contrast Trim: 70% Cotton, 30% Polyester; Appliqué: 100% Polyester",
            "colorPattern": "Tap Shoe 65%, Snow White 35%",
            "retailTicket": "$3,950.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/womenswear/camellia-wrap-tank-top.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Skirt",
            "styleNumber": "27SSSK12-1 / 27SSSK12-2",
            "itemName": "Heritage Layer Midi Skirt",
            "description": "Asymmetrical midi skirt with structured upper panel, sheer organza layered hem with Korean traditional motif pattern, and oversized CC embroidery.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Upper Panel: 70% Silk, 30% Polyester (Gold Foil Finish); Lower Layer: 100% Polyester (Sheer Organza); Lining: 95% Polyester, 5% Spandex",
            "colorPattern": "Pastel Yellow 55%, Ice Castle 45%",
            "retailTicket": "$6,800.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/womenswear/heritage-layer-midi-skirt.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Top",
            "styleNumber": "27SSLS13-1 / 27SSLS13-2",
            "itemName": "Blossom Ruffle Top",
            "description": "Ruffed long sleeve dress/top with tonal jacquard texture, layered tulle hem, and crystal embellishment detail.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 65% Polyester, 25% Viscose, 10% Silk (Jacquard); Hem: 100% Polyester (Soft Tulle); Lining: 95% Polyester, 5% Spandex",
            "colorPattern": "Barely Pink 60%, Pastel Yellow 40%",
            "retailTicket": "$5,200.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/womenswear/blossom-ruffle-top.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Jacket",
            "styleNumber": "27SSJK14-1 / 27SSJK14-2",
            "itemName": "Knot Tweed Jacket",
            "description": "Cropped tweed jacket with structured silhouette, front taegeuk-shaped knot closure detail, and gold button detail at sleeve cuffs.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 45% Cotton, 30% Wool, 15% Polyester, 10% Acrylic (Tweed); Lining: 100% Silk",
            "colorPattern": "Barely Pink 50%, Ice Castle 50%",
            "retailTicket": "$9,800.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/womenswear/knot-tweed-jacket.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Dress",
            "styleNumber": "27SSDR15-1 / 27SSDR15-2",
            "itemName": "Limited Edition Norigae Mini Dress",
            "description": "Limited edition sleeveless belted mini dress with silk satin finish, contrast tweed panel, gold CC buttons, and norigae charm detail.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 90% Silk, 10% Spandex (Satin Finish); Contrast Panel: 50% Cotton, 30% Wool, 15% Polyester, 5% Metallic Fiber (Tweed); Belt: 100% Leather; Charm: Metal / Polyester",
            "colorPattern": "Scarlet Sage 70%, Clematis Blue 30%",
            "retailTicket": "$7,900.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/womenswear/limited-edition-norigae-mini-dress.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Tube Top",
            "styleNumber": "27SSTT11",
            "itemName": "Tube Top",
            "description": "Silky tank top with ruched detail and Korean traditional ribbon tie.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "Body: 90% Silk, 10% Viscose; Tie: 40% Cotton, 60% Silk",
            "colorPattern": "Ice Castle Blue 65%, Pastel Yellow 35%",
            "retailTicket": "$4,800.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/womenswear/tube-top.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Skirt",
            "styleNumber": "27SSSK12",
            "itemName": "Skirt",
            "description": "Fluid midi skirt with pearl detail on the pockets, Korean traditional lucky charm, and intricate pattern embroidery.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "Body: 85% Silk, 15% Viscose; Waist: 100% Cotton",
            "colorPattern": "Tap Shoe Black 60%, Snow White 40%",
            "retailTicket": "$6,650.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/womenswear/skirt.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Blouse",
            "styleNumber": "27SSLS13",
            "itemName": "Long Sleeve Blouse",
            "description": "Silk long sleeved blouse with Korean traditional collar and pattern detail, and Chanel logo chain.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "90% Silk, 10% Elastane",
            "colorPattern": "Snow White 60%, Barely Pink 40%",
            "retailTicket": "$5,300.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/womenswear/long-sleeve-blouse.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Jacket",
            "styleNumber": "27SSJK14",
            "itemName": "Jacket",
            "description": "Signature crop tweed jacket with two pockets, Korean traditional lucky charm, and Chanel logo buttons.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "60% Wool, 40% Cotton",
            "colorPattern": "Pastel Yellow 50%, Snow White 50%",
            "retailTicket": "$10,300.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/womenswear/jacket.jpg"
        },
        {
            "category": "Womenswear",
            "classification": "Dress",
            "styleNumber": "27SSDR15",
            "itemName": "Dress",
            "description": "Korean traditional Hanbok-style layered wrap midi dress with Chanel tweed ribbon belt and logo.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "Body: 80% Silk, 20% Polyester; Belt: 40% Cotton, 40% Wool, 20% Polyester",
            "colorPattern": "Scarlet Sage 30%, Clematis Blue 70%",
            "retailTicket": "$8,850.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/womenswear/dress.jpg"
        },
        {
            "category": "Menswear",
            "classification": "Coat",
            "styleNumber": "27SSCT01",
            "itemName": "Sheer Hanbok Coat",
            "description": "Lightweight silk organza coat inspired by the traditional hanbok silhouette.",
            "sizes": "46-52(EU)",
            "fabricMaterial": "Body: 100% Silk (Organza); Hardware: Gold-tone metal charm",
            "colorPattern": "Ice Castle Blue 60%, Clematis Blue 40%",
            "retailTicket": "$11,800.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/menswear/sheer-hanbok-coat.jpg"
        },
        {
            "category": "Menswear",
            "classification": "Polo Shirt",
            "styleNumber": "27SSPO02",
            "itemName": "Polo Shirt",
            "description": "A structured knit polo featuring contrast trim at the collar and placket.",
            "sizes": "46-52(EU)",
            "fabricMaterial": "Body: 70% Cotton, 30% Silk (Pique knit); Collar/Cuffs: 100% Cotton (Rib knit)",
            "colorPattern": "Snow White 50%, Tap Shoe Black 50%",
            "retailTicket": "$4,650.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/menswear/polo-shirt.jpg"
        },
        {
            "category": "Menswear",
            "classification": "Cardigan",
            "styleNumber": "27SSCD03",
            "itemName": "Cardigan",
            "description": "Classic trimmed tweed cardigan.",
            "sizes": "46-52(EU)",
            "fabricMaterial": "Body: 60% Cotton, 25% Silk, 15% Polyamide (Boucle tweed); Trim: 70% Cotton, 30% Viscose (Braided trim); Closures: Gold-tone metal buttons",
            "colorPattern": "Pastel Yellow 43%, Barely Pink 43%",
            "retailTicket": "$10,500.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/menswear/cardigan.jpg"
        },
        {
            "category": "Menswear",
            "classification": "Trousers",
            "styleNumber": "27SSTS04",
            "itemName": "Trousers",
            "description": "Wide-leg tailored trousers.",
            "sizes": "46-52(EU)",
            "fabricMaterial": "Body: 60% Viscose, 40% Silk; Interfacing: 100% Cotton; Closures: Gold-tone metal buttons; Hardware: Gold-tone metal charm",
            "colorPattern": "Snow White 70%, Ice Castle Blue 30%",
            "retailTicket": "$5,200.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/menswear/trousers.jpg"
        },
        {
            "category": "Menswear",
            "classification": "Set",
            "styleNumber": "27SSST05",
            "itemName": "Hanbok Inspired Sets",
            "description": "Tweed wrap hanbok top with matching tailored tweed shorts.",
            "sizes": "46-52(EU)",
            "fabricMaterial": "Body: 50% Linen, 30% Silk, 20% Cotton (Textured tweed); Trim: 100% Silk binding; Pocket Lining: 100% Cotton; Closures: Gold-tone metal buttons",
            "colorPattern": "Scarlet Sage 30%, Clematis Blue 70%",
            "retailTicket": "$14,500.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/menswear/hanbok-inspired-sets.jpg"
        },
        {
            "category": "Activewear",
            "classification": "Ready-to-Wear / Tennis Dress",
            "styleNumber": "27SSDR01",
            "itemName": "Hanbok Inspired Tennis Dress",
            "description": "A pleated tennis dress reinterpreting the hanbok wrap silhouette.",
            "sizes": "34-42 (EU)",
            "fabricMaterial": "75% Polyamide, 20% Elastane, 5% Silk",
            "colorPattern": "Snow White, Tap Shoe Black",
            "retailTicket": "$7,200.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/activewear/hanbok-inspired-tennis-dress.jpg"
        },
        {
            "category": "Activewear",
            "classification": "Ready-to-Wear / Tank Top",
            "styleNumber": "27SSTP02",
            "itemName": "Patterned Tank",
            "description": "A fitted athletic tank inspired by jeogori-style overlapping panels and subtle Korean-inspired patterns.",
            "sizes": "34-42 (EU)",
            "fabricMaterial": "77% Polyamide, 18% Elastane, 5% Silk",
            "colorPattern": "Pastel Yellow, Barely Pink",
            "retailTicket": "$4,250.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/activewear/patterned-tank.jpg"
        },
        {
            "category": "Activewear",
            "classification": "Ready-to-Wear / Shorts",
            "styleNumber": "27SSSK03",
            "itemName": "Running Shorts",
            "description": "Lightweight running shorts featuring a layered wrap front, referencing hanbok skirt draping and a norigae ribbon.",
            "sizes": "34-42 (EU)",
            "fabricMaterial": "Outer wrap: 82% Polyamide, 18% Elastane; Inner Short: 78% Polyamide, 22% Elastane; Waistband: 70% Polyamide, 30% Elastane",
            "colorPattern": "Ice Castle Blue, Barely Pink",
            "retailTicket": "$3,920.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/activewear/running-shorts.jpg"
        },
        {
            "category": "Activewear",
            "classification": "Ready-to-Wear / Wrap Top",
            "styleNumber": "27SSTP04",
            "itemName": "Long Sleeve Wrap Top",
            "description": "A fitted wrap top influenced by traditional hanbok closures.",
            "sizes": "34-42 (EU)",
            "fabricMaterial": "Body: 73% Polyamide, 22% Elastane, 5% Silk; Ribbon Detail: 85% Polyamide, 15% Elastane",
            "colorPattern": "Pastel Yellow, Ice Castle Blue",
            "retailTicket": "$3,710.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/activewear/long-sleeve-wrap-top.jpg"
        },
        {
            "category": "Activewear",
            "classification": "Ready-to-Wear / Set",
            "styleNumber": "27SSST05",
            "itemName": "Bra + Biker Short Set",
            "description": "A supportive set made from stretch performance fabric with subtle Korean-inspired patterns.",
            "sizes": "34-42 (EU)",
            "fabricMaterial": "Sports Bra: 76% Polyamide, 19% Elastane, 5% Silk; Biker shorts: 78% Polyamide, 22% Elastane",
            "colorPattern": "Scarlet Sage, Clematis Blue",
            "retailTicket": "$8,240.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/activewear/bra-biker-short-set.jpg"
        },
        {
            "category": "Swimwear",
            "classification": "Swimsuit (Women)",
            "styleNumber": "27SSSS11",
            "itemName": "Swimsuit (Women)",
            "description": "A simple one-piece swimsuit with small lucky charm tie at the waist and basic Chanel logo on the front.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "Body: 80% Nylon, 20% Spandex; Tie: 100% Polyester",
            "colorPattern": "Snow White 20%, Tap Shoe Black 80%",
            "retailTicket": "$1,400.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/swimwear/swimsuit-women.jpg"
        },
        {
            "category": "Swimwear",
            "classification": "Bikini (Women)",
            "styleNumber": "27SSBK12",
            "itemName": "Bikini (Women)",
            "description": "A triangle bikini with metallic Chanel logo at the center of the top, and a string with small lucky charms surrounding the waist.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "80% Nylon, 20% Spandex",
            "colorPattern": "Pastel Yellow 45%, Ice Castle Blue 55%",
            "retailTicket": "$1,630.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/swimwear/bikini-women.jpg"
        },
        {
            "category": "Swimwear",
            "classification": "Swimtrunk (Men)",
            "styleNumber": "27SSST21",
            "itemName": "Swimtrunk (Men)",
            "description": "A swimtrunk with elastic waistband, drawstrings with Korean traditional lucky charms, and Korean traditional patterned detail with Chanel logo on the side pocket.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "90% Polyester, 10% Spandex",
            "colorPattern": "Snow White 40%, Ice Castle Blue 60%",
            "retailTicket": "$1,500.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/swimwear/swimtrunk-men.jpg"
        },
        {
            "category": "Swimwear",
            "classification": "Swimsuit (Girls)",
            "styleNumber": "27SSSS31",
            "itemName": "Swimsuit (Girls)",
            "description": "Swimsuit for kids with slightly stretchable waist wrap with a Korean traditional lucky charm and a Chanel logo at the middle of the body part.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "Body: 80% Nylon, 20% Spandex; Waist Wrap: 95% Polyester, 5% Spandex",
            "colorPattern": "Pastel Yellow 60%, Barely Pink 40%",
            "retailTicket": "$1,340.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/swimwear/swimsuit-girls.jpg"
        },
        {
            "category": "Swimwear",
            "classification": "Setup (Girls)",
            "styleNumber": "27SSSU32",
            "itemName": "Setup (Girls)",
            "description": "Setup swimwear for kids with puff sleeves and fitted top. A wrap style detail across the chest with a lucky charm and a Korean traditional repeating pattern.",
            "sizes": "FR34-FR42",
            "fabricMaterial": "80% Nylon, 20% Spandex",
            "colorPattern": "Scarlet Sage 55%, Clematis Blue 45%",
            "retailTicket": "$1,450.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/swimwear/setup-girls.jpg"
        },
        {
            "category": "Innerwear",
            "classification": "Bodysuit",
            "styleNumber": "27SSBS11-1 / 27SSBS11-2",
            "itemName": "Seamline Mesh Bodysuit",
            "description": "Structured mesh bodysuit with satin piping inspired by hanbok seam lines, with CC logo patch on waistline and norigae tassel detail on middle.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 85% Nylon, 15% Spandex; Contrast Piping: 90% Polyester, 10% Spandex (Satin Finish); Lining: 92% Polyester, 8% Spandex; Trim: Metal / Polyester (Decorative Charm)",
            "colorPattern": "Tap Shoe 60%, Snow White 40%",
            "retailTicket": "$3,500.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/innerwear/seamline-mesh-bodysuit.jpg"
        },
        {
            "category": "Innerwear",
            "classification": "Slip Dress",
            "styleNumber": "27SSSD12-1 / 27SSSD12-2",
            "itemName": "Hanji Blossom Slip Dress",
            "description": "Bias-cut slip dress with hanji-inspired plum blossom and lattice motifs, finished with lace trim and a central maehwa detail.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 100% Polyester (Silk Touch Satin); Overlay: 100% Nylon (Printed Sheer Mesh); Lining: 95% Polyester, 5% Spandex; Trim: Polyester / Metal",
            "colorPattern": "Ice Castle 55%, Pastel Yellow 45%",
            "retailTicket": "$3,200.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/innerwear/hanji-blossom-slip-dress.jpg"
        },
        {
            "category": "Innerwear",
            "classification": "Lingerie Set",
            "styleNumber": "27SSLS13-1 / 27SSLS13-2",
            "itemName": "Maehwa Pearl Lingerie Set",
            "description": "Structured lingerie set with contrast piping, highlighted by an oversized maehwa mother-of-pearl charm.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Bra Body: 85% Nylon, 15% Spandex; Bottom: 90% Nylon, 10% Spandex; Trim: 100% Polyester (Lace); Lining: 92% Polyester, 8% Spandex; Charm: Mother of pearl + Metal",
            "colorPattern": "Barely Pink 65%, Pastel Yellow 35%",
            "retailTicket": "$2,600.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/innerwear/maehwa-pearl-lingerie-set.jpg"
        },
        {
            "category": "Innerwear",
            "classification": "Babydoll",
            "styleNumber": "27SSBD14-1 / 27SSBD14-2",
            "itemName": "Cloud Veil Babydoll",
            "description": "Sheer babydoll inspired by traditional undergarment volume, featuring lattice and cloud motifs with tassel detail.",
            "sizes": "FR 34, 36, 38, 40",
            "fabricMaterial": "Body: 100% Polyester (Soft Sheer Chiffon); Inner Slip: 90% Polyester, 10% Spandex; Trim: Polyester; Charm Detail: Polyester / Metal",
            "colorPattern": "Barely Pink 55%, Ice Castle 45%",
            "retailTicket": "$3,900.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/innerwear/cloud-veil-babydoll.jpg"
        },
        {
            "category": "Innerwear",
            "classification": "Robe",
            "styleNumber": "27SSRB15-1 / 27SSRB15-2",
            "itemName": "Limited Edition Norigae Wrap Robe",
            "description": "Limited edition long wrap robe with hanbok color blocking and floral motifs, finished with norigae waist tie and CC logo applique on chest.",
            "sizes": "FR 36, 38, 40, 42",
            "fabricMaterial": "Body: 100% Polyester (Silk Satin Finish); Contrast Panel: 100% Polyester (Printed Satin); Belt: 100% Polyester; Trim: Metal / Polyester",
            "colorPattern": "Scarlet Sage + Clematis Blue 70%, Snow White + Emerald 30%",
            "retailTicket": "$7,500.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/innerwear/limited-edition-norigae-wrap-robe.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Bag",
            "styleNumber": "26SSB21",
            "itemName": "Bag",
            "description": "Swan-shaped novelty handbag with structured body, chain strap, and logo detail.",
            "sizes": "One size (Approx. 20cm W x 15cm H x 10cm D)",
            "fabricMaterial": "Body: Calfskin Leather 90%, Metal 10%; Lining: Lambskin Leather 100%",
            "colorPattern": "Tap Shoe 60%, Snow White 40%",
            "retailTicket": "$10,600.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/bag.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Charm",
            "styleNumber": "26SSC22",
            "itemName": "Charm",
            "description": "Decorative knot charm with pearl detail, braided cord, and gold-tone hardware.",
            "sizes": "One size (Approx. 12cm length)",
            "fabricMaterial": "Metal 70%, Resin Pearl 20%, Textile Cord 10%",
            "colorPattern": "Pastel Yellow 60%, Ice Castle 40%",
            "retailTicket": "$1,200.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/charm.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Hat",
            "styleNumber": "26SSH23",
            "itemName": "Hat",
            "description": "Wide brim bucket hat with contrast ribbon scarf detail and logo accent.",
            "sizes": "S, M, L",
            "fabricMaterial": "Body: Cotton 100%; Trim: Polyester 70%, Silk 30%",
            "colorPattern": "Ice Castle 60%, Barely Pink 40%",
            "retailTicket": "$980.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/hat.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Sunglasses",
            "styleNumber": "26SSS24",
            "itemName": "Sunglasses",
            "description": "Oversized cat-eye sunglasses with gradient lenses and logo detail on temples.",
            "sizes": "One size",
            "fabricMaterial": "Frame: Acetate 100%; Lens: Nylon 100%; Hardware: Metal 100%",
            "colorPattern": "Barely Pink 40%, Pastel Yellow 60%",
            "retailTicket": "$650.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/sunglasses.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Belt",
            "styleNumber": "26SSB25",
            "itemName": "Belt",
            "description": "Slim chain belt with decorative charms, tassel detail, and adjustable clasp closure.",
            "sizes": "S, M, L",
            "fabricMaterial": "Metal 85%, Textile Cord 15%",
            "colorPattern": "Scarlet Sage 50%, Clematis Blue 50%",
            "retailTicket": "$2,000.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/belt.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Bracelet",
            "styleNumber": "26SSBR20",
            "itemName": "Bracelet",
            "description": "Wide cuff bracelet with engraved floral motif, crystal-inspired pattern, and logo plate detail.",
            "sizes": "S, M, L",
            "fabricMaterial": "Metal 85%, Resin 10%, Crystal 5%",
            "colorPattern": "Tap Shoe 60%, Snow White 40%",
            "retailTicket": "$2,450.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/bracelet.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Hair Pin (Binyeo)",
            "styleNumber": "26SSHP21",
            "itemName": "Hair Pin (Binyeo)",
            "description": "Decorative binyeo hair pin with dangling pearl chains, crystal accents, and logo charm detail.",
            "sizes": "One Size (Approx. 18cm length)",
            "fabricMaterial": "Metal 75%, Resin Pearl 15%, Crystal 5%, Enamel 5%",
            "colorPattern": "Pastel Yellow 60%, Ice Castle 40%",
            "retailTicket": "$1,850.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/hair-pin-binyeo.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Ring",
            "styleNumber": "26SSRG22",
            "itemName": "Ring",
            "description": "Double camellia flower ring with enamel petals and gold-tone logo detail.",
            "sizes": "One Size (Adjustable)",
            "fabricMaterial": "Metal 80%, Resin 20%",
            "colorPattern": "Ice Castle 60%, Barely Pink 40%",
            "retailTicket": "$1,420.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/ring.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Hair Pin",
            "styleNumber": "26SSHP23",
            "itemName": "Hair Pin",
            "description": "Decorative logo barrette hair pin with pearl ends, floral motif, and textured enamel inlay.",
            "sizes": "One Size (Approx. 9cm length)",
            "fabricMaterial": "Metal 65%, Resin 20%, Enamel 15%",
            "colorPattern": "Barely Pink 40%, Pastel Yellow 60%",
            "retailTicket": "$1,680.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/hair-pin.jpg"
        },
        {
            "category": "Accessories",
            "classification": "Necklace",
            "styleNumber": "26SSNE24",
            "itemName": "Necklace",
            "description": "Long hoop necklace with camellia flower detail, chain tassels, and pearl drop accents.",
            "sizes": "One Size",
            "fabricMaterial": "Metal 70%, Resin Pearl 20%, Textile 10%",
            "colorPattern": "Scarlet Sage 50%, Clematis Blue 50%",
            "retailTicket": "$3,250.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/accessories/necklace.jpg"
        },
        {
            "category": "Jewelry",
            "classification": "Hair Pin",
            "styleNumber": "27SHP01",
            "itemName": "Plum Blossom Hair Pin (Binyeo)",
            "description": "A modern binyeo inspired by Korean plum blossoms, finished with soft jade-pink drops and delicate pearl details.",
            "sizes": "Free",
            "fabricMaterial": "18K beige gold/18k white gold, mother-of-pearl, rose quartz, Akoya pearls, diamond accents",
            "colorPattern": "18K Beige Gold 50%, 18K White Gold 50%",
            "retailTicket": "$13,500.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/jewelry/plum-blossom-hair-pin-binyeo.jpg"
        },
        {
            "category": "Jewelry",
            "classification": "Necklace",
            "styleNumber": "27SSNK02",
            "itemName": "Dancheong Pendant Necklace",
            "description": "Traditional dancheong patterns are reimagined in pastel enamel for an elegant everyday statement.",
            "sizes": "Free",
            "fabricMaterial": "18K beige gold/18K white gold, mother-of-pearl, pastel enamel, Akoya pearl",
            "colorPattern": "18K Beige Gold 50%, 18K White Gold 50%",
            "retailTicket": "$8,800.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/jewelry/dancheong-pendant-necklace.jpg"
        },
        {
            "category": "Jewelry",
            "classification": "Earrings",
            "styleNumber": "27SSER03",
            "itemName": "Hanok Eave Earrings",
            "description": "Inspired by the curved rooflines of hanok architecture, these earrings balance structure and refinement.",
            "sizes": "Free",
            "fabricMaterial": "18K beige gold/18K white gold, diamonds (baguette cut) and small accents, Akoya pearls",
            "colorPattern": "18K Beige Gold 50%, 18K White Gold 50%",
            "retailTicket": "$11,200.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/jewelry/hanok-eave-earrings.jpg"
        },
        {
            "category": "Jewelry",
            "classification": "Ring",
            "styleNumber": "27SSRG04",
            "itemName": "Jogakbo Inspired Ring",
            "description": "A geometric patchwork ring influenced by traditional Korean jogakbo textiles, crafted with luminous enamel panels.",
            "sizes": "45-64(EU)",
            "fabricMaterial": "18K beige gold / 18K white gold, mother-of-pearl mosaic, pastel enamel",
            "colorPattern": "18K Beige Gold 45%, 18K White Gold 55%",
            "retailTicket": "$6,900.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/jewelry/jogakbo-inspired-ring.jpg"
        },
        {
            "category": "Jewelry",
            "classification": "Brooch",
            "styleNumber": "27SSBR05",
            "itemName": "Lotus Tassel Brooch",
            "description": "Inspired by graceful traditional Korean norigae ornaments, this brooch combines tassels, lotus motifs, and pearls into a sleek modern design.",
            "sizes": "Free",
            "fabricMaterial": "18K beige gold / 18K white gold, mother-of-pearl, Akoya pearls, diamond accents",
            "colorPattern": "18K Beige Gold 40%, 18K White Gold 60%",
            "retailTicket": "$15,800.00",
            "orderBy": "Diane Kim",
            "imagePath": "images/products/jewelry/lotus-tassel-brooch.jpg"
        },
        {
            "category": "Footwear",
            "classification": "Flats",
            "styleNumber": "27SSBF07",
            "itemName": "Ballet Flats",
            "description": "Ballet flats with Korean-inspired flowers.",
            "sizes": "37.5, 38.5 (FR)",
            "fabricMaterial": "Lambskin, Cotton",
            "colorPattern": "Blue 60%, Yellow 40%",
            "retailTicket": "$1,225",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/footwear/ballet-flats.jpg"
        },
        {
            "category": "Footwear",
            "classification": "Kitten Heels",
            "styleNumber": "27SSRH07",
            "itemName": "Kitten Heels",
            "description": "Kitten heels with norigae details and tassels.",
            "sizes": "37.5, 38.5 (FR)",
            "fabricMaterial": "Patented Calfskin, Cotton, Silk",
            "colorPattern": "Pink 40%, Blue 60%",
            "retailTicket": "$1,400",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/footwear/kitten-heels.jpg"
        },
        {
            "category": "Footwear",
            "classification": "Pumps",
            "styleNumber": "27SSPS07",
            "itemName": "Pumps",
            "description": "Pumps with Korean-inspired flower ornament in tweed.",
            "sizes": "37.5, 38.5 (FR)",
            "fabricMaterial": "Lambskin, Patented Calfskin, Silk, Cotton, Rayon",
            "colorPattern": "White 50%, Black 50%",
            "retailTicket": "$1,375",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/footwear/pumps.jpg"
        },
        {
            "category": "Footwear",
            "classification": "Mary Jane Flats",
            "styleNumber": "27SSMJF07",
            "itemName": "Mary Jane Flats",
            "description": "Mary Jane flats with norigae details, tassels, and dancheong-inspired pattern.",
            "sizes": "37.5, 39 (FR)",
            "fabricMaterial": "Lambskin, Silk, Cotton",
            "colorPattern": "Yellow 45%, Pink 55%",
            "retailTicket": "$1,400",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/footwear/mary-jane-flats.jpg"
        },
        {
            "category": "Footwear",
            "classification": "Sneakers",
            "styleNumber": "27SSKS07",
            "itemName": "Sneakers",
            "description": "Quilted sneakers with Dancheong-inspired colors, tassels, and norigae details.",
            "sizes": "37.5, 39 (FR)",
            "fabricMaterial": "Calfskin, Suede Calfskin, Silk, Cotton",
            "colorPattern": "Red 40%, Blue 60%",
            "retailTicket": "$1,400",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/footwear/sneakers.jpg"
        },
        {
            "category": "Beauty",
            "classification": "Eyeliner",
            "styleNumber": "27SSEL07",
            "itemName": "Eyeliner",
            "description": "Potted eyeliner with a brush.",
            "sizes": "4g",
            "fabricMaterial": "Plastic, Cotton, Rayon, Faux Leather",
            "colorPattern": "Blue 50%, Pink 50%",
            "retailTicket": "$50",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/beauty/eyeliner.jpg"
        },
        {
            "category": "Beauty",
            "classification": "Concealer",
            "styleNumber": "27SSCC07",
            "itemName": "Concealer",
            "description": "Concealer with inspiration from Korean traditional mother-of-pearl lacquerware making.",
            "sizes": "8.5g",
            "fabricMaterial": "Mother-of-pearl imitation, Glass, Plastic",
            "colorPattern": "Black 50%, White 50%",
            "retailTicket": "$75",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/beauty/concealer.jpg"
        },
        {
            "category": "Beauty",
            "classification": "Cushion Foundation",
            "styleNumber": "27SSPS07",
            "itemName": "Cushion Foundation",
            "description": "Cushion foundation with mother-of-pearl decoration, norigae, and tassel.",
            "sizes": "10g",
            "fabricMaterial": "Faux Leather, Rayon, Cotton, Rayon",
            "colorPattern": "Yellow 50%, Blue 50%",
            "retailTicket": "$115",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/beauty/cushion-foundation.jpg"
        },
        {
            "category": "Beauty",
            "classification": "Gel Cream",
            "styleNumber": "27SSMJF07",
            "itemName": "Gel Cream",
            "description": "Gel cream with Korean traditional moon-jar inspired packaging with flower details.",
            "sizes": "1.7oz",
            "fabricMaterial": "Porcelain, Faux Leather",
            "colorPattern": "Black 45%, White 55%",
            "retailTicket": "$125",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/beauty/gel-cream.jpg"
        },
        {
            "category": "Beauty",
            "classification": "Loose Powder",
            "styleNumber": "27SSKS07",
            "itemName": "Loose Powder",
            "description": "A loose powder with packaging inspired from yeonjeok, a Korean traditional porcelain bowl used to hold water when grinding ink.",
            "sizes": "25g",
            "fabricMaterial": "Faux Leather, Plastic",
            "colorPattern": "Red 45%, Blue 55%",
            "retailTicket": "$80",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/beauty/loose-powder.jpg"
        },
        {
            "category": "Home Textile",
            "classification": "Pillow",
            "styleNumber": "27SSPL11",
            "itemName": "Pillow",
            "description": "A rectangle shape goose down filling pillow with Korean traditional lucky charm in the upper right side and a Chanel logo.",
            "sizes": "One size",
            "fabricMaterial": "Outer shell: 80% Cotton, 20% Silk; Inside: 100% Goose down filling",
            "colorPattern": "Snow White 30%, Tap Shoe Black 70%",
            "retailTicket": "$500.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/home-textile/pillow.jpg"
        },
        {
            "category": "Home Textile",
            "classification": "Blind",
            "styleNumber": "27SSBL12",
            "itemName": "Blind",
            "description": "A blind with a big Chanel logo in the center and Korean traditional patterns along the edges.",
            "sizes": "One size",
            "fabricMaterial": "70% Polyester, 30% Linen",
            "colorPattern": "Snow White 70%, Ice Castle Blue 30%",
            "retailTicket": "$2,970.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/home-textile/blind.jpg"
        },
        {
            "category": "Home Textile",
            "classification": "Bath Towel",
            "styleNumber": "27SSBT13",
            "itemName": "Bath Towel",
            "description": "A soft cotton bath towel with Chanel logo in the center and around edges and Korean traditional patterns.",
            "sizes": "One size",
            "fabricMaterial": "80% Cotton, 20% Viscose",
            "colorPattern": "Ice Castle Blue 40%, Pastel Yellow 60%",
            "retailTicket": "$350.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/home-textile/bath-towel.jpg"
        },
        {
            "category": "Home Textile",
            "classification": "Bathrobe",
            "styleNumber": "27SSBR14",
            "itemName": "Bathrobe",
            "description": "A long bathrobe with a Korean traditional pattern and a charm attached on the belt and the Chanel logo on the sleeves.",
            "sizes": "One size",
            "fabricMaterial": "80% Cotton, 20% Viscose",
            "colorPattern": "Pastel Yellow 40%, Barely Pink 60%",
            "retailTicket": "$460.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/home-textile/bathrobe.jpg"
        },
        {
            "category": "Home Textile",
            "classification": "Slipper",
            "styleNumber": "27SSSP15",
            "itemName": "Slipper",
            "description": "An indoor slipper with the Chanel logo and Korean traditional patterns in the upper side.",
            "sizes": "FR35-FR41",
            "fabricMaterial": "Upper side: 80% Cotton velvet, 20% Polyester; Inner: 70% Viscose, 30% Cotton",
            "colorPattern": "Scarlet Sage 55%, Clematis Blue 45%",
            "retailTicket": "$1,200.00",
            "orderBy": "Jisoo Lee",
            "imagePath": "images/products/home-textile/slipper.jpg"
        },
        {
            "category": "Kidswear Girls",
            "classification": "Dress",
            "styleNumber": "27SSKRD07",
            "itemName": "Dress",
            "description": "Flounce sleeve dress with applique tweed clouds and flowers.",
            "sizes": "14, 16",
            "fabricMaterial": "Cotton, Silk, Rayon, Linen",
            "colorPattern": "Blue 60%, Yellow 40%",
            "retailTicket": "$7,350.00",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/kidswear-girls/dress-flounce.jpg"
        },
        {
            "category": "Kidswear Girls",
            "classification": "Tweed Jacket",
            "styleNumber": "27SSKTJ07",
            "itemName": "Tweed Jacket",
            "description": "Tweed body with applique tweed clouds and flowers.",
            "sizes": "12, 14",
            "fabricMaterial": "Cotton, Silk, Rayon",
            "colorPattern": "White 50%, Blue 50%",
            "retailTicket": "$6,500.00",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/kidswear-girls/tweed-jacket.jpg"
        },
        {
            "category": "Kidswear Girls",
            "classification": "Skirt",
            "styleNumber": "27SSKSK07",
            "itemName": "Skirt",
            "description": "Tweed side panels with applique tweed clouds and flowers onto side panels. Linen front.",
            "sizes": "12, 14",
            "fabricMaterial": "Cotton, Silk, Rayon, Linen",
            "colorPattern": "White 55%, Blue 45%",
            "retailTicket": "$5,200.00",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/kidswear-girls/skirt.jpg"
        },
        {
            "category": "Kidswear Girls",
            "classification": "T-Shirt",
            "styleNumber": "27SSKTS07",
            "itemName": "T-Shirt",
            "description": "Lacquered flower trim, tweed body, and chest pocket.",
            "sizes": "12, 14",
            "fabricMaterial": "Cotton, Silk, Rayon",
            "colorPattern": "Black 55%, Pink 45%",
            "retailTicket": "$4,250.00",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/kidswear-girls/t-shirt.jpg"
        },
        {
            "category": "Kidswear Girls",
            "classification": "Dress",
            "styleNumber": "27SSKDR07",
            "itemName": "Dress",
            "description": "Linen and tweed Hanbok-inspired patchwork. Tweed ribbon. Chanel logo trim on hem.",
            "sizes": "14, 16",
            "fabricMaterial": "Cotton, Linen, Silk",
            "colorPattern": "Blue 55%, Red 45%",
            "retailTicket": "$9,350.00",
            "orderBy": "Alex Moon",
            "imagePath": "images/products/kidswear-girls/dress-patchwork.jpg"
        },
        {
            "category": "Kidswear Boys",
            "classification": "Jumpsuit",
            "styleNumber": "26SSJS031",
            "itemName": "Jumpsuit",
            "description": "Korean traditional inspired wrap-style jumpsuit with contrast trim, utility cargo pockets, belt detail, and logo charm.",
            "sizes": "4-12Y",
            "fabricMaterial": "Body: Cotton 70%, Polyester 30%; Belt: Cotton 60%, Wool 40%",
            "colorPattern": "Tap Shoe 60%, Snow White 40%",
            "retailTicket": "$3,800.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/kidswear-boys/jumpsuit.jpg"
        },
        {
            "category": "Kidswear Boys",
            "classification": "Vest",
            "styleNumber": "26SSVT032",
            "itemName": "Vest",
            "description": "Textured sleeveless vest with asymmetric front closure, braided trim, and Korean traditional inspired ornament detail.",
            "sizes": "4-12Y",
            "fabricMaterial": "Body: Cotton 60%, Wool 40% (Tweed)",
            "colorPattern": "Ice Castle 60%, Barely Pink 40%",
            "retailTicket": "$2,400.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/kidswear-boys/vest.jpg"
        },
        {
            "category": "Kidswear Boys",
            "classification": "Pants",
            "styleNumber": "26SSPT033",
            "itemName": "Pants",
            "description": "Relaxed fit jogger pants with elastic waistband, adjustable drawstring, and embroidered motif detail.",
            "sizes": "4-12Y",
            "fabricMaterial": "Body: Cotton 65%, Linen 35%",
            "colorPattern": "Ice Castle 50%, Pastel Yellow 50%",
            "retailTicket": "$1,900.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/kidswear-boys/pants.jpg"
        },
        {
            "category": "Kidswear Boys",
            "classification": "Coat",
            "styleNumber": "26SSCT034",
            "itemName": "Coat",
            "description": "Traditional hanbok-inspired wrap coat with wide sleeves, belt closure, patch pockets, and subtle embroidered pattern.",
            "sizes": "4-12Y",
            "fabricMaterial": "Body: Wool 80%, Cotton 20%; Belt: Wool 70%, Polyester 30%",
            "colorPattern": "Snow White 60%, Ice Castle 40%",
            "retailTicket": "$7,200.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/kidswear-boys/coat.jpg"
        },
        {
            "category": "Kidswear Boys",
            "classification": "Hooded Cardigan",
            "styleNumber": "26SSCD035",
            "itemName": "Hooded Cardigan",
            "description": "Knit hooded cardigan with front button closure, contrast trim, and logo embroidery detail.",
            "sizes": "4-12Y",
            "fabricMaterial": "Body: Wool 70%, Cashmere 30%; Hood Lining: Cotton 100%",
            "colorPattern": "Clematis Blue 60%, Scarlet Sage 40%",
            "retailTicket": "$3,200.00",
            "orderBy": "Chaeyoung Shim",
            "imagePath": "images/products/kidswear-boys/hooded-cardigan.jpg"
        },
        {
            "category": "Pet",
            "classification": "Pet House",
            "styleNumber": "27SSPH11-1 / 27SSPH11-2",
            "itemName": "Quilted Hanok Pet House",
            "description": "Quilted pet house inspired by traditional hanok roof silhouettes, finished with gold piping, lattice windows, and a hanging norigae tassel detail beneath a CC plaque.",
            "sizes": "S, M, L",
            "fabricMaterial": "Exterior: 70% Polyester, 30% Polyurethane (Quilted Vegan Leather); Interior Cushion: 95% Polyester, 5% Spandex; Trim: Metal / Polyester Tassel",
            "colorPattern": "Tap Shoe 60%, Snow White 40%",
            "retailTicket": "$5,900.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/pet/quilted-hanok-pet-house.jpg"
        },
        {
            "category": "Pet",
            "classification": "Cushion Bed",
            "styleNumber": "27SSCB12-1 / 27SSCB12-2",
            "itemName": "Moon Jar Cushion Bed",
            "description": "Rounded cushion bed inspired by Korean moon jars, featuring plum blossom embroidery, tweed trim edging, and a quilted camellia charm detail.",
            "sizes": "S, M, L",
            "fabricMaterial": "Body: 85% Polyester, 15% Cotton Velvet; Trim: 70% Cotton, 30% Polyester (Tweed); Filling: 100% Polyester Fiber",
            "colorPattern": "Barely Pink 55%, Ice Castle 45%",
            "retailTicket": "$3,200.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/pet/moon-jar-cushion-bed.jpg"
        },
        {
            "category": "Pet",
            "classification": "Pet Carrier",
            "styleNumber": "27SSPC13-1 / 27SSPC13-2",
            "itemName": "Norigae Travel Carrier",
            "description": "Structured vanity pet carrier with changsal lattice panels, gold chain straps, floral Korean motifs, and norigae-inspired tassel hardware.",
            "sizes": "S, M, L",
            "fabricMaterial": "Exterior: 90% Polyester, 10% Spandex (Printed Satin Finish); Lining: 95% Polyester, 5% Spandex; Mesh Window: 100% Polyester; Trim: Metal / Polyester",
            "colorPattern": "Ice Castle 60%, Pastel Yellow 40%",
            "retailTicket": "$5,500.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/pet/norigae-travel-carrier.jpg"
        },
        {
            "category": "Pet",
            "classification": "Petwear Dress",
            "styleNumber": "27SSPW14-1 / 27SSPW14-2",
            "itemName": "Maehwa Corset Pet Dress",
            "description": "Pet dress with curved hanbok seam lines, oversized maehwa applique, layered lace hem, and decorative pearl tassel accents.",
            "sizes": "XS, S, M, L",
            "fabricMaterial": "Body: 88% Polyester, 12% Spandex (Jacquard); Lining: 95% Polyester, 5% Spandex; Lace Trim: 100% Nylon; Applique: Resin Pearl / Metal",
            "colorPattern": "Pastel Yellow 65%, Barely Pink 35%",
            "retailTicket": "$2,400.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/pet/maehwa-corset-pet-dress.jpg"
        },
        {
            "category": "Pet",
            "classification": "Pet Dining Set",
            "styleNumber": "27SSDS15-1 / 27SSDS15-2",
            "itemName": "Limited Edition Camellia Heritage Dining Set",
            "description": "Limited edition elevated pet dining station inspired by Korean palace furniture, featuring quilted lacquer panels, changsal lattice detailing, and decorative tassel charms.",
            "sizes": "S, M, L",
            "fabricMaterial": "Quilted Panel: 70% Polyester, 30% Polyurethane (Vegan Leather); Main Structure: Lacquered Wood; Bowls: Ceramic; Charm Detail: Metal / Polyester Tassel",
            "colorPattern": "Scarlet Sage 55%, Clematis Blue 45%",
            "retailTicket": "$5,200.00",
            "orderBy": "Juha Kim",
            "imagePath": "images/products/pet/limited-edition-camellia-heritage-dining-set.jpg"
        }
    ]
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ====================================================
    // NAVIGATION
    // ====================================================
    
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect for navigation
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ====================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ====================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ====================================================
    // SECTION FADE-IN ON SCROLL
    // ====================================================
    
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });
    
    // ====================================================
    // JOURNEY STAGES ANIMATION
    // ====================================================
    
    const journeyStages = document.querySelectorAll('.journey-stage');
    
    const journeyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    journeyStages.forEach(function(stage) {
        journeyObserver.observe(stage);
    });
    
    // ====================================================
    // CHART BAR ANIMATION
    // ====================================================
    
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const height = bar.getAttribute('data-height');
                const fill = bar.querySelector('.chart-bar-fill');
                if (fill && height) {
                    fill.style.height = height + '%';
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    chartBars.forEach(function(bar) {
        chartObserver.observe(bar);
    });
    
    // ====================================================
    // HERO ANIMATION ON LOAD
    // ====================================================
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // ====================================================
    // SUPPLY CHAIN TIER CARDS ANIMATION
    // ====================================================
    
    const tierCards = document.querySelectorAll('.tier-card');
    
    const tierObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    tierCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out ' + (index * 0.15) + 's, transform 0.6s ease-out ' + (index * 0.15) + 's';
        tierObserver.observe(card);
    });
    
    // ====================================================
    // PRODUCT COLLECTION - DISPLAY FROM EMBEDDED DATA
    // ====================================================
    
    const productsContainer = document.getElementById('products-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Category descriptions and Korean heritage keywords
    const categoryInfo = {
        'Womenswear': {
            description: 'Elegant silhouettes reimagined through Korean heritage, blending timeless CHANEL craftsmanship with traditional hanbok elements.',
            keywords: ['Hanbok Wrap', 'Norigae Detail', 'Jeogori Silhouette']
        },
        'Menswear': {
            description: 'Contemporary menswear infused with Korean traditional elements, featuring refined tailoring and artisanal details.',
            keywords: ['Hanbok Inspired', 'Durumagi Coat', 'Traditional Knot']
        },
        'Activewear': {
            description: 'Performance luxury meets Korean heritage, with athletic pieces featuring traditional wrapping and closure techniques.',
            keywords: ['Jeogori Panels', 'Norigae Ribbon', 'Traditional Pattern']
        },
        'Swimwear': {
            description: 'Resort elegance with Korean lucky charm details and traditional motifs woven into modern swimwear silhouettes.',
            keywords: ['Lucky Charm', 'Traditional Pattern', 'Heritage Detail']
        },
        'Innerwear': {
            description: 'Intimate luxury inspired by hanbok seam lines and traditional Korean textile art, featuring delicate detailing.',
            keywords: ['Hanbok Seam', 'Maehwa Blossom', 'Hanji Texture']
        },
        'Accessories': {
            description: 'Statement pieces celebrating Korean craftsmanship, from binyeo-inspired hair pins to najeonchilgi-influenced designs.',
            keywords: ['Binyeo', 'Najeonchilgi', 'Traditional Knot']
        },
        'Jewelry': {
            description: 'Fine jewelry inspired by Korean royal heritage, featuring dancheong patterns and traditional motifs in precious metals.',
            keywords: ['Dancheong', 'Plum Blossom', 'Hanok Eave']
        },
        'Footwear': {
            description: 'Elegant footwear blending French sophistication with Korean-inspired floral details and norigae embellishments.',
            keywords: ['Norigae Tassel', 'Gomusin Shape', 'Dancheong Color']
        },
        'Beauty': {
            description: 'Beauty essentials housed in packaging inspired by Korean traditional lacquerware and moon jar ceramics.',
            keywords: ['Moon Jar', 'Najeonchilgi', 'Yeonjeok Bowl']
        },
        'Home Textile': {
            description: 'Luxurious home pieces featuring Korean traditional patterns and lucky charm details for refined living spaces.',
            keywords: ['Traditional Pattern', 'Lucky Charm', 'Heritage Motif']
        },
        'Kidswear Girls': {
            description: 'Playful luxury for girls, featuring hanbok-inspired silhouettes and whimsical cloud and flower appliques.',
            keywords: ['Hanbok Patchwork', 'Cloud Motif', 'Tweed Flowers']
        },
        'Kidswear Boys': {
            description: 'Sophisticated boys\' wear with Korean heritage elements, from hanbok-inspired wraps to traditional embroidery.',
            keywords: ['Wrap Style', 'Traditional Trim', 'Heritage Embroidery']
        },
        'Pet': {
            description: 'Luxurious pet accessories inspired by Korean palace aesthetics and traditional hanok architecture.',
            keywords: ['Hanok Silhouette', 'Moon Jar Shape', 'Norigae Tassel']
        }
    };
    
    // Convert category name to key format
    function categoryToKey(category) {
        return category.toLowerCase().replace(/\s+/g, '-');
    }
    
    // Create product card HTML
    function createProductCard(product) {
        const info = categoryInfo[product.category] || { keywords: [] };
        const keyword = info.keywords[Math.floor(Math.random() * info.keywords.length)] || 'Korean Heritage';
        
        return '<div class="product-card">' +
            '<div class="product-image">' +
                '<img src="' + product.imagePath + '" alt="' + product.itemName + '" onerror="this.onerror=null; this.parentElement.innerHTML=\'<div class=image-placeholder><p>Image Coming Soon</p></div>\';">' +
            '</div>' +
            '<div class="product-details">' +
                '<span class="product-heritage-tag">' + keyword + '</span>' +
                '<p class="product-style-number">' + product.styleNumber + '</p>' +
                '<h4 class="product-name">' + product.itemName + '</h4>' +
                '<p class="product-description">' + product.description + '</p>' +
                '<div class="product-meta">' +
                    '<div class="product-meta-row">' +
                        '<strong>Category</strong>' +
                        '<span>' + product.category + '</span>' +
                    '</div>' +
                    '<div class="product-meta-row">' +
                        '<strong>Classification</strong>' +
                        '<span>' + product.classification + '</span>' +
                    '</div>' +
                    '<div class="product-meta-row">' +
                        '<strong>Sizes</strong>' +
                        '<span>' + product.sizes + '</span>' +
                    '</div>' +
                    '<div class="product-meta-row">' +
                        '<strong>Fabric / Material</strong>' +
                        '<span>' + product.fabricMaterial + '</span>' +
                    '</div>' +
                    '<div class="product-meta-row">' +
                        '<strong>Color / Pattern</strong>' +
                        '<span>' + product.colorPattern + '</span>' +
                    '</div>' +
                    '<div class="product-meta-row">' +
                        '<strong>Order By</strong>' +
                        '<span>' + product.orderBy + '</span>' +
                    '</div>' +
                '</div>' +
                '<p class="product-price">' + product.retailTicket + '</p>' +
            '</div>' +
        '</div>';
    }
    
    // Create category hero card
    function createCategoryHero(category, productCount) {
        const info = categoryInfo[category] || { 
            description: 'Spring 2027 Collection', 
            keywords: ['Korean Heritage'] 
        };
        
        var keywordsHtml = '';
        for (var i = 0; i < info.keywords.length; i++) {
            keywordsHtml += '<span class="heritage-keyword">' + info.keywords[i] + '</span>';
        }
        
        return '<div class="category-hero">' +
            '<div class="category-hero-content">' +
                '<h3 class="category-hero-title">' + category + '</h3>' +
                '<p class="category-hero-count">' + productCount + ' Products</p>' +
                '<p class="category-hero-description">' + info.description + '</p>' +
                '<div class="category-hero-keywords">' + keywordsHtml + '</div>' +
            '</div>' +
        '</div>';
    }
    
    // Display products for a category
    function displayCategory(category) {
        if (!productsContainer) return;
        
        // Filter products by category from embedded data
        var categoryProducts = [];
        for (var i = 0; i < PRODUCTS_DATA.products.length; i++) {
            if (PRODUCTS_DATA.products[i].category === category) {
                categoryProducts.push(PRODUCTS_DATA.products[i]);
            }
        }
        
        if (categoryProducts.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        // Build the category display
        var html = '';
        
        // Category hero card
        html += createCategoryHero(category, categoryProducts.length);
        
        // Product grid
        html += '<div class="product-grid">';
        for (var j = 0; j < categoryProducts.length; j++) {
            html += createProductCard(categoryProducts[j]);
        }
        html += '</div>';
        
        productsContainer.innerHTML = html;
        
        // Animate cards
        var cards = productsContainer.querySelectorAll('.product-card');
        for (var k = 0; k < cards.length; k++) {
            (function(card, index) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(function() {
                    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            })(cards[k], k);
        }
    }
    
    // Category button click handler
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            var categoryKey = this.getAttribute('data-category');
            
            // Convert key back to category name
            var categoryMap = {
                'womenswear': 'Womenswear',
                'menswear': 'Menswear',
                'activewear': 'Activewear',
                'swimwear': 'Swimwear',
                'innerwear': 'Innerwear',
                'accessories': 'Accessories',
                'jewelry': 'Jewelry',
                'footwear': 'Footwear',
                'beauty': 'Beauty',
                'home-textile': 'Home Textile',
                'kidswear-girls': 'Kidswear Girls',
                'kidswear-boys': 'Kidswear Boys',
                'pet': 'Pet'
            };
            
            var category = categoryMap[categoryKey] || categoryKey;
            displayCategory(category);
        });
    });
    
    // Initialize with Womenswear on page load
    if (productsContainer) {
        displayCategory('Womenswear');
    }
    
    // ====================================================
    // CIRCULAR PILLARS HOVER EFFECT
    // ====================================================
    
    const circularPillars = document.querySelectorAll('.circular-pillar');
    
    circularPillars.forEach(function(pillar) {
        pillar.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-gold)';
        });
        
        pillar.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // ====================================================
    // STATS COUNTER ANIMATION
    // ====================================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                
                setTimeout(function() {
                    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200);
                
                statsObserver.unobserve(el);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(function(stat) {
        statsObserver.observe(stat);
    });
    
    // ====================================================
    // TEAM CARDS STAGGERED ANIMATION
    // ====================================================
    
    const teamCards = document.querySelectorAll('.team-card');
    
    const teamObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    teamCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        teamObserver.observe(card);
    });
    
    // ====================================================
    // TRACE BLOCKS ANIMATION
    // ====================================================
    
    const traceBlocks = document.querySelectorAll('.trace-block');
    
    const traceObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    traceBlocks.forEach(function(block) {
        traceObserver.observe(block);
    });
    
    // ====================================================
    // MOODBOARD IMAGE HOVER EFFECT
    // ====================================================
    
    const moodboardImages = document.querySelectorAll('.moodboard-image');
    
    moodboardImages.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // ====================================================
    // BACK TO TOP FUNCTIONALITY
    // ====================================================
    
    const backToTopLinks = document.querySelectorAll('a[href="#hero"]');
    
    backToTopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("tab-mode");

  const navLinks = document.querySelectorAll("[data-page]");
  const sections = document.querySelectorAll("section");

  function showPage(pageId) {
    sections.forEach(section => {
      section.classList.remove("active-page");
    });

    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add("active-page");
      window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.page === pageId) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const pageId = this.dataset.page;
      showPage(pageId);
    });
  });

  showPage("hero");
});
