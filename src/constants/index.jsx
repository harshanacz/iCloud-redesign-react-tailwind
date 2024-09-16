import intro1 from '../assets/userGuidePage/2.png';
import intro2 from '../assets/userGuidePage/3.png';
import intro3 from '../assets/userGuidePage/4.png';

//Navbar
export const navItems = [
  { label: "User Guide", href: "/guide" },
];


//  USER GUIDE PAGE

//Tabel of context
export const tableOfContext = [
  { label: "iCloud basics", href: "#icloud-basics" },
  { label: "What’s included in iCloud+", href: "#whats-included-icloud-plus" },
  { label: "Manage your account and settings", href: "#manage-account-settings" },
  { label: "Learn about iCloud features", href: "#learn-icloud-features" },
  { label: "Use iCloud on the web", href: "#use-icloud-web" },
  { label: "Use iCloud on your Windows computer", href: "#use-icloud-windows" },
  { label: "Get more help with iCloud", href: "#get-help-icloud" },
  { label: "Legal notices and acknowledgements", href: "#legal-notices" },
  { label: "Copyright", href: "#copyright" }
];


//Intro section
export const intro = [
  {
    title: "Use iCloud with your favorite apps",
    description: "See the same photos and videos everywhere. Keep your files up to date on all your devices. Store data from your favorite apps and see it anywhere iCloud is turned on.",
    image: intro1,
    right: true,
    button:"Learn More"
  },
  {
    title: "Get more storage and features with iCloud+",
    description: "When you upgrade to iCloud+, you get more iCloud storage for your photos and files and access to features like iCloud Private Relay and Hide My Email.",
    image: intro2,
    right: false,
    button:"See what’s"
  },{
    title: "Use iCloud on the web",
    description: "See your mail, photos, files, and more on iCloud.com. They’re safe, up to date, and available wherever you are.",
    image: intro3,
    right: true,
    button:"Sign in"
  },
];