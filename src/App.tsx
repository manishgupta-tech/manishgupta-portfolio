import { 
  Cpu, 
  Database, 
  ExternalLink, 
  Github, 
  Globe, 
  Layers,
  Layout,
  Linkedin, 
  Mail, 
  MessageSquare, 
  Network, 
  Smartphone,
  Terminal,
  Rocket
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { FormEvent, ReactNode, useState } from 'react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-4 bg-opacity-80 border-white/5 shadow-2xl">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-[0_0_20px_rgba(0,198,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] transition-all">
            <span className="text-black text-xs font-bold uppercase tracking-tighter">MG</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Manish Gupta</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="mb-16 text-center">
    {subtitle && <span className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-3 block opacity-80">{subtitle}</span>}
    <h2 className="text-4xl md:text-5xl glow-text py-1 tracking-tight">{children}</h2>
  </div>
);

const SkillGroup = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 border-white/5 hover:border-brand-blue/20 bg-brand-gray/30"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-display text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium hover:bg-white/10 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  link 
}: { 
  title: string, 
  description: string, 
  image: string, 
  tags: string[], 
  link: string 
}) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card overflow-hidden group border-white/5 hover:border-brand-blue/20 bg-brand-gray/20 shadow-xl"
  >
    <div className="relative h-52 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
    </div>
    
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl mb-4 font-display text-white group-hover:text-brand-blue transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-brand-cyan text-sm font-bold hover:underline"
>
  View Code → 
        <ExternalLink size={14} className="text-brand-blue transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  </motion.div>
);

