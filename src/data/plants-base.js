const plants = [
    {
        id: 1,
        name: "Chinese Evergreen",
        price: 10,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597051673/plants/MwWq-yof_400x400_e0x1cz.jpg",
        description: "If you're more of a waterer, an excellent plant is a Chinese evergreen. It's super forgiving if you overdo it on H2O, and it comes in tons of different varieties."
    },
    {
        id: 2,
        name: "Jade Plant",
        price: 9.99,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597051776/plants/1596230831-nattygarden-3975_etsjry.jpg",
        description: "Jade—a popular houseplant that is native to South Africa—retains water in its round leaves. To give it proper care, make sure it never dries out completely. Water it when the soil feels dry and give it full sun to keep it looking its best. "
    },
    {
        id: 3,
        name: "Asparagus Fern",
        price: 13.99,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597051867/plants/1554477330-beautiful-asparagus-fern-plant-in-a-basket-royalty-free-image-972247932-1546889240_rkaxsz.jpg",
        description: "This fluffy plant tolerates a lot more abuse than other ferns — thanks to the fact that it's technically not a fern. Asparagus setaceus adapts to both bright spots and darker corners. Keep the soil moist and it'll thrive."
    },
    {
        id: 4,
        name: "Fiddle Leaf Fig",
        price: 12.99,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597051916/plants/1554477544-fiddle-leaf-fig-tree-in-the-cement-pot-royalty-free-image-1009749428-1546889692_zl8uam.jpg",
        description: "These trendy trees have more than just lush foliage going for them. Their hardy disposition can adapt to most bright locations (minus direct sunlight). Water generously in the summer and slow it down when winter comes."
    },
    {
        id: 5,
        name: "Philodendron Birkin",
        price: 24,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597051995/plants/1596234483-birkin-3-rotated_awt81a.jpg",
        description: "Add a dose of nature to your space with the philodendron birkin, an easy-to-care-for plant that enjoys medium to bright indirect sunlight along with regular waterings. Just be sure to keep them away from pets and children, as they're toxic."
    },
    {
        id: 6,
        name: "Yucca",
        price: 12,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052051/plants/1554477877-room-royalty-free-image-139572993-1546888866_wmvs3b.jpg",
        description: "The recipe for a happy yucca is easy: sun, sun, and more sun. Water sparingly and plant in a deep container to prevent the top-heavy woody stems from toppling over."
    },
    {
        id: 7,
        name: "Peperomia",
        price: 8,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052110/plants/1557178246-an-elegant-green-pot-plant-as-room-decoration-royalty-free-image-1131755421-1557178015_zlh3v6.jpg",
        description: "These waxy plants do best in more humid conditions than trendy succulents. Bring 'em work too — the species even flourishes under fluorescent lights."
    },
    {
        id: 8,
        name: "Spider Plant",
        price: 18,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052167/plants/1557179586-spider-plant-in-a-blue-pot-high-res-stock-photography-122006243-1557179560_z7brdp.jpg",
        description: "What's better than one spider plant? Lots of spider plants. The fast-growing shoots actually produce little babies you can re-pot for added greenery elsewhere. Just stick to well-lit spots, and don't forget weekly watering."
    },
    {
        id:9,
        name: "Aloe",
        price: 5,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052272/plants/1557179472-aloe-in-the-plastic-pot-royalty-free-image-510963128-1557179415_eplloc.jpg",
        description: "Its spiky leaves certainly look cool, and they'll really thrive on your desk or bedside table. Aloe loves indirect light, plus a good soak every week or two. "
    },
    {
        id:10,
        name: "English Ivy",
        price: 10,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052318/plants/1557254911-ivy-royalty-free-image-845006600-1557254802_onerrz.jpg",
        description: "You could let the long tendrils hang from mantel or shelf, but the climbing plant is also game for topiaries (or stadium walls, like at Wrigley Field). Chicago Botanic Garden recommends Cascade, Domino, and Irish Lace as some of the best potted varieties."
    },
    {
        id:11,
        name: "Dragon Tree",
        price: 17.58,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052365/plants/1557255687-flowers-in-a-pot-indoors-royalty-free-image-940610580-1557255594_fqznap.jpg",
        description: "Save some room on your windowsill and tuck this low-light variety in an unloved corner. Just be warned: Dracaena marginata is toxic to both dogs and cats, so keep pets far away."
    },
    {
        id:12,
        name: "Rubber Plant",
        price: 21,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052430/plants/1557256241-pot-plant-close-up-elevated-view-high-res-stock-photography-829464-001-1557256205_ozyoqj.jpg",
        description: "Rubber trees can measure over 100 feet tall in their native Asia, but regular pruning can keep the ornamental variety in check. If the broad leaves get a little dusty, bring out the mayo for a florist-approved polishing trick."
    },
    {
        id:13,
        name: "Crown of Thorns",
        price: 9.99,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052665/plants/1554479392-1428948147-54ff5f8818e5a-ghk-plants-you-cannot-kill-crown-of-thorns-s2-1554479385_s89ekf.jpg",
        description: "Native to Madagascar, the succulent shrub doesn't like much water. Otherwise, it's not picky. Another plus: It produces lovely red blooms."
    },
    {
        id:14,
        name: "Bromeliad",
        price: 16.55,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052475/plants/1557256369-variegated-bromeliad-on-office-table-high-res-stock-photography-135601824-1557256336_uu6vhm.jpg",
        description: "Like the pineapple, the bromeliad belongs to the bromeliaceae family. This plant lasts a long time, says Sharon Nejman, Senior Horticulturist at Chicago Botanic Garden. It produces pups or side shoots that will replace the original plant."
    },
    {
        id:15,
        name: "Philodendron",
        price: 31.99,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052628/plants/1557257186-the-modern-room-interior-with-a-lot-of-different-royalty-free-image-979579482-1557257137_dbaddk.jpg",
        description: "Hundreds of species of the large-leafed philodendron grow in the West Indies, Mexico, and Brazil. This plant prefers low light. One caveat: They like to be on the dry side, so don't water more than once a week."
    },
    {
        id:16,
        name: "ZZ Plant",
        price: 57,
        image: "https://res.cloudinary.com/dywatr6gy/image/upload/v1597052722/plants/1557179245-the-sill-houseplant-zz-plant-1-6-014-2230x-progressive-1557179231_furmss.jpg",
        description: "Officially named Zamioculcas zamiifolia, the ZZ plant is native to East Africa. The green tolerates the dangerous trifecta of plant-killers: drought, low light, and really low humidity."
    }
];

export default plants;