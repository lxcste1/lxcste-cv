import { Mail, MapPin, Github, Linkedin } from "lucide-react";

interface ContactInfoLabels {
  title: string;
  email: string;
  location: string;
  locationValue: string;
  social: string;
}

interface ContactInfoProps {
  labels: ContactInfoLabels;
}

export function ContactInfo({ labels }: Readonly<ContactInfoProps>) {
  const contactDetails = [
    {
      icon: Mail,
      label: labels.email,
      value: "lucastello97@gmail.com",
      href: "mailto:lucastello97@gmail.com",
    },
    {
      icon: MapPin,
      label: labels.location,
      value: labels.locationValue,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lxcste1",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tellolucas",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {labels.title}
        </h3>
        <div className="space-y-4">
          {contactDetails.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {labels.social}
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
