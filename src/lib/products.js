let products = [
  { 
    id: 1, 
    name: "Dell XPS 15 Laptop", 
    description: "Experience unparalleled performance with the Dell XPS 15, featuring a stunning 15.6-inch 4K OLED display, 11th Gen Intel Core i9 processor, 32GB DDR4 RAM, and 1TB NVMe SSD storage. This premium laptop delivers exceptional speed for multitasking, content creation, and gaming. With its NVIDIA GeForce RTX 3050 Ti graphics, you'll enjoy smooth visuals and enhanced productivity. The sleek aluminum chassis, backlit keyboard, and exceptional battery life make it the perfect choice for professionals and creatives who demand the best.",
    price: 1899,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756317090/dell_b2ursm.jpg",
    specs: {
      ram: "32GB DDR4",
      storage: "1TB NVMe SSD",
      processor: "Intel Core i9-11900H",
      graphics: "NVIDIA GeForce RTX 3050 Ti",
      display: "15.6-inch 4K OLED"
    }
  },
  { 
    id: 2, 
    name: "iPhone 16 Pro Max", 
    description: "Discover the ultimate smartphone experience with the iPhone 14 Pro Max. Featuring a revolutionary 6.7-inch Super Retina XDR display with ProMotion technology, the powerful A16 Bionic chip, and an advanced camera system with 48MP Main camera. With 1TB of storage, you'll have ample space for all your photos, videos, and apps. The durable Ceramic Shield front, surgical-grade stainless steel design, and all-day battery life ensure premium performance. Experience cinematic mode, action mode, and the innovative Dynamic Island for a truly immersive mobile experience.",
    price: 1599,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756316865/iphone_cv9hep.jpg",
    specs: {
      ram: "6GB",
      storage: "1TB",
      processor: "A16 Bionic Chip",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      display: "6.7-inch Super Retina XDR"
    }
  },
  { 
    id: 3, 
    name: "Samsung Galaxy Tab S8 Ultra", 
    description: "Elevate your productivity and creativity with the Samsung Galaxy Tab S8 Ultra. This premium tablet features a massive 14.6-inch Super AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 12GB RAM, and 512GB storage (expandable up to 1TB). The included S Pen provides a natural writing experience with ultra-low latency, making it perfect for artists, designers, and note-takers. With its sleek metal design, quad speakers tuned by AKG, and all-day battery life, this tablet redefines what's possible in mobile computing.",
    price: 1199,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756318382/tablet_pxhbyi.jpg",
    specs: {
      ram: "12GB",
      storage: "512GB (expandable to 1TB)",
      processor: "Snapdragon 8 Gen 1",
      display: "14.6-inch Super AMOLED 120Hz",
      features: "Includes S Pen, Quad AKG Speakers"
    }
  },
  { 
    id: 4, 
    name: "Apple Watch Series 8", 
    description: "Stay connected and healthy with the Apple Watch Series 8. This advanced smartwatch features a larger Always-On Retina display, powerful S8 chip, and comprehensive health monitoring including blood oxygen sensor, ECG app, and temperature sensing for women's health. With crash detection, fall detection, and emergency SOS, your safety is always prioritized. The sleek aluminum case is lightweight yet durable, and with up to 18 hours of battery life, it keeps up with your busiest days. Swimproof design and GPS functionality make it perfect for active lifestyles.",
    price: 499,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756317533/watch_ifgnce.jpg",
    specs: {
      display: "Always-On Retina LTPO OLED",
      processor: "S8 SiP with 64-bit dual-core",
      health: "Blood Oxygen, ECG, Temperature Sensing",
      battery: "Up to 18 hours",
      connectivity: "GPS + Cellular option"
    }
  },
  { 
    id: 5, 
    name: "Sony WH-1000XM5 Headphones", 
    description: "Immerse yourself in exceptional sound quality with the Sony WH-1000XM5 headphones. Featuring industry-leading noise cancellation with Dual Noise Sensor technology, these headphones create a personal oasis of silence. The 30-hour battery life ensures all-day listening, while the quick charge function provides 3 hours of playback from just 3 minutes of charging. With precise voice pickup technology, crystal-clear hands-free calling, and comfortable, lightweight design, these headphones are perfect for travel, work, or relaxation. Experience audio perfection with LDAC technology for high-resolution wireless listening.",
    price: 399,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756328599/sony_y7zqzo.jpg",
    specs: {
      noiseCancellation: "Industry-leading Dual Noise Sensor",
      battery: "30 hours with quick charge",
      connectivity: "Bluetooth 5.2, LDAC support",
      features: "Voice pickup, Multipoint connection",
      weight: "250g (lightweight design)"
    }
  },
  { 
    id: 6, 
    name: "Canon EOS R5 Camera", 
    description: "Capture breathtaking photos and videos with the Canon EOS R5 mirrorless camera. This professional-grade camera features a 45MP full-frame CMOS sensor, 8K video recording, and advanced Dual Pixel CMOS AF II with animal detection. With in-body image stabilization providing up to 8 stops of shake correction, you can shoot handheld in challenging conditions. The high-speed continuous shooting at up to 20 fps (electronic shutter) ensures you never miss the perfect moment. Weather-sealed construction and dual memory card slots make it reliable for professional use in any environment.",
    price: 3899,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756328747/canon_wcvwdo.jpg",
    specs: {
      sensor: "45MP Full-Frame CMOS",
      video: "8K RAW internal recording",
      autofocus: "Dual Pixel CMOS AF II",
      stabilization: "5-axis IBIS up to 8 stops",
      continuousShooting: "Up to 20 fps"
    }
  },
  { 
    id: 7, 
    name: "MacBook Pro 16-inch", 
    description: "Unleash incredible creative power with the MacBook Pro 16-inch. Powered by the revolutionary M2 Max chip with 12-core CPU and 38-core GPU, this laptop delivers mind-blowing performance for professionals. The stunning Liquid Retina XDR display offers extreme dynamic range and incredible detail. With 64GB unified memory and 2TB SSD storage, you can work with massive files and run pro apps with ease. The advanced thermal system sustains pro performance, while the 21-hour battery life lets you work all day. Six-speaker sound system and studio-quality mics provide an immersive audio experience.",
    price: 3499,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756328852/mac_ichcen.jpg",
    specs: {
      processor: "Apple M2 Max (12-core CPU, 38-core GPU)",
      memory: "64GB Unified Memory",
      storage: "2TB SSD",
      display: "16.2-inch Liquid Retina XDR",
      battery: "Up to 21 hours"
    }
  },
  { 
    id: 8, 
    name: "Samsung Odyssey G9 Gaming Monitor", 
    description: "Immerse yourself in the ultimate gaming experience with the Samsung Odyssey G9. This revolutionary 49-inch Dual QHD monitor features a cutting-edge 1000R curved screen that fills your peripheral vision, creating an incredibly immersive experience. With 240Hz refresh rate, 1ms response time, and NVIDIA G-Sync compatibility, you'll enjoy buttery-smooth gameplay with no tearing or stuttering. The QLED technology delivers vibrant colors with exceptional contrast and brightness. The futuristic design with infinity core lighting and customizable RGB creates a stunning centerpiece for any gaming setup.",
    price: 1299,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756329285/samsung_chha27.jpg",
    specs: {
      size: "49-inch",
      resolution: "5120x1440 Dual QHD",
      refreshRate: "240Hz",
      responseTime: "1ms",
      features: "QLED, 1000R Curvature, G-Sync Compatible"
    }
  },
  { 
    id: 9, 
    name: "PlayStation 5 Console", 
    description: "Step into the future of gaming with the PlayStation 5 console. Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio. The custom RDNA 2 GPU delivers stunning 4K graphics at up to 120fps, with support for 8K output. The revolutionary DualSense wireless controller offers unprecedented tactile sensations that bring games to life. With backwards compatibility for most PlayStation 4 games, and access to thousands of games from four generations of PlayStation, your gaming library is virtually limitless.",
    price: 499,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756329383/play_g3fkky.jpg",
    specs: {
      processor: "Custom AMD Ryzen Zen 2 (8-core)",
      graphics: "Custom RDNA 2 GPU (10.28 TFLOPs)",
      memory: "16GB GDDR6",
      storage: "825GB SSD",
      features: "4K/120fps, 8K output, Ray Tracing"
    }
  },
  { 
    id: 10, 
    name: "Bose QuietComfort Earbuds II", 
    description: "Experience world-class noise cancellation in truly wireless earbuds with Bose QuietComfort Earbuds II. Featuring CustomTune technology that intelligently personalizes noise cancellation and sound performance to your ears in real-time. The proprietary acoustic system delivers crisp, clear audio with deep bass. With up to 6 hours of battery life (18 hours with charging case), you can enjoy uninterrupted listening. The comfortable, secure fit with multiple ear tip options ensures they stay in place during workouts. Touch controls, voice access, and IPX4 rating make these the perfect companion for active lifestyles.",
    price: 299,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756329492/bosr_lf48ih.jpg",
    specs: {
      noiseCancellation: "CustomTune Technology",
      battery: "6 hours (18 with case)",
      connectivity: "Bluetooth 5.3",
      features: "IPX4 water resistance, Touch controls",
      fit: "Multiple ear tip options"
    }
  },
  { 
    id: 11, 
    name: "iPad Pro 12.9-inch", 
    description: "Transform your workflow with the incredibly powerful iPad Pro 12.9-inch. Featuring the revolutionary M2 chip that delivers desktop-class performance, the stunning Liquid Retina XDR display with ProMotion, and incredible battery life. With 2TB of storage and 16GB RAM, you can work with massive files and run professional apps with ease. The Thunderbolt port enables high-speed connectivity to external displays and storage. Compatible with Magic Keyboard and Apple Pencil, the iPad Pro becomes the ultimate creative tool for artists, designers, and professionals on the go.",
    price: 2399,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756329740/ipD_rykm8e.jpg",
    specs: {
      processor: "Apple M2 Chip",
      memory: "16GB RAM",
      storage: "2TB",
      display: "12.9-inch Liquid Retina XDR",
      features: "Thunderbolt port, Face ID, LiDAR Scanner"
    }
  },
  { 
    id: 12, 
    name: "Dyson V15 Detect Vacuum", 
    description: "Experience a new level of clean with the Dyson V15 Detect vacuum. This intelligent cordless vacuum features laser dust detection that reveals hidden microscopic dust, piezo sensor that counts and measures dust particles, and whole-machine HEPA filtration that traps 99.97% of particles. The powerful Hyperdymium motor generates 240AW of suction, while the 60-minute run time ensures complete home cleaning. The versatile design converts to a handheld vacuum for above-floor cleaning. With LCD screen showing performance data in real-time, you can see exactly what you've cleaned.",
    price: 699,
    image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756356361/dyson_rbvm0i.jpg",
    specs: {
      suction: "240AW",
      runtime: "60 minutes",
      filtration: "Whole-machine HEPA filtration",
      features: "Laser dust detection, Piezo sensor, LCD screen",
      accessories: "10 included tools and accessories"
    }
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p.id === Number(id));
}

export function addProduct(product) {
  const newProduct = { 
    id: Date.now(), 
    specs: {},
    ...product 
  };
  products.push(newProduct);
  return newProduct;
}