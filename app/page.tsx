import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "quackro",
    title: "Quackro",
    tagline: "Duck-themed programmable macropad",
    type: "Personal Project",
    description: "A custom 3-key macropad with OLED screen featuring custom PCB design and 3D printed enclosure.",
    color: "from-amber-100 to-orange-100",
    accent: "text-amber-600",
    hoverBorder: "hover:border-amber-400",
    image: "/images/quackro.jpg",
  },
  {
    id: "reflex",
    title: "REFLEX",
    tagline: "AI-powered smart mirror",
    type: "Group Project",
    description: "Smart mirror with AI attire detection and chatbot for FabLab students and staff.",
    color: "from-indigo-100 to-violet-100",
    accent: "text-indigo-600",
    hoverBorder: "hover:border-indigo-400",
    image: "/images/reflex.jpg",
  },
  {
    id: "bloom-bloom",
    title: "Bloom Bloom",
    tagline: "Flowering simulator for hand training",
    type: "School Project",
    description: "Weighted jug and synthetic flower to simulate gardening, with a minigame implementation.",
    color: "from-pink-100 to-rose-100",
    accent: "text-pink-600",
    hoverBorder: "hover:border-pink-400",
    image: "/images/bloom-bloom.jpg",
  },
  {
    id: "stefan",
    title: "Stëfan",
    tagline: "Mechanically powered toy car",
    type: "School Project",
    description: "Mechanically powered toy car with suspension designed to complete a pre-set course.",
    color: "from-black-100 to-maroon-100",
    accent: "text-black-600",
    hoverBorder: "hover:border-black-400",
    image: "/images/stefan.jpg",
  },
  // {
  //   id: "DTI",
  //   title: "GlobePS",
  //   tagline: "Mechanical toy car",
  //   type: "School Project",
  //   description: "Mechanically powered toy car designed to complete a challenging course.",
  //   color: "from-emerald-100 to-teal-100",
  //   accent: "text-emerald-600",
  //   hoverBorder: "hover:border-emerald-400",
  //   image: "/images/stefan.jpg",
  // }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-12 lg:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-mono text-sm tracking-wider uppercase font-medium">Engineering Portfolio</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground">
                  Wenn Xuan's <span className="text-primary">Portfolio</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Prospective mechanical engineer interested in the field of Robotics, and enjoy getting my hands dirty to create innovative and practical solutions.
                </p>
              </div>

              {/* Skills overview */}
              <div className="flex flex-wrap gap-3">
                {["SOLIDWORKS", "Autodesk Fusion 360", "3D Printing", "Basic Machinery", "Electromechanical Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-mono text-foreground bg-card rounded-full border border-border shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="\images\DSC_3377.JPG"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 lg:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Projects</h2>
            {/* description now spans the full width of the grid (up to the right edge) */}
            <p className="text-muted-foreground w-full">
              The four projects in this portfolio showcases a wide range of engineering projects,  that involve mechanical skills and others.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative"
              >
                <div className={`
                  relative overflow-hidden rounded-2xl border border-border bg-card
                  transition-all duration-300 shadow-sm
                  hover:border-primary hover:shadow-xl
                  hover:-translate-y-1
                `}>
                  {/* Project Image */}
                  {/* //increase width HERE (this is the height of each project image on the front page) */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />

                    {/* Project number overlay */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border border-border">
                      <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    </div>
                  </div>

                  <div className="relative p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{project.type}</span>
                        {/* header text uses text-primary, the same pink as the name on the cover page */}
                        <h3 className="text-2xl font-bold mt-1 text-primary">
                          {project.title}
                        </h3>
                      </div>
                      <div className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors`}>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-base text-foreground/80">{project.tagline}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Engineering Portfolio
          </p>
          <div className="flex items-center gap-6">
            {/* <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">GitHub</a> */}
            <a href="https://www.linkedin.com/in/wenn-xuan-lee-2a0211273/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">LinkedIn</a>
            <a href="mailto:your.leewennxuan@outlook.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Email</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
