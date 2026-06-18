import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

const projects = {
  quackro: {
    title: "Quackro",
    tagline: "A duck-themed programmable macropad",
    type: "Personal Individual Project",
    color: "from-amber-50 to-orange-50",
    accent: "text-amber-600",
    accentBg: "bg-amber-50",
    borderAccent: "border-amber-200",
    image: "/images/quackro.jpg",
    heroHeight: "h-[50vh] md:h-[60vh]", //increase quackro width here
    overview: "Quackro is a custom 3-key macropad designed with a duck-themed enclosure. This project consists of custom PCB design, mechanical enclosure design, and firmware programming to create a fully functional 3-key macropad.",
    overviewVideo: "/videos/quackro_header_video.mp4",
    features: {
      type: "quackro",
      items: [
        {
          type: "image",
          src: "/images/quackro_OLED.jpg",
          // title: "Integrated LCD Display",
          description: "Custom duck image projection."
        },
        {
          type: "image",
          src: "/images/quackro_QMK.png",
          // title: "QMK Programmability",
          description: "Set macros and any key of your choice using QMK firmware."
        }
      ]
    },
    contributions: [
      {
        title: "Custom PCB Design",
        description: "Designed and fabricated a custom PCB using KiCad, doing up the electronic schematic, doing simple routing and layout for the 3-key configuration with i2c display.",
        tools: ["KiCad", "Soldering"],
        images: ["/images/quackro_kicad.png", "/images/quackro_pcb.jpg"]
      },
      {
        title: "Enclosure Design",
        description: "Created a custom duck-themed casing using Autodesk Inventor, consisting of the base and cover.",
        tools: ["Autodesk Inventor"],
        images: ["/images/quackro_CAD.png"]
      },
      {
        title: "Firmware Development",
        description: "Programmed the macropad using QMK firmware in VS Code, implementing customizable key mappings and i2c screen",
        tools: ["VS Code", "QMK"],
        images: ["/images/quackro-firmware.jpg"]
      }
    ],
    skills: ["KiCad", "Autodesk Inventor", "Firmware", "3D Printing", "Soldering"],
    nextProject: "reflex"
  },
  reflex: {
    title: "REFLEX",
    tagline: "AI-powered smart mirror for FabLab",
    type: "Personal Group Project",
    color: "from-indigo-50 to-violet-50",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-50",
    borderAccent: "border-indigo-200",
    image: "/images/reflex.jpg",
    heroHeight: "h-[30vh] md:h-[90vh]", //increase reflex width here
    overview: "REFLEX is an AI smart mirror that detects the attire of students and staff in the FabLab. It also has an AI chatbot to answer questions and provide assistance to users in Fablab.",
    // Vertical demo is now an image (not a video). Swap this for your vertical image, e.g. "/images/reflex_header_image.jpg"
    overviewImage: "/images/reflex.jpg",
    overviewVideo: "/images/reflex.jpg",
    features: {
      type: "reflex",
      items: [
        {
          type: "image",
          src: "/images/reflex_alu.png",
          // title: "Aluminum Frame",
          description: "Aluminium profile frame"
        },
        {
          type: "image",
          src: "/images/reflex_casing.png",
          // title: "Wood Frame",
          description: "Plywood casing"
        },
        {
          type: "image",
          src: "/images/reflex_TV.png",
          // title: "TV Screen Mount",
          description: "TV screen"
        }
      ]
    },
    contributions: [
      {
        title: "Fabrication",
        description: "Operated machinery at Fablab for fabrication.",
        tools: ["CNC Router (Wood)", "Miter Saw (Wood)", "Vertical Bandsaw (Metal)", "Laser Cutter", "3D Printer"],
        images: ["/images/reflex-machines.jpg"]
      },
      {
        title: "Assembly",
        description: "Assembled REFLEX using materials like plywood, aluminum profiles, and acrylic to construct the mirror housing and frame.",
        tools: ["Assembly"],
        images: ["/images/reflex_wood_fabrication.jpg"]
      },
      {
        title: "TV Cover Design",
        description: "Designed an acrylic cover for the back of the TV, stabilized mounting using stand-offs, drilled vent holes for airflow.",
        tools: ["Mechanical Design"],
        images: ["/images/reflex_tv_mounting.jpg"]
      }
    ],
    skills: ["Woodworking", "Laser Cutting", "3D Printing", "Metalworking", "Mechanical Assembly", "Teamwork"],
    nextProject: "bloom-bloom"
  },
  "bloom-bloom": {
    title: "Bloom Bloom",
    tagline: "Physical flowering simulation to train elderlies with declining hand stability",
    type: "School Group Project",
    color: "from-pink-50 to-rose-50",
    accent: "text-pink-600",
    accentBg: "bg-pink-50",
    borderAccent: "border-pink-200",
    image: "/images/bloom-bloom.jpg",
    heroHeight: "h-[50vh] md:h-[60vh]", //increase width here
    overview: "Bloom Bloom is a physical flowering simulator. Users are to tilt a weighted jug repetitively, for 14 consecutive days, to reenact the watering motion, for the flower to bloom fully. With a gamified addition to the product, elderlies are encouraged to 'water' the flower, which in return help to train their wrist strength.",
    overviewVideo: "/videos/bloom_bloom_header_video.mp4",
    // featureDescription: "The Bloom Bloom system uses a physical watering interaction to trigger a mechanical flower blooming response, creating an engaging and therapeutic experience.",
    features: {
      type: "bloom-bloom",
      items: [
        {
          type: "image",
          src: "/images/bloom_bloom_juggame.png",
          title: "Jug Game",
          description: "Accelerometer detects the tilt of the jug. Users tilt the jug according to the game to reach the finish line. This is considered 1 complete watering motion."
        },
        {
          type: "image",
          src: "/images/bloom_bloom_juggrips.png",
          title: "Multi-configuration Jug",
          description: "The waterproof jug stores water, whose amount can be configured by the user. There are 3 level of grips that can be changed, which helps with progressive training."
        },
        {
          type: "image",
          src: "/images/bloom_bloom.jpg",
          title: "Flower & Pot Assembly",
          description: "The mechanical flower sits in a decorative pot, housing the servo mechanisms and electronics that create the blooming effect. It also consists of a screen that displays the state of the flower."
        }
      ]
    },
    contributions: [
      {
        title: "Flower Mechanism Design",
        description: "Designed the flower mechanism using Fusion360, exploring different mechanisms and conducting multiple iterations to achieve an opening and closing movement of the flower that allows for a full 90 degree motion with smooth enough resolution.",
        tools: ["Fusion360", "Mechanism Design", "CAD Assembly Animations"],
        images: ["/images/bloom_bloom_mechanism.png"]
      },
      {
        title: "Servo Calibration",
        description: "Formulate the mechanism using trigonometry, used it to program the motion. Then measured the actual servo motor angles and calibrated based on the differences in actual and calcualted..",
        tools: ["Arduino", "Physical Modeling"],
        images: ["/images/bloom_bloom_servo_calibration.png"]
      },
      {
        title: "Fabrication & Assembly",
        description: "3D printed all mechanical components and assembled the complete flower system, ensuring proper tolerances and function of all moving parts.",
        tools: ["3D Printing", "Assembly"],
        images: ["/images/bloom-bloom_flower.jpg"]
      },
      {
        title: "Simple Troubleshooting of Code",
        description: "Experienced what it is like to solve an issue under pressure, getting the LCD screen to work when my teammate was facing difficulty getting it to work.",
        tools: ["Debugging"],
        images: ["/images/arduino_logo.webp"]
      }
    ],
    iterations: [
      {
        title: "Mechanism 1: Worm Gear",
        description: "The worm gear mechanism was scrapped because too much friction was involved with this mechanism, and it is difficult to align the gears precisely.",
        image: "/images/bloom_bloom_v1.png"
      },
      {
        title: "Mechanism 2: Linkage",
        description: "This linkage makes use of gravity to work, which makes the movement inconsistent.",
        image: "/images/bloom_bloom_v2.png"
      },
      {
        title: "Mechanism 3: Rack and Pinion (Chosen)",
        description: "Final design uses rack and pinions. As the pinions are driven by the same rack, the pinion positions are precise.",
        image: "/images/bloom_bloom_v3.png"
      }
    ],
    skills: ["Autodesk Fusion 360", "Arduino", "Mechanism Design", "Motor Control", "3D Printing", "System Integration"],
    nextProject: "stefan"
  },
  stefan: {
    title: "Stëfan",
    tagline: "Mechanically powered competition toy car",
    type: "School Group Project",
    color: "from-stone-50 to-neutral-100",
    accent: "text-stone-700",
    accentBg: "bg-stone-100",
    borderAccent: "border-stone-300",
    image: "/images/stefan.jpg",
    heroHeight: "h-[50vh] md:h-[60vh]", // increase stefan top image height here
    overview: "Stëfan is a mechanically powered toy car designed to complete a challenging course without any electrical components. The project required innovative mechanical engineering to create a reliable spring-powered propulsion system.",
    overviewVideo: "/videos/stefan_header_video.mp4",
    featureDescription: "Stëfan relies purely on mechanical energy storage and release, using a spring-based mechanism to navigate a predetermined course with precision.",
    features: {
      type: "stefan",
      items: [
        {
          type: "video",
          src: "/videos/stefan_mechanism.mp4",
          title: "Spring Mechanism",
          description: "The heart of Stëfan - a carefully engineered spring mechanism that stores and releases energy to propel the car through the entire course."
        },
        {
          type: "image",
          src: "/images/stefan_competitioncourse.png",
          title: "Competition Course",
          description: "The challenging course featuring ramps, turns, and obstacles that Stëfan was designed to navigate using only mechanical power."
        }
      ]
    },
    contributions: [
      {
        title: "Complete CAD Design",
        description: "Designed the entirety of the car in CAD software, including the chassis, wheels, axles, and all structural components optimized for performance and manufacturability.",
        tools: ["Solidworks"],
        images: ["/images/stefan_cad.png"]
      },
      {
        title: "Spring Mechanism Engineering",
        description: "Engineered the spring-based power mechanism, calculating and designing the energy storage and release system to provide optimal propulsion throughout the course.",
        tools: ["Theoretical Calculations"],
        images: ["/images/stefan_mechanism.jpg"]
      },
      {
        title: "Manufacturing & Assembly",
        description: "3D printed all designed components and performed complete assembly, ensuring precise alignment of all mechanical systems for smooth operation.",
        tools: ["3D Printing", "Assembly"],
        images: ["/images/stefan.jpg"]
      }
    ],
    skills: ["SOLIDWORKS", "CAD Design", "Mechanical Engineering", "3D Printing", "Testing and Evaluation"],
    nextProject: "quackro"
  }
}

