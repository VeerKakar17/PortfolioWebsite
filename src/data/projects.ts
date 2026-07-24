const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type ProjectLinkKind = 'github' | 'demo' | 'docs' | 'external';

export interface ProjectLink {
  label: string;
  url: string;
  kind: ProjectLinkKind;
}

export interface ProjectSection {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status?: string;
  detailLink?: ProjectLink;
  tags: string[];
  images?: string[];
  visualLines?: string[];
  links: ProjectLink[];
  overview: string[];
  highlights: string[];
  implementation: ProjectSection[];
  challenges: string[];
  results: string[];
  nextSteps?: string[];
  featured: boolean;
}

export const siteLinks = {
  resume: asset('Resume.pdf'),
  github: 'https://github.com/VeerKakar17',
  linkedin: 'https://linkedin.com/in/veerkakar',
  email: 'mailto:veerkakar1@gmail.com',
};

export const projects: Project[] = [
  {
    slug: 'bare-metal-rpi5-os',
    title: 'Bare-Metal RPi5 Unix-Style OS',
    summary:
      'A from-scratch AArch64 Unix-inspired OS for Raspberry Pi 5 hardware and QEMU Pi 3B with EL1/EL0 isolation, virtual memory, persistent inode filesystem, ELF userspace, shell, drivers, and graphical framebuffer terminal.',
    description:
      'Documented bare-metal OS work spanning boot, privilege separation, preemptive multitasking, VM, COW fork, VFS, procfs/devfs, userspace ELF loading, device drivers, and a framebuffer TTY.',
    tags: [
      'C',
      'AArch64 Assembly',
      'ARMv8-A',
      'QEMU',
      'RPi5',
      'Unix/POSIX',
      'Virtual Memory',
      'Filesystems',
      'Drivers',
    ],
    visualLines: ['RPi5 + QEMU Pi 3B', 'EL1 kernel / EL0 user', 'VM + COW fork + mmap', 'VFS + procfs/devfs + ELF'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/mkarounos4/OS-PI-is-cool',
        kind: 'github',
      },
    ],
    overview: [
      'This project is a Unix-inspired operating system written from scratch for AArch64. It runs on Raspberry Pi 5 hardware and under QEMU\'s Raspberry Pi 3B emulator, which keeps development fast while still validating real hardware behavior.',
      'The codebase is organized around documented subsystems: boot and traps, EL1/EL0 isolation, scheduler and process model, virtual memory, inode filesystem, userspace toolchain, syscalls, device drivers, and graphical terminal support.',
    ],
    highlights: [
      'EL1 kernel and EL0 userspace split with explicit privilege transitions.',
      'Timer-driven preemptive multitasking with process groups, job control, waitpid, zombies, orphans, threads, mutexes, semaphores, and condition variables.',
      'Per-process virtual memory with demand paging, lazy allocation, mmap, and copy-on-write fork.',
      'Persistent ext2-inspired inode filesystem with directories, symbolic links, permissions, VFS routing, procfs/devfs, inode cache, and LRU block cache.',
      'ELF executable loading, statically linked userspace commands, shell, job control, pipes, and POSIX-style signals.',
      'UART, SDHCI/block-device work, interrupt-driven input, TTY backends, framebuffer graphical terminal, and Raspberry Pi 5 fan support.',
    ],
    implementation: [
      {
        title: 'Kernel / User Isolation',
        items: [
          'Runs the kernel at EL1 and user programs at EL0, keeping privileged kernel state separate from application code.',
          'Defines the boot, exception, trap, IRQ, timer, and syscall paths so user programs interact with the kernel through controlled entry points.',
        ],
      },
      {
        title: 'Virtual Memory',
        items: [
          'Maintains process-specific page tables with page-fault handling, lazy stack and heap allocation, process isolation, and mmap support.',
          'Implements copy-on-write fork and kernel/userspace allocators so process creation can avoid eager memory copying.',
        ],
      },
      {
        title: 'Filesystem and ELF Loading',
        items: [
          'Provides an ext2-inspired inode filesystem with directories, symbolic links, permissions, open-file table, inode cache, LRU block cache, and VFS routing.',
          'Mounts procfs/devfs-style virtual filesystems and loads statically linked ELF binaries into isolated userspace address spaces.',
        ],
      },
      {
        title: 'Unix Process Model',
        items: [
          'Supports fork, exec, waitpid, exit, process groups, job control, signals, pipes, shell workflows, and core Unix-style commands.',
          'Includes thread support and synchronization primitives for shared execution inside the kernel-managed runtime.',
        ],
      },
      {
        title: 'Drivers and GUI Terminal',
        items: [
          'Brings up UART, interrupt-driven input, character devices, block devices, SD card persistence, and Raspberry Pi 5-specific hardware support.',
          'Includes a framebuffer graphical terminal and multi-terminal TTY backend used by shell sessions.',
        ],
      },
    ],
    challenges: [
      'Raspberry Pi 5 hardware support required reconciling sparse public documentation with behavior visible in Linux sources and low-level bring-up testing.',
      'Copy-on-write, mmap, and demand paging had to cooperate with process lifecycle, fault handling, and scheduler behavior.',
      'The project spans low-level bootstrapping, kernel policy, userspace ABI design, and hardware-specific I/O, so bugs often crossed subsystem boundaries.',
    ],
    results: [
      'Runs on Raspberry Pi 5 hardware and QEMU Pi 3B, with quickstart, demo, architecture, API, and subsystem documentation.',
      'Demonstrates Unix-style primitives through shell-driven workflows, userspace commands, procfs/devfs, filesystem persistence, and graphical terminal output.',
      'Combines kernel, process, memory, filesystem, userspace, driver, and terminal work into a complete educational OS codebase.',
    ],
    nextSteps: [
      'Link this card to the planned dedicated OS project website when it is ready.',
      'Continue future work around networking, multicore support, package management, GUI desktop work, and on-device C development.',
    ],
    featured: true,
  },
  {
    slug: 'mini-minecraft',
    title: 'Mini Minecraft',
    summary:
      'C++/OpenGL voxel engine where my work covered efficient chunk rendering, interleaved VBOs, multithreaded terrain generation, inventory/hotbar UI, redstone block-update propagation, and profiling-driven VBO optimization.',
    description:
      'A real-time C++/OpenGL voxel renderer and gameplay sandbox built around chunked terrain, multithreaded world generation, interactive UI, and Minecraft-style simulation systems.',
    status: 'Code available upon request',
    tags: ['C++', 'OpenGL', 'Multithreading', 'Real-Time Rendering', 'Optimization'],
    images: [
      asset('MiniMinecraftBlock.png'),
      asset('MiniMinecraftInventory.png'),
      asset('MiniMinecraftRedstone.png'),
    ],
    links: [
      {
        label: 'Demo',
        url: 'https://www.youtube.com/playlist?list=PLS0hPwkzcr9sHUFkR2NTA9FKZixdtvJLW',
        kind: 'demo',
      },
    ],
    overview: [
      'Mini Minecraft is a C++ and OpenGL voxel engine that started from an intentionally open-ended graphics assignment with limited implementation guidance. The final project grew into a much broader engine and gameplay sandbox with procedural terrain, player physics, texturing, fluids, sound, custom block shapes, shadow mapping, inventory UI, and redstone-style logic.',
      'We pushed the project well past the baseline scope by treating the assignment as an engine-building exercise rather than a checklist. My primary ownership was the systems-heavy rendering and gameplay infrastructure: efficient chunk VBO generation, multithreaded terrain/VBO work queues, inventory and hotbar rendering, redstone data propagation, and profiling-driven VBO optimizations.',
      'Because there is no separate public project page for this repo, this writeup captures the important technical decisions, extensions, and engineering tradeoffs for recruiter review.',
    ],
    highlights: [
      'Implemented chunk VBO generation that buffers only faces adjacent to transparent blocks or unloaded neighboring chunks.',
      'Added interleaved vertex data and a ShaderProgram draw path for position/UV attributes and efficient chunk rendering.',
      'Built a thread pool using CPU cores minus one, with block-generation workers and VBO workers coordinated through mutex-protected queues.',
      'Implemented inventory and hotbar UI with framebuffer-based block icon rendering, drag-and-drop behavior, scrolling creative inventory, and selected hotbar block placement.',
      'Created redstone data/component structures, block-update propagation, recursive signal increase/break handling, cross-chunk VBO update tracking, and lamp/dust/source behavior.',
      'Profiled createVBOData and added temperature/humidity and block-property caches to reduce expensive repeated noise and hash-map work.',
      'Shaved roughly 300 ms from createVBOData runtime on my machine by caching biome values, caching block transparency/full-block checks, reducing hashset/hashmap work, and sorting only transparent blocks.',
    ],
    implementation: [
      {
        title: 'Chunk Rendering',
        items: [
          'Made each chunk extend the drawable path and generate VBO/index data only for visible faces using BlockFace and VertexData structures.',
          'Created six reusable BlockFace definitions and triangulated visible square faces into index data rather than duplicating per-face code.',
          'Added interleaved vertex attributes and a ShaderProgram::drawInterleaved path so chunk buffers can carry position, UV, and other per-vertex fields cleanly through OpenGL.',
          'Updated adjacent chunks when placing, breaking, or creating chunks at boundaries so internal seam faces are culled correctly without leaving missing outer faces.',
        ],
      },
      {
        title: 'Multithreaded Generation',
        items: [
          'Built a thread pool where worker threads consume queued jobs while the main thread remains available for rendering and interaction.',
          'Refactored terrain generation away from global chunk-map mutation in worker threads by passing Chunk pointers and using local block writes to avoid races.',
          'Separated block generation from VBO generation, returning ChunkVBOData back to the main thread for final GPU buffer upload.',
          'Changed block placement and breaking so chunk VBO rebuilds can be queued through the same threaded pipeline instead of stalling the render loop.',
        ],
      },
      {
        title: 'Inventory, Hotbar, and Redstone',
        items: [
          'Rendered inventory and hotbar backgrounds in screen space, then rendered mini 3D block icons through a framebuffer with depth testing before compositing them onto the UI.',
          'Implemented creative inventory scrolling, block dragging/swapping, selected hotbar slot state, and block placement through the selected hotbar block.',
          'Modeled redstone dust power levels, connection directions, redstone components, powered lamps, source blocks, recursive power propagation, DFS-style unpowering, and chunk update sets for cross-chunk updates.',
          'Structured redstone components around changePower callbacks so new components such as torches could be added without rewriting the entire propagation model.',
        ],
      },
      {
        title: 'Performance Pass',
        items: [
          'Instrumented createVBOData with millisecond timing to find real bottlenecks after fluids, redstone, custom blocks, and UI systems increased rebuild cost.',
          'Cached temperature/humidity lookups per local x/z coordinate instead of recomputing procedural noise for every vertex.',
          'Cached transparent/full-block properties in static arrays by BlockType to avoid repeated hashset and hashmap checks.',
          'Separated opaque and transparent block processing so only transparent blocks need manual z sorting.',
        ],
      },
    ],
    challenges: [
      'Creating VBO data every frame was too slow, so chunk mesh generation had to become event-driven and only run when chunks or blocks changed.',
      'Worker threads initially raced on the global chunk map, requiring a refactor to local chunk writes and explicit neighbor traversal.',
      'Inventory block icons needed depth-tested 3D rendering inside a 2D UI, which required framebuffer composition and alpha blending fixes.',
      'Redstone updates across chunk boundaries could rebuild the same chunk multiple times or miss adjacent faces, so updates are collected into a chunk set before VBO rebuilds.',
    ],
    results: [
      'Produced a playable voxel-engine demo with chunked terrain, block interaction, UI, redstone, water/lava systems, shadow mapping, and procedural biomes.',
      'Reduced VBO update cost through event-driven rebuilds, multithreaded generation, cached biome values, and cached block transparency/full-block checks.',
      'Includes screenshots and a demo playlist; code is available upon request.',
    ],
    nextSteps: [
      'Add measured before/after timing numbers if the original profiler captures are recovered.',
      'Document the chunk-generation and redstone-update pipelines with architecture diagrams.',
    ],
    featured: true,
  },
  {
    slug: 'embedded-distributed-robotics',
    title: 'Self-Assembling Embedded Robots',
    summary:
      'ESE 3500 swarm robotics project where four ATmega328PB/ESP32 robots autonomously assemble into a target 2D shape using ESP-NOW, SPI, IR proximity sensing, graph construction, path planning, and DC wheel control.',
    description:
      'Bare-metal embedded robotics work across motor firmware, SPI/ESP-NOW communication, IR distance sensing, graph construction, and movement planning for autonomous shape assembly.',
    detailLink: {
      label: 'Full Page',
      url: 'https://upenn-embedded.github.io/final-project-s26-t9/',
      kind: 'external',
    },
    tags: ['Embedded Systems', 'ATmega328PB', 'ESP32', 'ESP-NOW', 'SPI', 'Robotics', 'C/C++', 'Path Planning'],
    images: [asset('SelfAssemblingRobotsFormation.jpg'), asset('SelfAssemblingRobotsBlockDiagram.png')],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/upenn-embedded/final-project-s26-t9',
        kind: 'github',
      },
    ],
    overview: [
      'Self-Assembling Robots was an ESE 3500 final project built by Team 9. Four small triangular robots start from arbitrary positions and autonomously assemble into a target 2D formation after a single initial command.',
      'The system uses a Main ATmega328PB as coordinator, a Main ESP32 as the ESP-NOW hub, one Sub ESP32 per robot, and one Sub ATmega328PB per robot for motor control and sensing. Commands and responses travel through ATmega-to-ESP32 SPI links and ESP-NOW wireless broadcasts.',
      'This project has a full standalone website with the demo video, system overview, SRS/HRS validation tables, proof-of-work media, images, and final conclusion. The homepage card sends readers there directly.',
    ],
    highlights: [
      'Implemented and integrated bare-metal ATmega firmware for movement and communication.',
      'Sent movement and sensor data across the full Main ATmega -> Main ESP32 -> Sub ESP32 -> Sub ATmega chain.',
      'Built graph representation and movement data flow from ADC phototransistor readings.',
      'Used IR proximity sensing with ambient subtraction to estimate inter-robot distances.',
      'Validated end-to-end poll latency under 200 ms and graph construction within 1 second.',
      'Final system assembled four robots into a target triangular formation within the stated 3 cm positional bound.',
    ],
    implementation: [
      {
        title: 'Communication Stack',
        items: [
          'Main ATmega communicates with a Main ESP32 over SPI; the Main ESP32 broadcasts commands to Sub ESP32s over ESP-NOW.',
          'Each Sub ESP32 relays commands over SPI to its paired Sub ATmega, then responses return through the same chain.',
          'The ATmega SPI driver uses framed LEN/DATA transactions and guard delays so peripheral responses are ready before the controller clocks them out.',
        ],
      },
      {
        title: 'Sensing and Movement',
        items: [
          'Sub ATmega firmware drives two DC wheel motors with H-bridge-style GPIO outputs for forward, backward, clockwise, counterclockwise, and stop commands.',
          'IR sensing uses ADC readings from phototransistors and a 38 kHz transmitter carrier to estimate relative distance after ambient subtraction.',
          'The main controller receives distance/address data, constructs a graph of relative positions, computes movement instructions, and sends commands back to robots.',
        ],
      },
      {
        title: 'Integration and Validation',
        items: [
          'The system moved from component tests to a full four-robot demo with ESP-NOW reliability testing, battery/regulator validation, and physical formation measurement.',
          'The original nRF24L01+ and LDO plan changed to ESP-NOW and a buck converter because those choices were more reliable under the project constraints.',
        ],
      },
    ],
    challenges: [
      'Integration was the hard part: locomotion, IR sensing, wireless communication, and path planning each worked independently before their timing and parameters had to be tuned together.',
      'Floor surface and ambient IR light affected behavior enough that the demo needed controlled movement surface and ambient-subtraction calibration.',
      'Small SPI guard delays and staggered ESP-NOW reply windows were necessary to avoid packet collisions and stale response data.',
    ],
    results: [
      'Four robots autonomously assembled into the target 2D formation with no manual repositioning after the initial command.',
      'End-to-end wireless/sensor poll cycle met the 200 ms bound across repeated trials.',
      'IR distance estimates met the documented +/-1 cm bound across tested separations, and final robot positions were within 3 cm of assigned slots.',
      'Shows bare-metal embedded systems work at the microcontroller and distributed robotics level.',
    ],
    nextSteps: [
      'Add closed-loop motor control with wheel encoders or an IMU for more precise movement.',
      'Scale beyond four robots and support arbitrary target shapes beyond the triangular formation demo.',
    ],
    featured: true,
  },
  {
    slug: 'cuda-gpu-projects',
    title: 'CIS 5650 / CUDA GPU Projects',
    status: 'In progress',
    summary:
      'CUDA/GPU programming projects focused on parallel algorithms, GPU architecture, profiling, and performance optimization.',
    description:
      'A growing collection of CUDA work centered on kernel design, memory layout, profiling, and measurable optimization.',
    tags: ['CUDA C++', 'GPU Programming', 'Parallel Algorithms', 'Profiling', 'Performance Optimization'],
    visualLines: ['kernel launch geometry', 'memory coalescing', 'occupancy profiling', 'before/after metrics'],
    links: [],
    overview: [
      'This page is structured as the landing area for CIS 5650 GPU programming work as results are added.',
      'The focus is on making performance claims concrete: algorithm structure, GPU memory behavior, profiling methodology, and optimization deltas.',
    ],
    highlights: [
      'CUDA C++ kernel implementation and launch configuration.',
      'Parallel algorithm design with attention to GPU architecture constraints.',
      'Profiling-driven optimization rather than purely theoretical speedups.',
      'Planned before/after measurements and visual outputs as projects mature.',
    ],
    implementation: [
      {
        title: 'Kernel Structure',
        items: [
          'Document block and grid layout, thread ownership, synchronization boundaries, and divergence risks for each project.',
          'Record how kernel decomposition changes as performance bottlenecks become visible.',
        ],
      },
      {
        title: 'Memory Layout',
        items: [
          'Track global memory access patterns, coalescing behavior, shared-memory usage, and transfer overhead.',
          'Explain the data representation choices that shape throughput and occupancy.',
        ],
      },
      {
        title: 'Profiling',
        items: [
          'Use profiling output to identify bottlenecks before optimization.',
          'Add screenshots, tables, or benchmark summaries once stable course results are available.',
        ],
      },
    ],
    challenges: [
      'The page is intentionally marked in progress until project-specific kernels, profile captures, and performance numbers can be added.',
      'GPU optimization work needs careful measurement so the portfolio does not overstate results.',
    ],
    results: [
      'Prepared an internal page template for future GPU project writeups.',
      'Created placeholders for algorithm notes, kernel structure, memory layout, profiling results, and screenshots.',
    ],
    nextSteps: [
      'Add each CUDA assignment or project as a subsection with kernel diagrams and profiling data.',
      'Publish before/after optimization numbers only after they are measured and reproducible.',
    ],
    featured: false,
  },
  {
    slug: 'penn-mobile',
    title: 'Penn Mobile',
    summary:
      'Production Android work on Penn Mobile, Penn\'s official student app with 4,000+ monthly users, including a Jetpack Compose news component, ktlint cleanup, team development, and an in-progress Word Hunt-style game.',
    description:
      'Production mobile engineering on a Penn Labs Android app used for campus essentials such as GSR booking, dining, laundry, news, resources, and home-page content.',
    tags: ['Kotlin', 'Android', 'Jetpack Compose', 'CI/CD', 'Ktlint', 'Penn Labs', 'Team Development'],
    images: [asset('PennLabsLogo.png')],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/pennlabs/penn-mobile-android',
        kind: 'github',
      },
      {
        label: 'External Site',
        url: 'https://pennlabs.org/products/penn-mobile',
        kind: 'external',
      },
    ],
    overview: [
      'Penn Mobile is Penn\'s official student app, built by Penn Labs in partnership with the UA. The public product page describes campus essentials including GSR booking, dining and retail hours/menus, laundry availability, campus resources, and Daily Pennsylvanian news for 4,000+ monthly users.',
      'My local commit history shows contributions to the home-page news card migration into Jetpack Compose, ktlint/style cleanup, and the app about page. I am also working on a Word Hunt-style game feature that is still in progress.',
    ],
    highlights: [
      'Added a Jetpack Compose news component for the home page, replacing a heavier XML/adapter path with a Compose view integration.',
      'Worked inside the existing HomeAdapter/HomeNewsCardHolder flow instead of building an isolated prototype.',
      'Ran style fixes for ktlint and followed the repo\'s Gradle/CI quality workflow.',
      'Contributed to a production app with campus features including home events/posts, dining, GSR booking, laundry, fitness capacity, resources, and support information.',
      'In-progress Word Hunt-style game work adds a more interactive Penn Labs feature area while remaining separate from production claims until it ships.',
    ],
    implementation: [
      {
        title: 'Home News Compose Work',
        items: [
          'Added NewsCompose.kt and a Compose-backed news_card_compose_view layout for the home-page news card.',
          'Simplified the prior adapter/XML implementation while preserving the surrounding home feed behavior.',
          'Followed up with spacing fixes and ktlint cleanup across the touched home adapter/news component files.',
        ],
      },
      {
        title: 'Production Workflow',
        items: [
          'Worked in a multi-contributor Android repo with Gradle, GitHub Actions, unit-test, release, coverage, and ktlint-check workflows.',
          'Kept changes scoped to existing product surfaces and review expectations rather than rewriting the app architecture.',
          'The app itself covers real campus workflows: reserving study rooms, checking dining options, viewing laundry availability, campus resources, news, and home-page posts.',
        ],
      },
      {
        title: 'Word Hunt-Style Game',
        items: [
          'In progress: building a Word Hunt-style game feature for Penn Labs work.',
          'This is intentionally described as in progress until it is merged or publicly released.',
        ],
      },
    ],
    challenges: [
      'Production mobile work requires preserving existing user behavior while migrating individual UI surfaces.',
      'Compose migration has to interoperate with legacy XML, adapters, and view holders instead of assuming a fully Compose app.',
      'Team-owned codebases require clean diffs, style compliance, and coordination with ongoing product work.',
    ],
    results: [
      'Merged a Compose news-card implementation path with follow-up spacing and ktlint cleanup.',
      'Shows production app experience in a real Penn Labs product alongside lower-level systems projects.',
      'Keeps Penn Mobile as a supporting project while still surfacing concrete contribution details and product scale.',
    ],
    featured: false,
  },
  {
    slug: 'game-dev-club-releases',
    title: 'Upgrade Game Dev Club',
    summary:
      'Released Unity games built on a 30+ person team, showing shipped product experience, gameplay systems, and collaboration.',
    description:
      'Team-based Unity releases, including Catanks, demonstrating shipped gameplay work and cross-discipline production workflows.',
    tags: ['Unity', 'C#', 'Game Development', 'Team Development'],
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3793790/a9e03a2d727e9d9b8bffecbaa8fa8ba8360b9116/header.jpg?t=1758729503',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/pennupgrade/catanks',
        kind: 'github',
      },
      {
        label: 'External Site',
        url: 'https://store.steampowered.com/app/3793790/Catanks',
        kind: 'external',
      },
    ],
    overview: [
      'This supporting project page groups released game work from a large team environment, with Catanks as the visible shipped release.',
      'The value is not just the Unity stack; it is the experience of integrating gameplay work into a production process involving engineering, design, and release coordination.',
    ],
    highlights: [
      'Unity and C# gameplay development.',
      '30+ person team collaboration across engineering and design.',
      'Published release workflow through Steam and Itch-style distribution channels.',
      'Practical experience shipping a user-facing interactive product.',
    ],
    implementation: [
      {
        title: 'Gameplay Systems',
        items: [
          'Contributed gameplay engineering within Unity and C#.',
          'Worked inside a larger game codebase where systems had to integrate with design and production needs.',
        ],
      },
      {
        title: 'Release Workflow',
        items: [
          'Collaborated through professional game development practices to prepare a public release.',
          'Used source control and team coordination across a large student development group.',
        ],
      },
    ],
    challenges: [
      'Large-team game projects require keeping implementation aligned with changing design goals.',
      'Shipping work requires attention to polish, integration, and coordination beyond isolated feature completion.',
    ],
    results: [
      'Released Catanks publicly on Steam.',
      'Demonstrates shipped product experience and collaborative development at a larger team scale.',
    ],
    featured: false,
  },
  {
    slug: 'game-mash',
    title: 'Game Mash',
    summary:
      'Full-stack game discovery app that merges Steam, Backloggd, GOG, and HowLongToBeat datasets into a PostgreSQL-backed catalog with search, top games by genre/platform, and consolidated game detail pages.',
    description:
      'A database-focused web app using PostgreSQL on AWS, Node/Express, React, Vite, Tailwind, and optimized SQL queries over 126k+ consolidated games.',
    tags: ['PostgreSQL', 'AWS', 'Node.js', 'Express', 'React', 'Vite', 'TailwindCSS', 'Data Processing'],
    images: [
      asset('GameMashSearchScreen.png'),
      asset('GameMashGenreScreen.png'),
      asset('GameMashInfoScreen.png'),
    ],
    links: [],
    overview: [
      'Game Mash aggregates game information across major storefronts and catalog/rating sites so users can compare games beyond the bias or coverage limitations of any single source.',
      'The app combines Steam, Backloggd, GOG, and HowLongToBeat Kaggle datasets, normalizes titles into a clean_name key, joins records across datasets, and exposes search, genre/platform rankings, and detailed game info pages.',
      'The backend is Node.js/Express using pg against PostgreSQL hosted on AWS. The frontend is React/Vite with TailwindCSS, axios, react-router-dom, react-select, lucide-react, and react-icons.',
    ],
    highlights: [
      'Merged Steam Games (110,326 rows), Backloggd (195,209 rows), GOG (10,896 rows), and HowLongToBeat (147,474 rows) source datasets.',
      'Created consolidated Game, Platform, Genre, Steam, GOG, Backloggd, HowLongToBeat, Platforms, Genres, and ConsolidatedGameInfo relations.',
      'Produced a final catalog with 126,234 Game rows, 209 platforms, 271 genres, 358,689 game-platform mappings, and 368,473 game-genre mappings.',
      'Uploaded Backloggd poster images to S3 because the source dataset had local image files rather than hosted URLs.',
      'Optimized the search query from roughly 17 minutes to around 500 ms and top-genre/platform queries from seconds to hundreds of milliseconds.',
    ],
    implementation: [
      {
        title: 'Data Pipeline and Schema',
        items: [
          'Imported CSVs into pandas dataframes, removed rows missing core fields, normalized ratings to 0-1, parsed release dates, and generated clean_name values by lowercasing and normalizing titles.',
          'Outer-joined datasets on clean_name, compiled unique platforms and genres across sources, and associated each consolidated game with its platforms and genres.',
          'Designed relations that satisfy BCNF around gameID, platform IDs, genre IDs, and source-specific game information.',
        ],
      },
      {
        title: 'Application Pages',
        items: [
          'Home page shows 12 selected genres and the top 10 games by rating for each genre.',
          'Platforms page shows 12 selected platforms and the top 10 games by rating for each platform.',
          'Game Info page consolidates title, price, developer, publisher, release date, time to beat, rating, platforms, image, and description.',
          'Search page supports paginated filtering by name, genres, platforms, developer, publisher, release-date range, rating range, and sort order.',
        ],
      },
      {
        title: 'Query Optimization',
        items: [
          'Created a materialized view, ConsolidatedQueryInfo, to precompute expensive joins and eliminate repeated UNION work for read-only website queries.',
          'Added indexes on ConsolidatedGameInfo(id) and ConsolidatedGameInfo(rating) to speed joins and rating-ordered search/ranking queries.',
          'Restructured genre/platform checks and reduced join counts so the database could short-circuit filters and avoid repeatedly recomputing consolidated data.',
        ],
      },
    ],
    challenges: [
      'Linking datasets was difficult because there was no shared gameId across sources. Approximate string matching with Levenshtein/Jaro-Winkler confused games such as Portal and Portal 2, so the project used exact matches on normalized clean names.',
      'Backloggd supplied 179,846 local poster images instead of hosted URLs, so the project used boto3 and threaded uploads to move images into AWS S3.',
      'Initial complex SQL was too slow for an interactive app, especially search, so query design had to be reworked around materialized views and indexes.',
    ],
    results: [
      'Search improved from roughly 17 minutes to around 500 ms.',
      'Game Info improved from around 1.5 seconds to around 500 ms.',
      'Top Games by Genre improved from around 5 seconds to around 600 ms.',
      'Top Games by Platform improved from around 6 seconds to around 400 ms.',
      'Deployed publicly on Render with responsive Tailwind styling; first request can be slow because the free backend sleeps after inactivity.',
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const additionalProjects = projects.filter((project) => !project.featured);

export const experienceItems = [
  {
    title: 'Roblox',
    role: 'Software Engineering Intern',
    period: 'May 2026 - Present',
    summary:
      'Backend infrastructure work for IP licensing systems, with emphasis on service boundaries, RPC contracts, durable async workflows, consistency behavior, and production metrics. The work maps closely to the distributed-systems side of this portfolio: designing reliable cross-service behavior and shipping it inside a large product organization.',
    tags: ['Temporal', 'RPCs', 'Distributed Systems', 'Backend Services', 'Schemas', 'Metrics'],
  },
  {
    title: 'Transforma Tech',
    role: 'Software Engineering Intern',
    period: 'May 2025 - Aug. 2025',
    summary:
      'Enterprise integration engineering around IBM App Connect Enterprise, schema-driven code generation, and asynchronous data movement between heterogeneous systems. The work centered on practical backend tooling: turning structured schemas into repeatable integration artifacts and supporting MQ/Kafka-based pipelines.',
    tags: ['Java', 'IBM ACE', 'Kafka', 'IBM MQ', 'Enterprise Integration'],
    links: [
      {
        label: 'External Site',
        url: 'http://www.transformatech.com/products/transformatech-accelerators-for-ibm-ace/',
        kind: 'external' as const,
      },
    ],
  },
  {
    title: 'Penn OS/DSA TA',
    role: 'Operating Systems and DSA Teaching Assistant',
    period: 'May 2025 - Present',
    summary:
      'Teaching work across operating systems, data structures, algorithms, proofs, programming assignments, and systems projects. This reinforces the same core areas shown in the project work: OS concepts, rigorous debugging, algorithmic reasoning, and system-design explanation.',
    tags: ['Operating Systems', 'Algorithms', 'Systems Projects', 'Teaching'],
  },
];
