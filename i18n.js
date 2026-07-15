/* ═══════════════════════════════════════════
   Schematrix i18n — EN / TR
   - Manual switch (EN/TR buttons in nav) saved to localStorage
   - First visit: falls back to the browser language
   ═══════════════════════════════════════════ */
(function () {
  const STORAGE_KEY = 'schematrix-lang';

  const translations = {
    /* ────────────────────────────── ENGLISH ── */
    en: {
      /* Shared */
      nav_home: "Home",
      nav_projects: "Projects",
      nav_manifesto: "Manifesto",
      nav_menu: "Menu",
      nav_close: "Close",
      footer_copy: "© 2026 Schematrix — Independent Technology Studio",
      badge_open_source: "Open Source",
      btn_view_project: "View Project",
      btn_view_github: "View on GitHub",
      btn_back_projects: "Back to Projects",
      status_open_source: "Open Source Project",

      /* Home */
      home_title: "Schematrix | Home",
      home_meta: "Schematrix - Different technology for different thinkers.",
      hero_title: "Different technology <span class=\"hero-gradient\">for different thinkers.</span>",
      hero_body: "Schematrix is an independent technology studio — one person designing, building, and shipping hardware and software projects end to end, without the usual sales layer in between.",
      cta_view_projects: "View Projects",
      cta_read_manifesto: "Read the Manifesto",
      home_feat_label: "Featured",
      home_feat_title: "Latest Projects",
      home_feat_sub: "A look at what we're building right now.",
      card_meschy_title: "Meschy Mesh Device",
      card_meschy_desc_home: "An open-source platform for decentralized, off-grid communication.",
      card_cam_title: "AI Home Security Camera",
      card_cam_desc_home: "Raspberry Pi 5 + Sony IMX500 with on-device face recognition and local AI scene analysis.",

      /* Projects */
      proj_title: "Schematrix | Projects",
      proj_meta: "Independent hardware and software projects built under Schematrix.",
      proj_label: "Portfolio",
      proj_heading: "Projects",
      proj_sub: "Independent projects we design, build, and keep improving. Click a project to see the details.",
      card_meschy_desc_proj: "A LoRa and nRF52840-based, Meshtastic-compatible device for decentralized communication.",
      card_cam_desc_proj: "Raspberry Pi 5 + Sony IMX500, on-device face recognition, local AI scene analysis, full Telegram control.",

      /* Manifesto */
      man_title: "Schematrix | Manifesto",
      man_meta: "The Schematrix manifesto",
      man_kicker: "Schematrix Manifesto",
      man_heading: "Not a product. A reaction.",
      man_intro: "A workspace built on refusing to accept, questioning everything, and rebuilding from the ground up.",
      man_p1: "Schematrix is not a product, it's a reaction. The system you live inside sells you speed, convenience, and comfort — but in return it takes the most critical thing from you: the effort of thinking. It hands you tools but hides how they work. It turns you into a user, not a creator. And before long, without noticing, you accept it: \"it works\" feels like enough, questioning feels unnecessary, and digging deeper feels like a waste of time. That's exactly where Schematrix begins: by rejecting that acceptance.",
      man_p2: "This is a space for people who refuse to stay on the surface. Here, no system is sacred, no technology is untouchable, no solution is final. Everything can be taken apart, analyzed, and made better. Because if you actually want to control something, you can't just use it — you have to understand it, see its limits, and rebuild it when necessary. Otherwise the control isn't yours; it belongs to whoever built what you were handed.",
      man_p3: "The system pushes you toward fast results, because a fast result doesn't produce a thinking mind. That's why copy-paste culture exists. It wants you to move forward by stitching working pieces together, without reading the docs, without grasping the logic. Because a person who digs deep becomes independent. And an independently thinking person can't be steered. Schematrix exists to break that cycle.",
      man_p4: "Here, \"it works\" isn't a result — it's a starting point. If something works, you have to know why it works. Could it run faster? Could it use fewer resources? Is there a simpler solution? No system is considered finished until these questions are asked. Because optimization isn't a luxury, it's a discipline. And without discipline, there's no real engineering.",
      man_p5: "The Schematrix mindset doesn't run from complexity. It treats complexity not as a threat, but as a structure to be solved — breaking it into layers, modeling it, simplifying it. Because what you call chaos is, most of the time, just an order you haven't understood yet. It limits you as long as you don't understand it; the moment you do, it becomes your advantage. So the goal here isn't to simplify first — it's to understand first, then simplify.",
      man_p6: "This isn't a community, it's a filtering mechanism. Anyone can look, but not everyone stays. Because this mindset demands patience, attention, and the capacity to sit with discomfort. It requires being willing to spend hours on a single problem, and if necessary, to tear everything down and rebuild from zero. There's no room here for those who choose the easy path.",
      man_p7: "Schematrix doesn't stop at criticizing the system from the outside — it steps inside, solves it, and pushes its limits. Because real power doesn't lie in opposing something, it lies in understanding it. You can change what you understand. You can only use what you don't.",
      man_p8: "And here's the most critical part: once you've gained this perspective, there's no going back. No interface will ever feel like enough again, no \"black box\" will satisfy you. You'll want to see behind everything. Because now you know: no matter how flawless a system looks, something better is always possible.",
      man_p9: "<strong>Schematrix is built on exactly that: refusing to accept, questioning, and rebuilding.</strong>",

      /* Meschy */
      meschy_title: "Schematrix | Meschy — Development Platform",
      meschy_meta: "Meschy — an open-source LoRa and nRF52840-based development platform. Meshtastic-compatible.",
      meschy_label: "Development Platform",
      meschy_heading: "Meschy Mesh Device",
      meschy_sub: "Not just a communication device — an open-source development platform for endless projects.",
      meschy_sum_p1: "Meschy is a LoRa + nRF52840-based development board built by Schematrix. It's fully compatible with Meshtastic, though it needs the firmware setup described on the Meshtastic site to join the network.",
      meschy_sum_p2: "It's not just a ready-made communication device — it's a flexible development platform for Meshtastic-based projects, IoT prototypes, and field communication scenarios. You'll find the full setup details further down this page.",
      btn_meschy_insta: "@meschy.tech on Instagram",
      tech_label: "Technical",
      meschy_tech_heading: "Hardware Specifications",
      meschy_tech_body: "Meschy is a development board built around the Nordic nRF52840 processor and a Semtech LoRa radio module. Running the Meshtastic open-source firmware, it's fully compatible with the global Meshtastic community. Bluetooth 5.0, USB-C, and GPIO pins make it easy to extend with external sensors and modules.",
      spec_processor: "Processor",
      spec_radio: "Radio",
      spec_firmware: "Firmware",
      spec_topology: "Topology",
      spec_topology_v: "Mesh Network",
      spec_connectivity: "Connectivity",
      spec_built_by: "Built by",
      meschy_banner1_h: "Not Just Communication. A Development Platform.",
      meschy_banner1_p: "The nRF52840 + LoRa combination behind Meschy puts a project range as wide as your imagination at your fingertips. Think beyond Meshtastic.",
      poss_label: "Possibilities",
      meschy_uc_heading: "What Can You Build With Meschy?",
      meschy_uc_sub: "One board, dozens of projects. Here are some scenarios you can build on Meschy:",
      meschy_uc1_h: "Mesh Communication",
      meschy_uc1_p: "Infrastructure-free messaging with Meshtastic. For disaster response, camping, and events.",
      meschy_uc2_h: "GPS Tracker",
      meschy_uc2_p: "Track a vehicle, a pet, or cargo. Wide-area coverage thanks to LoRa's range.",
      meschy_uc3_h: "IoT Sensor Network",
      meschy_uc3_p: "Temperature, humidity, air quality — relay data from remote points back to a hub.",
      meschy_uc4_h: "Agricultural Automation",
      meschy_uc4_p: "Soil moisture and irrigation control. Works in the field even without cellular coverage.",
      meschy_uc5_h: "Mountains & Nature",
      meschy_uc5_p: "Group communication off the grid. Trekking, search and rescue.",
      meschy_uc6_h: "Prototyping",
      meschy_uc6_p: "Build your own project with nRF52840 + LoRa. GPIO, BLE, and USB-C ready to go.",
      meschy_banner2_h: "A Contribution to the Meshtastic Community",
      meschy_banner2_p: "Meschy is fully compatible with the Meshtastic ecosystem and communicates directly with Meshtastic users worldwide. We built this project as Schematrix's contribution from Turkey to the global community.",
      mesh_label: "Ecosystem",
      mesh_heading: "One Mesh, Every Device",
      mesh_sub: "Meschy speaks LoRa with the entire Meshtastic ecosystem — phones join over Bluetooth, computers over USB. Send a message, watch it ripple across the mesh, and the nodes will answer:",
      mesh_screen_idle: "online",
      mesh_reply_1: "Copy that 👍",
      mesh_reply_2: "Strong signal, 3 hops.",
      mesh_reply_3: "Position shared.",
      mesh_reply_4: "Here and listening.",
      mesh_reply_5: "Battery at 87%.",
      mesh_reply_6: "Message received.",
      mesh_role_client: "Client",
      mesh_role_router: "Router",
      mesh_phone_channel: "Primary Channel",
      mesh_phone_type: "Type...",
      mesh_hint: "(type here)",
      explore_label: "Explore",
      meschy_videos_heading: "A Closer Look at Meschy",
      meschy_videos_sub: "Explore the device's features and use cases.",
      meschy_vtr1_h: "Infrastructure-Free Communication",
      meschy_vtr1_p1: "Enables direct device-to-device messaging in environments with no GSM or internet connection. Meschy transmits data at low bandwidth but high durability over the LoRa physical layer; every node acts as both a receiver and a relay at the same time.",
      meschy_vtr1_p2: "Messages don't travel to a single central point; they're carried through neighboring nodes in a multi-hop fashion. This structure extends coverage in a chain, reduces dependence on any single point of failure, and keeps communication running in disaster and field scenarios.",
      meschy_vtr1_p3: "When cell towers go down in an earthquake, or there's no signal on a mountain, Meschy devices form a local communication backbone that keeps essential message traffic alive.",
      tag_disaster: "Disaster Readiness",
      tag_field_comm: "Field Communication",
      meschy_vtr2_h: "Meschy as a Development Board",
      meschy_vtr2_alt: "Meschy development board",
      meschy_vtr2_p1: "Think beyond Meshtastic: with Meschy's nRF52840 processor, LoRa radio, and GPIO pins, you can build your own IoT project from scratch. The nRF52840 side handles application logic, sensor reading, and task scheduling, while the LoRa layer takes care of long-range data transport.",
      meschy_vtr2_p2: "Mobile app configuration over BLE, debugging and firmware updates over USB-C, and external module connections over GPIO all come together on the same platform. That means you can run a fast development cycle — from prototype to field test — on a single board.",
      meschy_vtr2_p3: "Sensor network, GPS tracking, remote monitoring, or a completely new idea: it's possible to adapt the same hardware to different product scenarios just by changing the software layer.",
      tag_platform: "Platform",
      meschy_vtr3_h: "Durable, Independent, Free",
      meschy_vtr3_p1: "Field-ready design, low power consumption, and stable connection behavior are core to Meschy's character. The device balances its energy use against task load to preserve battery life over long-term use.",
      meschy_vtr3_p2: "On the network side, parameters like packet retries, routing behavior, and transmission interval can be tuned to the application's needs. This lets the same device run different profiles — from low-latency scenarios to ultra-low-power ones.",
      meschy_vtr3_p3: "Because it's open source, you can edit the firmware layer, change the telemetry format, and integrate the device into your own infrastructure. The idea that independent communication is an individual right is reflected directly in Meschy's technical architecture.",
      tag_open_source: "Open Source",
      tag_durable: "Durable",
      tag_independent: "Independent",

      /* AI Camera */
      cam_title: "Schematrix | AI Home Security Camera",
      cam_meta: "An open-source Raspberry Pi 5 + Sony IMX500 home security system with on-device face recognition, local AI scene analysis, and full Telegram control.",
      cam_label: "Computer Vision",
      cam_heading: "AI Home Security Camera",
      cam_sub: "A Raspberry Pi 5 + Sony IMX500 security system with on-device face recognition, local AI scene descriptions, and full control from Telegram — no cloud AI, no subscription.",
      cam_sum_title: "AI Home Security",
      cam_sum_p1: "Built on a Raspberry Pi 5 with the Sony IMX500 AI camera, this system detects people on-sensor, recognizes known faces with YuNet + SFace, and — when asked — describes what's happening in the frame using a local vision model (llava-phi3 via Ollama). No frame ever leaves the device for AI processing.",
      cam_sum_p2: "Everything is controlled from Telegram: enroll faces, trigger the siren, start a password-protected live stream, or switch to skeleton pose-estimation mode. 30+ commands, fully documented on GitHub.",
      btn_watch_youtube: "Watch on YouTube",
      cam_tech_heading: "Hardware & Software",
      cam_tech_body: "The system runs on a Raspberry Pi 5 paired with the Raspberry Pi AI Camera — a Sony IMX500 sensor with its own on-chip neural network accelerator. Person detection and pose estimation happen directly on the sensor; face recognition and scene analysis run on the Pi's CPU, entirely offline.",
      spec_board: "Board",
      spec_camera: "Camera",
      spec_person_det: "Person Detection",
      spec_person_det_v: "On-Sensor NN (SSD MobileNetV2)",
      spec_face_rec: "Face Recognition",
      spec_scene_ai: "Scene AI",
      spec_scene_ai_v: "llava-phi3 via Ollama (local)",
      spec_pose: "Pose Estimation",
      spec_pose_v: "HigherHRNet, 17 keypoints",
      spec_control: "Control",
      spec_control_v: "Telegram Bot (30+ commands)",
      spec_stream: "Live Stream",
      spec_stream_v: "MJPEG over ngrok, password-protected",
      spec_alerts: "Alerts",
      spec_alerts_v: "GPIO buzzer + Telegram burst photos",
      cam_banner_h: "The AI Runs on the Device. Not in Someone Else's Cloud.",
      cam_banner_p: "Face recognition and scene analysis both run locally on the Raspberry Pi — no API key, no per-request cost, no footage sent to a third party. Telegram is only used for control and alerts, and live streaming is opt-in and password-protected.",
      cam_uc_heading: "What It Actually Does",
      cam_uc_sub: "One camera, two modes, all controlled from a phone:",
      cam_uc1_h: "Face Recognition",
      cam_uc1_p: "Guided 3-angle enrollment, then silent logging for known faces and instant alerts for strangers.",
      cam_uc2_h: "AI Scene Description",
      cam_uc2_p: "Send /scene and a local vision model describes what's happening, using the recognized person's name.",
      cam_uc3_h: "Stranger Alerts",
      cam_uc3_p: "Burst photos to Telegram and an optional GPIO siren when an unrecognized face is confirmed.",
      cam_uc4_h: "Pose / Skeleton Mode",
      cam_uc4_p: "Switch to IMX500 HigherHRNet pose estimation — 17-keypoint skeletons and basic action classification.",
      cam_uc5_h: "Live Streaming",
      cam_uc5_p: "Password-protected MJPEG stream over ngrok, viewable from any browser, anywhere.",
      cam_uc6_h: "Quiet Hours",
      cam_uc6_p: "Scheduled or manual quiet hours mute the siren while Telegram alerts keep coming through.",
      watch_label: "Watch",
      cam_video_heading: "See It Running",
      cam_video_sub: "A walkthrough of the system in action — face recognition, alerts, and live scene analysis."
    },

    /* ────────────────────────────── TÜRKÇE ── */
    tr: {
      /* Ortak */
      nav_home: "Ana Sayfa",
      nav_projects: "Projeler",
      nav_manifesto: "Manifesto",
      nav_menu: "Menü",
      nav_close: "Kapat",
      footer_copy: "© 2026 Schematrix — Bağımsız Teknoloji Stüdyosu",
      badge_open_source: "Açık Kaynak",
      btn_view_project: "Projeyi İncele",
      btn_view_github: "GitHub'da İncele",
      btn_back_projects: "Projelere Dön",
      status_open_source: "Açık Kaynak Proje",

      /* Ana Sayfa */
      home_title: "Schematrix | Ana Sayfa",
      home_meta: "Schematrix - Farklı düşünenler için farklı teknoloji.",
      hero_title: "Farklı düşünenler için <span class=\"hero-gradient\">farklı teknoloji.</span>",
      hero_body: "Schematrix bağımsız bir teknoloji stüdyosu — donanım ve yazılım projelerinin, araya klasik satış katmanı girmeden, tek kişi tarafından uçtan uca tasarlanıp geliştirildiği ve yayınlandığı bir yapı.",
      cta_view_projects: "Projelere Göz At",
      cta_read_manifesto: "Manifestoyu Oku",
      home_feat_label: "Öne Çıkanlar",
      home_feat_title: "Son Projeler",
      home_feat_sub: "Şu anda ne inşa ettiğimize bir bakış.",
      card_meschy_title: "Meschy Mesh Cihazı",
      card_meschy_desc_home: "Merkeziyetsiz, şebekeden bağımsız iletişim için açık kaynaklı bir platform.",
      card_cam_title: "Yapay Zekâlı Ev Güvenlik Kamerası",
      card_cam_desc_home: "Cihaz üzerinde yüz tanıma ve yerel yapay zekâ sahne analiziyle Raspberry Pi 5 + Sony IMX500.",

      /* Projeler */
      proj_title: "Schematrix | Projeler",
      proj_meta: "Schematrix çatısı altında geliştirilen bağımsız donanım ve yazılım projeleri.",
      proj_label: "Portfolyo",
      proj_heading: "Projeler",
      proj_sub: "Tasarladığımız, geliştirdiğimiz ve iyileştirmeye devam ettiğimiz bağımsız projeler. Detaylar için bir projeye tıkla.",
      card_meschy_desc_proj: "Merkeziyetsiz iletişim için LoRa ve nRF52840 tabanlı, Meshtastic uyumlu bir cihaz.",
      card_cam_desc_proj: "Raspberry Pi 5 + Sony IMX500, cihaz üzerinde yüz tanıma, yerel yapay zekâ sahne analizi, tam Telegram kontrolü.",

      /* Manifesto */
      man_title: "Schematrix | Manifesto",
      man_meta: "Schematrix manifestosu",
      man_kicker: "SCHEMATRIX Manifestosu",
      man_heading: "Bir ürün değil. Bir tepki.",
      man_intro: "Kabullenmemek, her şeyi sorgulamak ve sıfırdan yeniden inşa etmek üzerine kurulu bir çalışma alanı.",
      man_p1: "Schematrix bir ürün değil, bir tepkidir. İçinde yaşadığın sistem sana hız, pratiklik ve konfor satar — ama karşılığında senden en kritik şeyi alır: düşünme zahmetini. Sana araçlar verir ama nasıl çalıştıklarını gizler. Seni bir üretici değil, bir kullanıcı hâline getirir. Ve çok geçmeden, farkına bile varmadan kabullenirsin: \"çalışıyor\" demek yeterli gelir, sorgulamak gereksiz, derine inmek ise zaman kaybı gibi görünür. Schematrix tam olarak burada başlar: o kabullenişi reddederek.",
      man_p2: "Burası yüzeyde kalmayı reddedenlerin alanı. Burada hiçbir sistem kutsal, hiçbir teknoloji dokunulmaz, hiçbir çözüm nihai değildir. Her şey parçalarına ayrılabilir, analiz edilebilir ve daha iyisi yapılabilir. Çünkü bir şeyi gerçekten kontrol etmek istiyorsan onu sadece kullanamazsın — onu anlaman, sınırlarını görmen ve gerektiğinde yeniden inşa etmen gerekir. Aksi hâlde kontrol senin değildir; eline verilen şeyi kim yaptıysa onundur.",
      man_p3: "Sistem seni hızlı sonuca iter, çünkü hızlı sonuç düşünen bir zihin üretmez. Kopyala-yapıştır kültürü bu yüzden vardır. Dokümantasyonu okumadan, mantığı kavramadan, çalışan parçaları birbirine ekleyerek ilerlemeni ister. Çünkü derine inen insan bağımsızlaşır. Bağımsız düşünen insan ise yönlendirilemez. Schematrix bu döngüyü kırmak için var.",
      man_p4: "Burada \"çalışıyor\" bir sonuç değil, bir başlangıç noktasıdır. Bir şey çalışıyorsa neden çalıştığını bilmek zorundasın. Daha hızlı çalışabilir mi? Daha az kaynak kullanabilir mi? Daha basit bir çözüm var mı? Bu sorular sorulmadan hiçbir sistem bitmiş sayılmaz. Çünkü optimizasyon bir lüks değil, bir disiplindir. Disiplin olmadan da gerçek mühendislik olmaz.",
      man_p5: "Schematrix zihniyeti karmaşıklıktan kaçmaz. Karmaşıklığı bir tehdit olarak değil, çözülmesi gereken bir yapı olarak görür — katmanlara ayırır, modeller, sadeleştirir. Çünkü senin kaos dediğin şey çoğu zaman henüz anlamadığın bir düzendir. Onu anlamadığın sürece seni sınırlar; anladığın anda ise senin avantajın olur. Yani buradaki amaç önce basitleştirmek değil — önce anlamak, sonra basitleştirmektir.",
      man_p6: "Burası bir topluluk değil, bir filtreleme mekanizmasıdır. Herkes bakabilir ama herkes kalamaz. Çünkü bu zihniyet sabır, dikkat ve rahatsızlıkla baş başa kalabilme kapasitesi ister. Tek bir probleme saatler harcamayı, gerekirse her şeyi yıkıp sıfırdan kurmayı göze almayı gerektirir. Kolay yolu seçenlere burada yer yok.",
      man_p7: "Schematrix sistemi dışarıdan eleştirmekle yetinmez — içine girer, çözer ve sınırlarını zorlar. Çünkü gerçek güç bir şeye karşı çıkmakta değil, onu anlamakta yatar. Anladığın şeyi değiştirebilirsin. Anlamadığını ise yalnızca kullanabilirsin.",
      man_p8: "Ve en kritik nokta şu: bu bakış açısını bir kez kazandığında geri dönüş yok. Artık hiçbir arayüz yeterli gelmeyecek, hiçbir \"kara kutu\" seni tatmin etmeyecek. Her şeyin arkasını görmek isteyeceksin. Çünkü artık biliyorsun: bir sistem ne kadar kusursuz görünürse görünsün, daha iyisi her zaman mümkün.",
      man_p9: "<strong>Schematrix tam olarak bunun üzerine kuruludur: kabullenmemek, sorgulamak ve yeniden inşa etmek.</strong>",

      /* Meschy */
      meschy_title: "Schematrix | Meschy — Geliştirme Platformu",
      meschy_meta: "Meschy — açık kaynaklı, LoRa ve nRF52840 tabanlı bir geliştirme platformu. Meshtastic uyumlu.",
      meschy_label: "Geliştirme Platformu",
      meschy_heading: "Meschy Mesh Cihazı",
      meschy_sub: "Sadece bir iletişim cihazı değil — sınırsız proje için açık kaynaklı bir geliştirme platformu.",
      meschy_sum_p1: "Meschy, Schematrix tarafından geliştirilen LoRa + nRF52840 tabanlı bir geliştirme kartıdır. Meshtastic ile tamamen uyumludur; ağa katılmak için Meshtastic sitesinde anlatılan firmware kurulumunu gerektirir.",
      meschy_sum_p2: "Hazır bir iletişim cihazından ibaret değil — Meshtastic tabanlı projeler, IoT prototipleri ve saha iletişim senaryoları için esnek bir geliştirme platformu. Kurulum detaylarının tamamını sayfanın devamında bulabilirsin.",
      btn_meschy_insta: "Instagram'da @meschy.tech",
      tech_label: "Teknik",
      meschy_tech_heading: "Donanım Özellikleri",
      meschy_tech_body: "Meschy, Nordic nRF52840 işlemcisi ve Semtech LoRa radyo modülü etrafında inşa edilmiş bir geliştirme kartıdır. Açık kaynaklı Meshtastic firmware'i ile çalışır ve küresel Meshtastic topluluğuyla tamamen uyumludur. Bluetooth 5.0, USB-C ve GPIO pinleri sayesinde harici sensör ve modüllerle kolayca genişletilebilir.",
      spec_processor: "İşlemci",
      spec_radio: "Radyo",
      spec_firmware: "Firmware",
      spec_topology: "Topoloji",
      spec_topology_v: "Mesh Ağı",
      spec_connectivity: "Bağlantı",
      spec_built_by: "Geliştiren",
      meschy_banner1_h: "Sadece İletişim Değil. Bir Geliştirme Platformu.",
      meschy_banner1_p: "Meschy'nin arkasındaki nRF52840 + LoRa kombinasyonu, hayal gücün kadar geniş bir proje yelpazesini parmaklarının ucuna getiriyor. Meshtastic'in ötesini düşün.",
      poss_label: "Olasılıklar",
      meschy_uc_heading: "Meschy ile Neler Yapabilirsin?",
      meschy_uc_sub: "Tek kart, onlarca proje. İşte Meschy üzerinde kurabileceğin bazı senaryolar:",
      meschy_uc1_h: "Mesh İletişim",
      meschy_uc1_p: "Meshtastic ile altyapısız mesajlaşma. Afet müdahalesi, kamp ve etkinlikler için.",
      meschy_uc2_h: "GPS Takip",
      meschy_uc2_p: "Araç, evcil hayvan veya kargo takibi. LoRa'nın menzili sayesinde geniş alan kapsaması.",
      meschy_uc3_h: "IoT Sensör Ağı",
      meschy_uc3_p: "Sıcaklık, nem, hava kalitesi — uzak noktalardan verileri merkeze aktar.",
      meschy_uc4_h: "Tarım Otomasyonu",
      meschy_uc4_p: "Toprak nemi ve sulama kontrolü. GSM kapsaması olmayan arazide bile çalışır.",
      meschy_uc5_h: "Dağ & Doğa",
      meschy_uc5_p: "Şebekenin olmadığı yerde grup iletişimi. Trekking, arama kurtarma.",
      meschy_uc6_h: "Prototipleme",
      meschy_uc6_p: "nRF52840 + LoRa ile kendi projeni geliştir. GPIO, BLE ve USB-C hazır.",
      meschy_banner2_h: "Meshtastic Topluluğuna Bir Katkı",
      meschy_banner2_p: "Meschy, Meshtastic ekosistemiyle tamamen uyumludur ve dünyanın dört bir yanındaki Meshtastic kullanıcılarıyla doğrudan haberleşir. Bu projeyi, Schematrix'in Türkiye'den küresel topluluğa katkısı olarak geliştirdik.",
      mesh_label: "Ekosistem",
      mesh_heading: "Tek Ağ, Bütün Cihazlar",
      mesh_sub: "Meschy, LoRa üzerinden tüm Meshtastic ekosistemiyle konuşur — telefonlar Bluetooth ile, bilgisayarlar USB ile ağa katılır. Bir mesaj gönder, ağda dalga dalga yayılışını izle; düğümler sana cevap verecek:",
      mesh_screen_idle: "çevrimiçi",
      mesh_reply_1: "Anlaşıldı 👍",
      mesh_reply_2: "Sinyal güçlü, 3 sekme.",
      mesh_reply_3: "Konum paylaşıldı.",
      mesh_reply_4: "Buradayım, dinlemedeyim.",
      mesh_reply_5: "Batarya %87.",
      mesh_reply_6: "Mesaj alındı.",
      mesh_role_client: "İstemci",
      mesh_role_router: "Yönlendirici",
      mesh_phone_channel: "Ana Kanal",
      mesh_phone_type: "Yaz...",
      mesh_hint: "(buraya yaz)",
      explore_label: "Keşfet",
      meschy_videos_heading: "Meschy'ye Yakından Bakış",
      meschy_videos_sub: "Cihazın özelliklerini ve kullanım senaryolarını keşfet.",
      meschy_vtr1_h: "Altyapısız İletişim",
      meschy_vtr1_p1: "GSM veya internet bağlantısının olmadığı ortamlarda cihazdan cihaza doğrudan mesajlaşma sağlar. Meschy, LoRa fiziksel katmanı üzerinden veriyi düşük bant genişliğiyle ama yüksek dayanıklılıkla iletir; her düğüm aynı anda hem alıcı hem de aktarıcı olarak görev yapar.",
      meschy_vtr1_p2: "Mesajlar tek bir merkeze gitmez; komşu düğümler üzerinden çok sekmeli (multi-hop) şekilde taşınır. Bu yapı kapsamayı zincirleme genişletir, tek hata noktasına bağımlılığı azaltır ve afet ile saha senaryolarında iletişimi ayakta tutar.",
      meschy_vtr1_p3: "Depremde baz istasyonları çöktüğünde ya da dağda sinyal olmadığında, Meschy cihazları kritik mesaj trafiğini canlı tutan yerel bir iletişim omurgası oluşturur.",
      tag_disaster: "Afete Hazırlık",
      tag_field_comm: "Saha İletişimi",
      meschy_vtr2_h: "Geliştirme Kartı Olarak Meschy",
      meschy_vtr2_alt: "Meschy geliştirme kartı",
      meschy_vtr2_p1: "Meshtastic'in ötesini düşün: Meschy'nin nRF52840 işlemcisi, LoRa radyosu ve GPIO pinleriyle kendi IoT projeni sıfırdan geliştirebilirsin. nRF52840 tarafı uygulama mantığını, sensör okumayı ve görev zamanlamayı üstlenirken, LoRa katmanı uzun menzilli veri taşımayı halleder.",
      meschy_vtr2_p2: "BLE üzerinden mobil uygulamayla yapılandırma, USB-C üzerinden hata ayıklama ve firmware güncellemeleri, GPIO üzerinden harici modül bağlantıları — hepsi aynı platformda buluşuyor. Yani prototipten saha testine kadar hızlı bir geliştirme döngüsünü tek kart üzerinde yürütebilirsin.",
      meschy_vtr2_p3: "Sensör ağı, GPS takibi, uzaktan izleme ya da tamamen yeni bir fikir: sadece yazılım katmanını değiştirerek aynı donanımı farklı ürün senaryolarına uyarlamak mümkün.",
      tag_platform: "Platform",
      meschy_vtr3_h: "Dayanıklı, Bağımsız, Özgür",
      meschy_vtr3_p1: "Sahaya uygun tasarım, düşük güç tüketimi ve kararlı bağlantı davranışı Meschy'nin karakterinin temelidir. Cihaz, uzun süreli kullanımda batarya ömrünü korumak için enerji kullanımını görev yüküne göre dengeler.",
      meschy_vtr3_p2: "Ağ tarafında paket tekrarları, yönlendirme davranışı ve iletim aralığı gibi parametreler uygulamanın ihtiyacına göre ayarlanabilir. Böylece aynı cihaz, düşük gecikmeli senaryolardan ultra düşük güçlü senaryolara kadar farklı profillerde çalışabilir.",
      meschy_vtr3_p3: "Açık kaynak olduğu için firmware katmanını düzenleyebilir, telemetri formatını değiştirebilir ve cihazı kendi altyapına entegre edebilirsin. Bağımsız iletişimin bireysel bir hak olduğu fikri, Meschy'nin teknik mimarisine doğrudan yansır.",
      tag_open_source: "Açık Kaynak",
      tag_durable: "Dayanıklı",
      tag_independent: "Bağımsız",

      /* AI Kamera */
      cam_title: "Schematrix | Yapay Zekâlı Ev Güvenlik Kamerası",
      cam_meta: "Cihaz üzerinde yüz tanıma, yerel yapay zekâ sahne analizi ve tam Telegram kontrolüne sahip açık kaynaklı Raspberry Pi 5 + Sony IMX500 ev güvenlik sistemi.",
      cam_label: "Bilgisayarlı Görü",
      cam_heading: "Yapay Zekâlı Ev Güvenlik Kamerası",
      cam_sub: "Cihaz üzerinde yüz tanıma, yerel yapay zekâ sahne açıklamaları ve Telegram'dan tam kontrol sunan bir Raspberry Pi 5 + Sony IMX500 güvenlik sistemi — bulut yapay zekâsı yok, abonelik yok.",
      cam_sum_title: "Yapay Zekâlı Ev Güvenliği",
      cam_sum_p1: "Raspberry Pi 5 ve Sony IMX500 yapay zekâ kamerası üzerine kurulu bu sistem, insanları doğrudan sensör üzerinde algılar, tanıdık yüzleri YuNet + SFace ile tanır ve istendiğinde karede olup biteni yerel bir görü modeliyle (Ollama üzerinden llava-phi3) anlatır. Yapay zekâ işlemleri için hiçbir kare cihazın dışına çıkmaz.",
      cam_sum_p2: "Her şey Telegram'dan kontrol edilir: yüz kaydet, sireni tetikle, parola korumalı canlı yayın başlat veya iskelet poz tahmini moduna geç. 30'dan fazla komut, tamamı GitHub'da belgelenmiş.",
      btn_watch_youtube: "YouTube'da İzle",
      cam_tech_heading: "Donanım & Yazılım",
      cam_tech_body: "Sistem, kendi yonga üstü sinir ağı hızlandırıcısına sahip Sony IMX500 sensörlü Raspberry Pi AI Camera ile eşleştirilmiş bir Raspberry Pi 5 üzerinde çalışır. İnsan algılama ve poz tahmini doğrudan sensör üzerinde gerçekleşir; yüz tanıma ve sahne analizi ise Pi'nin işlemcisinde, tamamen çevrimdışı çalışır.",
      spec_board: "Kart",
      spec_camera: "Kamera",
      spec_person_det: "İnsan Algılama",
      spec_person_det_v: "Sensör Üstü NN (SSD MobileNetV2)",
      spec_face_rec: "Yüz Tanıma",
      spec_scene_ai: "Sahne Yapay Zekâsı",
      spec_scene_ai_v: "Ollama ile llava-phi3 (yerel)",
      spec_pose: "Poz Tahmini",
      spec_pose_v: "HigherHRNet, 17 anahtar nokta",
      spec_control: "Kontrol",
      spec_control_v: "Telegram Botu (30+ komut)",
      spec_stream: "Canlı Yayın",
      spec_stream_v: "ngrok üzerinden MJPEG, parola korumalı",
      spec_alerts: "Uyarılar",
      spec_alerts_v: "GPIO siren + Telegram seri fotoğraf",
      cam_banner_h: "Yapay Zekâ Cihazın Üzerinde Çalışır. Başkasının Bulutunda Değil.",
      cam_banner_p: "Yüz tanıma ve sahne analizi tamamen Raspberry Pi üzerinde, yerel olarak çalışır — API anahtarı yok, istek başına maliyet yok, üçüncü taraflara gönderilen görüntü yok. Telegram yalnızca kontrol ve uyarılar için kullanılır; canlı yayın ise isteğe bağlı ve parola korumalıdır.",
      cam_uc_heading: "Gerçekte Ne Yapıyor?",
      cam_uc_sub: "Tek kamera, iki mod, hepsi telefondan kontrol:",
      cam_uc1_h: "Yüz Tanıma",
      cam_uc1_p: "Rehberli 3 açılı yüz kaydı; tanıdık yüzler sessizce loglanır, yabancılar için anında uyarı gönderilir.",
      cam_uc2_h: "Yapay Zekâ Sahne Açıklaması",
      cam_uc2_p: "/scene komutunu gönder; yerel görü modeli, tanınan kişinin adını da kullanarak olup biteni anlatsın.",
      cam_uc3_h: "Yabancı Uyarıları",
      cam_uc3_p: "Tanınmayan bir yüz doğrulandığında Telegram'a seri fotoğraf ve isteğe bağlı GPIO sireni.",
      cam_uc4_h: "Poz / İskelet Modu",
      cam_uc4_p: "IMX500 HigherHRNet poz tahminine geç — 17 anahtar noktalı iskeletler ve temel hareket sınıflandırması.",
      cam_uc5_h: "Canlı Yayın",
      cam_uc5_p: "ngrok üzerinden parola korumalı MJPEG yayını; her yerden, herhangi bir tarayıcıdan izlenebilir.",
      cam_uc6_h: "Sessiz Saatler",
      cam_uc6_p: "Planlı veya manuel sessiz saatler sireni susturur; Telegram uyarıları gelmeye devam eder.",
      watch_label: "İzle",
      cam_video_heading: "Çalışırken Gör",
      cam_video_sub: "Sistemin iş başında turu — yüz tanıma, uyarılar ve canlı sahne analizi."
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'tr') return saved;
    const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return browserLang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  }

  function apply(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content');
      if (dict[key] != null) el.setAttribute('content', dict[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] != null) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });

    /* Switcher active state */
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
    });

    /* Mobile menu button label */
    const toggle = document.getElementById('mobileToggle');
    if (toggle) {
      const nav = document.querySelector('nav');
      const isOpen = nav && nav.classList.contains('open');
      toggle.textContent = isOpen ? dict.nav_close : dict.nav_menu;
      toggle.setAttribute('aria-label', dict.nav_menu);
    }
  }

  window.SchematrixI18N = {
    get lang() {
      return document.documentElement.lang === 'tr' ? 'tr' : 'en';
    },
    t(key) {
      const dict = translations[this.lang] || translations.en;
      return dict[key] != null ? dict[key] : key;
    },
    set(lang) {
      localStorage.setItem(STORAGE_KEY, lang);
      apply(lang);
    }
  };

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => window.SchematrixI18N.set(btn.getAttribute('data-set-lang')));
  });

  apply(detectLang());
})();