type ProjectKey = keyof typeof projects

const projectOrder: ProjectKey[] = ["quackro", "reflex", "bloom-bloom", "stefan"]

// Feature Section Components
function QuackroFeatures({ project }: { project: typeof projects.quackro }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {project.features.items.map((item, index) => (
        <div key={index} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            />
          ) : (
            <div className="relative aspect-video">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4 space-y-2">
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReflexFeatures({ project }: { project: typeof projects.reflex }) {
  return (
    // Features stack top-to-bottom and together fill the same height as the vertical demo image on the left.
    // h-full + flex-1 on each card makes the 3 cards split the column height evenly.
    <div className="flex flex-col gap-6 h-full">
      {project.features.items.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {/* Bigger, wide (16:9) image that grows to fill the card height */}
          <div className="relative flex-1 min-h-0 aspect-video">
            <Image
              src={item.src}
              alt={item.description}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BloomBloomFeatures({ project }: { project: typeof projects["bloom-bloom"] }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
      {project.features.items.map((item, index) => (
        <div key={index} className="flex items-stretch flex-1">
          {/* Feature Box - all boxes share the same size */}
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm flex-1 flex flex-col">
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 space-y-2">
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
          {/* Arrow between boxes (not after last item) */}
          {index < project.features.items.length - 1 && (
            <div className="hidden md:flex items-center justify-center px-3">
              <ChevronRight className="w-6 h-6 text-pink-400" />
            </div>
          )}
          {/* Mobile arrow (below each box except last) */}
          {index < project.features.items.length - 1 && (
            <div className="flex md:hidden items-center justify-center py-2">
              <ChevronRight className="w-6 h-6 text-pink-400 rotate-90" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function StëfanFeatures({ project }: { project: typeof projects.stefan }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {project.features.items.map((item, index) => (
        <div key={index} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            />
          ) : (
            <div className="relative aspect-video">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4 space-y-2">
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectFeatures({ slug, project }: { slug: string; project: typeof projects[ProjectKey] }) {
  switch (slug) {
    case "quackro":
      return <QuackroFeatures project={project as typeof projects.quackro} />
    case "reflex":
      return <ReflexFeatures project={project as typeof projects.reflex} />
    case "bloom-bloom":
      return <BloomBloomFeatures project={project as typeof projects["bloom-bloom"]} />
    case "stefan":
      return <StëfanFeatures project={project as typeof projects.stefan} />
    default:
      return null
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as ProjectKey]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    )
  }

  const currentIndex = projectOrder.indexOf(slug as ProjectKey)
  const prevProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : projectOrder[projectOrder.length - 1]
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : projectOrder[0]

  const hasIterations = 'iterations' in project && project.iterations

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation - stays pinned to the top of the screen while scrolling */}
      <nav className="sticky top-0 z-50 px-6 py-6 lg:px-12 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {project.type}
          </span>
        </div>
      </nav>

      {/* Hero with Image */}
      <section className="relative">
        {/* Hero Image - height is controlled per-project via heroHeight (see project data above) */}
        <div className={`relative ${project.heroHeight} overflow-hidden`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
        </div>

        {/* Hero Content */}
        <div className="relative -mt-32 px-6 lg:px-12 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold ${project.accent}`}>
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 text-balance">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Now below tagline, spanning full width */}
      <section className="px-6 py-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Skills Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1.5 text-sm font-medium ${project.accentBg} ${project.accent} rounded-full border ${project.borderAccent}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview - Now spans full width */}
      <section className="px-6 py-12 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Main Overview Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            {/* description spans the full width of the box (no max-width clamp) */}
            <p className="text-lg text-muted-foreground leading-relaxed w-full">
              {project.overview}
            </p>
          </div>

          {slug === "reflex" ? (
            /* REFLEX: vertical demo image on the left, features stacked top-to-bottom on the right */
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Vertical demo image (swap project.overviewImage for your vertical image) */}
              <div className="relative w-full md:w-2/5 aspect-[9/16] overflow-hidden rounded-xl border border-muted bg-muted/30 shadow-md">
                <Image
                  src={(project as typeof projects.reflex).overviewImage}
                  alt={`${project.title} demo`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Features stacked to the right */}
              <div className="w-full md:w-3/5">
                <ProjectFeatures slug={slug} project={project} />
              </div>
            </div>
          ) : (
            <>
              {/* Main Video - Project specific */}
              <div className="overflow-hidden rounded-xl border border-muted bg-muted/30 shadow-md">
                <video
                  src={project.overviewVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>

              {/* Feature Section - Project specific */}
              <div className="space-y-6 pt-4">
                <p className="text-muted-foreground leading-relaxed max-w-4xl">
                  {project.featureDescription}
                </p>
                <ProjectFeatures slug={slug} project={project} />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contributions */}
      <section className="px-6 py-12 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">My Contributions</h2>
            <p className="text-muted-foreground">Key areas of responsibility and technical work</p>
          </div>

          <div className="space-y-8">
            {project.contributions.map((contribution, index) => (
              <div
                key={contribution.title}
                className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                {/* Images - stacked vertically */}
                <div className={`flex flex-col gap-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {contribution.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${contribution.title} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-start gap-4">
                    <span className={`text-4xl font-bold ${project.accent} opacity-40`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{contribution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {contribution.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {contribution.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded border border-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iterations Section (only for Bloom Bloom) */}
      {hasIterations && (
        <section className="px-6 py-12 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How the flower mechanism was chosen</h2>
              <p className="text-muted-foreground">The design evolution and prototyping journey of the flower blooming mechanism</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {project.iterations?.map((iteration, index) => (
                <div
                  key={iteration.title}
                  className="group relative rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={iteration.image}
                      alt={iteration.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />
                    <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-mono ${project.accentBg} ${project.accent} rounded-full border ${project.borderAccent}`}>
                      v{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-semibold text-foreground">{iteration.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {iteration.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="px-6 py-12 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/projects/${prevProject}`}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Previous</span>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {projects[prevProject].title}
                </p>
              </div>
            </Link>
            <Link
              href={`/projects/${nextProject}`}
              className="group flex items-center justify-end gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-right"
            >
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Next</span>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {projects[nextProject].title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Engineering Portfolio
          </p>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
            View All Projects
          </Link>
        </div>
      </footer>
    </main>
  )
}
