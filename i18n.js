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
      mesh_swipe: "← swipe to explore →",
      explore_label: "Explore",
      meschy_videos_heading: "A Closer Look at Meschy",
      meschy_videos_sub: "Explore the device's features and use cases.",
      meschy_video_heading: "See Meschy in Action",
      meschy_video_sub: "The complete Meschy story — from the idea and hardware to real-world mesh communication.",
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
      cam_video_sub: "A walkthrough of the system in action — face recognition, alerts, and live scene analysis.",

      /* Who am I */
      nav_whoami: "Who am I",
      wai_title: "Schematrix | Who am I",
      wai_meta: "Burak Bozkurt — maker of Schematrix. Embedded test engineer by day, hardware hacker by night.",
      wai_label: "Human Datasheet",
      wai_sub: "One human, two firmwares: by day I stress-test car lamps, by night I build my own circuits.",
      wai_spec1_l: "Location",
      wai_spec2_l: "Day Job",
      wai_spec2_v: "Automotive embedded SW test & validation",
      wai_spec3_l: "Night Job",
      wai_spec3_v: "Founder & everything else @ Schematrix",
      wai_spec4_l: "Interfaces",
      wai_spec5_l: "Power Source",
      wai_spec5_v: "Coffee (min. 3 cups/day)",
      wai_spec6_l: "Firmware",
      wai_spec6_v: "Curiosity — updated daily",
      wai_tl_label: "Changelog",
      wai_tl_heading: "Release History",
      wai_tl_sub: "Major versions of this human, in chronological order.",
      wai_tl1_y: "v0.1 · 1990s",
      wai_tl1_t: "Initial commit",
      wai_tl1_d: "First boot in Bursa. 100% organic hardware, zero documentation. Started the way all the best universes do: tiny, loud, and expanding fast.",
      wai_tl2_y: "v0.4 · middle school",
      wai_tl2_t: "Warranty: voided",
      wai_tl2_d: "Disassembled every remote control in the house to see what was inside. Reassembly success rate: ~60%. The leftover screws have never been explained.",
      wai_tl3_y: "v0.5 · adolescence",
      wai_tl3_t: "Unstable release",
      wai_tl3_d: "Hormone drivers installed themselves overnight. The voice module switched frequencies without notice, the hair subsystem went rogue, and every log from this period is best filed under \"undefined behavior\".",
      wai_tl4_y: "v0.6 · high school",
      wai_tl4_t: "Physics: unlocked",
      wai_tl4_d: "Discovered that math and physics are cheat codes for the real world. Picked the electron path — a few fuses were harmed in the making of this decision.",
      wai_tl5_y: "v0.7 · first loves",
      wai_tl5_t: "Pairing attempts",
      wai_tl5_d: "Several romantic connections established; all eventually timed out. Learned a lot about handshake protocols, unexpected disconnects, and why you should never promise 100% uptime.",
      wai_tl6_y: "v0.9 · the philosophy era",
      wai_tl6_t: "Existential kernel panic",
      wai_tl6_d: "Read nonstop — cosmology, biology, philosophy — slid into a full ontological crisis and wrote a book to debug it. Concluded that one very loud instant plus a few billion years of iterative refactoring explain this entire changelog just fine, no external project manager required. Several builds from this era were compiled under heavy alcohol influence; all have since been deprecated.",
      wai_tl7_y: "v1.0 · university",
      wai_tl7_t: "Soldering iron: acquired",
      wai_tl7_d: "Started Electrical & Electronics Engineering at university. First solder burn, first all-nighter, first \"it works but I don't know why\".",
      wai_tl8_y: "v1.2 · side quest",
      wai_tl8_t: "Teaching tiny hackers",
      wai_tl8_d: "Taught robotics & coding to kids for 6 months. They asked the best questions and broke things faster than any test rig.",
      wai_tl9_y: "v1.4 · internships",
      wai_tl9_t: "First taste of industry",
      wai_tl9_d: "Internships at a power utility and an automotive R&D lab — then graduated as an EEE engineer.",
      wai_tl10_y: "v1.5 · military",
      wai_tl10_t: "Mandatory system update",
      wai_tl10_d: "Military service: the one update you can't postpone forever. Learned discipline, very short haircuts, and that \"hurry up and wait\" is a universal protocol.",
      wai_tl11_y: "v2.0 · day job",
      wai_tl11_t: "Professional lamp breaker",
      wai_tl11_d: "Joined a Tier-1 automotive supplier as Embedded SW Test & Validation Engineer. HiL rigs, CAPL scripts and 9 OEM programs at once — brands you'd recognize from the highway.",
      wai_tl12_y: "v2.x · now",
      wai_tl12_t: "Schematrix: the night shift",
      wai_tl12_d: "Nights and weekends became a studio: Meschy, an AI camera, this site — and a growing pile of prototypes.",
      wai_sk_label: "Toolbox",
      wai_sk_heading: "Skill Mesh",
      wai_sk_sub: "Same mesh, different nodes. Click one:",
      wai_sk_hint: "Click a node above.",
      wai_sk1_d: "My day-job native tongue — automated CAN/LIN test scripts running on Vector HiL rigs.",
      wai_sk2_d: "Vehicle networks and diagnostics — I speak fluent bus.",
      wai_sk3_d: "Hardware-in-the-loop: the car thinks it's on the road, but it's on my desk.",
      wai_sk4_d: "From CAPL scripts to bare-metal firmware.",
      wai_sk5_d: "Schematics, layouts and the smell of fresh solder — Meschy's board was born here.",
      wai_sk6_d: "Long-range, off-grid networks. Meschy's playground.",
      wai_sk7_d: "On-device vision: face recognition and local LLMs, no cloud involved.",
      wai_sk8_d: "The glue language for everything from test rigs to camera brains.",
      wai_sk9_d: "Process discipline: requirements, traceability, SWE.4–6. Someone has to.",
      char_caught_1: "You got me! 🖐",
      char_caught_2: "Fine. Coffee break. ☕",
      char_caught_3: "Respect — you're quick. 🏃",
      char_caught_4: "Ok, deal. I'll stand still... for now."
    },

    /* ────────────────────────────── TÜRKÇE ── */
    tr: {
      /* Ortak */
      nav_home: "Ana Sayfa",
      nav_projects: "Projeler",
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
      mesh_swipe: "← kaydırarak keşfet →",
      explore_label: "Keşfet",
      meschy_videos_heading: "Meschy'ye Yakından Bakış",
      meschy_videos_sub: "Cihazın özelliklerini ve kullanım senaryolarını keşfet.",
      meschy_video_heading: "Meschy'yi İş Başında Gör",
      meschy_video_sub: "Fikirden donanıma, gerçek mesh haberleşmesinden saha kullanımına kadar Meschy'nin tüm hikâyesi.",
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
      cam_video_sub: "Sistemin iş başında turu — yüz tanıma, uyarılar ve canlı sahne analizi.",

      /* Ben Kimim */
      nav_whoami: "Ben Kimim",
      wai_title: "Schematrix | Ben Kimim",
      wai_meta: "Ben Burak Bozkurt. Gündüz otomotivde test mühendisiyim, geceyse Schematrix için bir şeyler üretip duruyorum.",
      wai_label: "İnsan Kullanım Kılavuzu",
      wai_sub: "Gündüz araba farlarının sabrını zorluyorum, gece de kendi devrelerimin. Kısacası iki vardiya, tek Burak.",
      wai_spec1_l: "Konum",
      wai_spec2_l: "Mesai Saatlerinde",
      wai_spec2_v: "Otomotivde gömülü yazılım test ve doğrulama",
      wai_spec3_l: "Mesai Bitince",
      wai_spec3_v: "Schematrix'te kurucu, mühendis, tasarımcı; ne lazımsa o",
      wai_spec4_l: "Arayüzler",
      wai_spec5_l: "Güç Kaynağı",
      wai_spec5_v: "Kahve; günde en az 3 fincan",
      wai_spec6_l: "İşletim Sistemi",
      wai_spec6_v: "Merak. Her sabah yeniden güncelleniyor",
      wai_tl_label: "Değişiklik Günlüğü",
      wai_tl_heading: "Buraya Nasıl Geldim?",
      wai_tl_sub: "Bugünkü sürüme gelene kadar çıkan belli başlı güncellemeler.",
      wai_tl1_y: "v0.1 · 1990'lar",
      wai_tl1_t: "Sistem ilk kez açıldı",
      wai_tl1_d: "Bursa'da dünyaya geldim. Donanım tamamen organik, kullanım kılavuzu yok. Küçüktüm, gürültülüydüm ve hızla büyüyordum; iyi bir başlangıç sayılır.",
      wai_tl2_y: "v0.4 · ortaokul",
      wai_tl2_t: "Garanti kapsamı dışına çıktım",
      wai_tl2_d: "Evdeki kumandaların içinde ne var diye tek tek söktüm. Yaklaşık %60'ını geri toplayabildim. Artan vidaların sırrıysa hâlâ çözülemedi.",
      wai_tl3_y: "v0.5 · ergenlik",
      wai_tl3_t: "Pek kararlı bir sürüm değildi",
      wai_tl3_d: "Hormonlar habersizce devreye girdi. Ses modülü frekans değiştiriyor, saç sistemi kendi bildiğini okuyordu. O yılların kayıtlarını fazla kurcalamıyoruz.",
      wai_tl4_y: "v0.6 · lise",
      wai_tl4_t: "Fiziğin olayını çözdüm",
      wai_tl4_d: "Matematik ve fiziğin gerçek dünyanın hile kodları olduğunu fark ettim. Elektronların peşine düştüm; bu uğurda birkaç sigorta kendini feda etti.",
      wai_tl5_y: "v0.7 · ilk aşklar",
      wai_tl5_t: "Bağlantı kuruluyor...",
      wai_tl5_d: "Birkaç kez bağlantı kuruldu, sonra bir yerlerde koptu. İletişim, beklenmedik bağlantı kayıpları ve kimseye %100 kesintisiz hizmet sözü vermemek konusunda bolca ders aldım.",
      wai_tl6_y: "v0.9 · felsefe dönemi",
      wai_tl6_t: "Varoluşsal sistem hatası",
      wai_tl6_d: "Kozmoloji, biyoloji, felsefe... Elime ne geçtiyse okudum ve sonunda sağlam bir varoluş krizine girdim. Kafamdakileri toparlamak için bir kitap bile yazdım. Sonuçta bu hikâyeyi; çok gürültülü bir başlangıcın ve milyarlarca yıllık deneme yanılmanın gayet iyi açıkladığına karar verdim. Bu dönemin bazı sürümleri alkollü derlendi; artık desteklenmiyorlar.",
      wai_tl7_y: "v1.0 · üniversite",
      wai_tl7_t: "Havyayla tanıştım",
      wai_tl7_d: "Elektrik-Elektronik Mühendisliğine başladım. İlk havya yanığı, ilk sabahlama ve ilk \"çalışıyor ama nasıl çalıştı?\" şaşkınlığı da bu pakete dâhildi.",
      wai_tl8_y: "v1.2 · yan görev",
      wai_tl8_t: "Küçük mucitlere hocalık",
      wai_tl8_d: "Altı ay boyunca çocuklara robotik ve kodlama anlattım. En iyi soruları onlar sordu; bir şeyleri bozma hızlarına hiçbir test düzeneği yetişemezdi.",
      wai_tl9_y: "v1.4 · stajlar",
      wai_tl9_t: "Sektörle ilk temas",
      wai_tl9_d: "Önce bir elektrik dağıtım şirketinde, sonra otomotiv Ar-Ge'sinde staj yaptım. Ardından diplomayı alıp Elektrik-Elektronik Mühendisi olarak hayata karıştım.",
      wai_tl10_y: "v1.5 · askerlik",
      wai_tl10_t: "Ertelenemeyen güncelleme",
      wai_tl10_d: "Askerlik vakti geldi. Disiplin, fazlasıyla kısa saçlar ve \"acele et, sonra bekle\" döngüsüyle yakından tanıştım.",
      wai_tl11_y: "v2.0 · gündüz işi",
      wai_tl11_t: "Far bozmak artık mesleğim",
      wai_tl11_d: "Büyük bir otomotiv tedarikçisinde gömülü yazılım test mühendisi oldum. HiL düzenekleri, CAPL kodları ve aynı anda dokuz farklı otomotiv projesi... Yollarda her gün gördüğün markaların farlarını bozup sağlamlaştırıyorum.",
      wai_tl12_y: "v2.x · şimdi",
      wai_tl12_t: "Geceleri Schematrix",
      wai_tl12_d: "Akşamlar ve hafta sonları zamanla küçük bir teknoloji stüdyosuna dönüştü. Meschy, yapay zekâlı kamera, bu site ve masanın her yanına yayılan prototipler buradan çıktı.",
      wai_sk_label: "Takım Çantası",
      wai_sk_heading: "Nelerle Uğraşıyorum?",
      wai_sk_sub: "Merak ettiğin bir başlığa tıkla:",
      wai_sk_hint: "Yukarıdan bir başlık seç.",
      wai_sk1_d: "Gündüz mesaisinin ana dili: Vector HiL sistemlerinde çalışan otomatik CAN/LIN testleri.",
      wai_sk2_d: "Araç içi haberleşme ve diagnostik. CAN, LIN, UDS; hepsiyle anlaşabiliyorum.",
      wai_sk3_d: "Araba kendini yolda sanıyor, aslında karşımda masada duruyor. HiL testi kabaca böyle bir şey.",
      wai_sk4_d: "CAPL kodlarından doğrudan donanım üstünde çalışan firmware'e kadar, ihtiyaç neyse.",
      wai_sk5_d: "Devre şeması, kart tasarımı ve taze lehim kokusu. Meschy'nin kartı da burada doğdu.",
      wai_sk6_d: "Şebekenin olmadığı yerde uzun mesafeli haberleşme. Meschy'nin en sevdiği alan.",
      wai_sk7_d: "Yüz tanıma ve yerel yapay zekâ doğrudan cihazda çalışıyor. Bulut da yok, abonelik de.",
      wai_sk8_d: "Test sisteminden kamera yazılımına kadar her şeyi birbirine bağlayan emektar.",
      wai_sk9_d: "Gereksinimler, izlenebilirlik ve SWE.4–6. Pek heyecanlı görünmeyebilir ama birinin düzeni koruması gerekiyor.",
      char_caught_1: "Eyvah, yakalandık! 🖐",
      char_caught_2: "Tamam, biraz da sen gezdir. ☕",
      char_caught_3: "Vay be, gerçekten yakaladın. 🏃",
      char_caught_4: "Peki peki, kaçmıyorum... şimdilik."
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