const ExperienceItem = ({ 
  role, 
  company, 
  period, 
  description, 
  isLast 
}: { 
  role: string, 
  company: string, 
  period: string, 
  description: string[],
  isLast?: boolean
}) => (
  <div className="relative pl-10 pb-16">
    {!isLast && <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-brand-purple/40 to-transparent" />}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-black border-2 border-brand-purple flex items-center justify-center z-10">
      <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_10px_#7F5AF0]" />
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
      <h3 className="text-2xl text-white font-display tracking-tight">{role}</h3>
      <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/5 px-3 py-1 rounded-full border border-brand-cyan/20">{period}</span>
    </div>
    <h4 className="text-brand-blue font-bold text-lg mb-6">{company}</h4>
    <ul className="space-y-3">
      {description.map((item, idx) => (
        <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-blue/30">
      {/* --- Aesthetic Elements --- */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-10 pt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.3em] uppercase text-slate-400 mb-8">
                Available for New Challenges
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-[1.05] tracking-tighter">
                Hi, I'm <br />
                <span className="glow-text underline-glow">Manish Gupta</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-200 mb-6 font-display">
                AI Engineer | Backend Developer | Android Developer
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                Building intelligent systems using <span className="text-white font-semibold">LLMs, RAG</span>, and scalable backend architectures. Transforming complex data into actionable intelligence.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <a href="#projects" className="btn-primary flex items-center gap-3">
                  View Projects <Layout size={18} />
                </a>
                <a href="#contact" className="btn-secondary flex items-center gap-3">
                  Contact Me <Mail size={18} />
                </a>
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-4 relative hidden lg:block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-brand-purple/30 blur-2xl rounded-3xl group-hover:blur-3xl transition-all duration-500" />
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Visualization" 
                  className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
               
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-32 px-6 md:px-10 border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Who Am I">About Me</SectionHeading>
            <div className="grid md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-12 lg:col-span-7 space-y-8">
                <div className="glass-card p-10 leading-relaxed text-slate-400 border-white/5 bg-brand-gray/40 shadow-2xl">
                  <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                    "I'm an AI Engineer with experience in building intelligent systems using <span className="text-brand-blue font-semibold">LLMs, RAG pipelines, and FastAPI</span>. I focus on solving real-world problems through scalable backend systems, AI-driven applications, and automation. I also have hands-on experience in Android development, Django backend systems, and <span className="text-brand-purple font-semibold">IoT-based solutions</span>."
                  </p>
                  <p className="mb-0 text-slate-400 leading-loose">
                    My approach combines deep technical expertise with a product-centric mindset. I believe that engineering is not just about writing code, but about architecting solutions that provide meaningful value to users and businesses alike.
                  </p>
                </div>
                
               
              </div>

              <div className="md:col-span-12 lg:col-span-5 space-y-6">
                <h3 className="text-xl font-display text-white mb-4">Focus Areas</h3>
                {[
                  { title: "Generative AI", desc: "Fine-tuning models and building advanced RAG architectures.", icon: MessageSquare },
                  { title: "Backend Systems", desc: "Crafting highly performant APIs with FastAPI and Django.", icon: Layers },
                  { title: "Mobile Dev", desc: "Developing native Android applications with Java/Kotlin.", icon: Smartphone },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 glass-card border-white/5 hover:bg-white/[0.02]">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex-shrink-0 flex items-center justify-center text-brand-purple">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-32 px-6 md:px-10 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Technical Arsenal">Skills</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillGroup 
                title="Languages" 
                skills={['Python', 'Java', 'C', 'JavaScript', 'SQL']} 
                icon={Terminal} 
              />
              <SkillGroup 
                title="AI & Machine Learning" 
                skills={['LLMs', 'LangChain', 'RAG', 'FAISS', 'Hugging Face']} 
                icon={Cpu} 
              />
              <SkillGroup 
                title="Backend Architecture" 
                skills={['FastAPI', 'Django', 'REST APIs', 'System Design']} 
                icon={Layers} 
              />
              <SkillGroup 
                title="Databases" 
                skills={['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite']} 
                icon={Database} 
              />
              <SkillGroup 
                title="Tools & Platforms" 
                skills={['Git', 'VS Code', 'Android Studio', 'AirSim']} 
                icon={Network} 
              />
              <SkillGroup 
                title="App Development" 
                skills={['Android', 'IoT Systems', 'Robotics Control']} 
                icon={Smartphone} 
              />
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-32 px-6 md:px-10 border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Featured Work">Top Projects</SectionHeading>
            <div className="grid md:grid-cols-2 gap-10">
              <ProjectCard 
  title="AutoStream AI Agent"
  description="Developed an AI-powered conversational agent that converts user interactions into qualified leads for SaaS platforms. Implemented intent detection and a RAG pipeline using FAISS."
  image="/images/autostream.jpg"
  tags={['Python', 'FastAPI', 'FAISS', 'RAG']}
  link="https://github.com/manishgupta-tech/autostream-ai-agent"
/>


<ProjectCard 
  title="AI Drone Simulation System"
  description="Developed a drone simulation system using AirSim for autonomous navigation and testing in virtual environments. Improved simulation accuracy."
  image="/images/drone.jpg"
  tags={['Python', 'AirSim', 'Robotics']}
  link="https://github.com/manishgupta-tech/AI-Drone-Simulator"
/>

<ProjectCard 
  title="Fuel Price API"
  description="Django REST API to process truck stop data from CSV files and provide analytical endpoints including city/state filtering and lowest price retrieval."
  image="/images/fuel.jpg"
  tags={['Django', 'DRF', 'Pandas', 'SQLite']}
  link="https://github.com/manishgupta-tech/fuel-price-api-"
/>

<ProjectCard 
  title="AI Assistant with RAG"
  description="Built an intelligent assistant using LangChain to answer queries using document-based retrieval. Designed for scalability and efficient information access."
  image="/images/rag.jpg"
  tags={['Python', 'LangChain', 'FastAPI']}
  link="https://github.com/manishgupta-tech/langchain-chatbot"
/>
            </div>
            
            <div className="mt-24">
              <h3 className="text-xl font-display text-white mb-8 text-center uppercase tracking-widest opacity-60">Other Notable Projects</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Master-Slave Robotics", desc: "Distributed Control", icon: Network },
                  { title: "News Now App", desc: "Mobile Application", icon: Smartphone },
                  { title: "QR Scanner App", desc: "Utility Application", icon: Globe },
                  { title: "IoT Monitoring", desc: "Temperature Systems", icon: Cpu },
                ].map((item, idx) => (
                  <div key={idx} className="glass-card p-6 border-white/5 hover:border-brand-purple/30 group">
                    <div className="text-brand-purple mb-4 group-hover:scale-110 transition-transform"><item.icon size={20} /></div>
                    <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-mono">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-32 px-6 md:px-10 bg-white/[0.01] border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Career Timeline">Experience</SectionHeading>
            <div className="max-w-4xl mx-auto">
              <ExperienceItem 
                role="AI & Simulation Intern"
                company="Innovation Intellect"
                period="Recent"
                description={[
                  "Built intelligent AI assistant using LangChain for automated task handling.",
                  "Developed a complex drone simulation system using AirSim.",
                  "Worked on modeling distributed control systems for robotics."
                ]}
              />
              <ExperienceItem 
                role="Database Intern"
                company="Gokul Agro Resources"
                period="Internship"
                description={[
                  "Optimized SQL queries for large-scale enterprise data handling.",
                  "Managed complex database architectures ensuring 99.9% data integrity.",
                  "Standardized real-world data processing workflows."
                ]}
                isLast
              />
            </div>
          </div>
        </section>


        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 px-6 md:px-10 border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-12 md:p-20 relative overflow-hidden border-white/5 bg-brand-gray/30 shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
              
              <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
                    Let's discuss your next <span className="glow-text italic">big idea.</span>
                  </h2>
                  <p className="text-slate-400 mb-12 max-w-md text-lg leading-relaxed">
                    Always open to discussing AI integrations, backend performance optimization, or any interesting technical puzzles.
                  </p>
                  
                  <div className="space-y-8">
                    <a href="mailto:manishgupta94897@gmail.com" className="flex items-center gap-5 text-slate-300 group cursor-pointer hover:text-brand-blue transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 transition-all shadow-xl">
                        <Mail size={20} />
                      </div>
                      <span className="font-semibold text-lg">manishgupta94897@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/manishgupta-tech" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-slate-300 group cursor-pointer hover:text-brand-blue transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 transition-all shadow-xl">
                        <Linkedin size={20} />
                      </div>
                      <span className="font-semibold text-lg">linkedin.com/in/manishgupta-tech</span>
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-blue/50 focus:shadow-[0_0_20px_rgba(0,198,255,0.1)] transition-all placeholder:text-slate-700"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-blue/50 focus:shadow-[0_0_20px_rgba(0,198,255,0.1)] transition-all placeholder:text-slate-700"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-brand-blue/50 focus:shadow-[0_0_20px_rgba(0,198,255,0.1)] transition-all resize-none placeholder:text-slate-700"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button 
                    disabled={formState !== 'idle'}
                    className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 transform active:scale-95 ${
                      formState === 'sent' 
                      ? 'bg-green-500/20 text-green-500 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]' 
                      : 'btn-primary text-base'
                    }`}
                  >
                    {formState === 'idle' && (
                      <>Send Message <Rocket size={20} className="text-black" /></>
                    )}
                    {formState === 'sending' && (
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
                    )}
                    {formState === 'sent' && (
                      <>Message Sent! <div className="p-1 rounded-full bg-green-500 text-white"><Cpu size={14} /></div></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-20 px-6 md:px-10 border-t border-white/5 bg-brand-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shadow-[0_0_20px_rgba(0,198,255,0.4)]">
                <span className="text-black text-xs font-black uppercase tracking-tighter">MG</span>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tighter">Manish Gupta</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-loose font-medium">
              Architecting intelligent systems for the modern era. Built with passion and advanced MLOps.
            </p>
          </div>

          <div className="flex items-center gap-10">
            {[
              { icon: Github, url: "https://github.com/manishgupta-tech" },
              { icon: Linkedin, url: "https://linkedin.com/in/manishgupta-tech" },
              { icon: Mail, url: "mailto:manishgupta94897@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-brand-blue transition-all duration-300 transform hover:scale-150"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right border-t md:border-t-0 border-white/5 pt-10 md:pt-0 w-full md:w-auto">
            <p className="text-[11px] text-slate-400 uppercase tracking-[0.4em] font-black mb-3">Built by Manish Gupta</p>
            <p className="text-[10px] text-slate-600 font-mono tracking-tighter italic opacity-50">© 2026. Handcrafted in Silicon Valley. Code is Law.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

