import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/sections/SectionHeader';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

const officeHours = [
  { label: 'Monday – Friday', value: '08:00 – 18:00' },
  { label: 'Saturday', value: '09:00 – 15:00' },
  { label: 'Emergency response', value: '24/7 for contracted clients' },
];

const contactChannels = [
  {
    title: 'WhatsApp',
    description: 'Fastest way to request inspections and share site photos.',
    href: 'https://wa.me/255685482846',
    cta: 'Chat on WhatsApp',
  },
  {
    title: 'Email',
    description: 'Send RFQs, compliance documents, and facility details.',
    href: 'mailto:business@makazifumigation.co.tz',
    cta: 'business@makazifumigation.co.tz',
  },
  {
    title: 'Hotline',
    description: 'Talk directly with our dispatch team for urgent support.',
    href: 'tel:+255685482846',
    cta: '+255 685 482 846',
  },
];

export const metadata = {
  title: 'Contact',
  description:
    'Contact Makazi Fumigation to schedule a site survey, request a proposal, or get technical support.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Makazi"
        title="Let's plan."
        description="Share a bit about your space, the pest issues you're facing, and any timelines you're working with. Once we have the details, our certified team will review your request and get back to you with guidance or next steps within one business day."
      >
        <div className="space-y-3 text-sm text-[#6d6d6d]">
          {officeHours.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3"
            >
              <span className="font-medium text-[#1a1a1a]">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section-compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Talk to us"
                title="We're always here."
                description="Use the form, call our hotline, or start a WhatsApp conversation. We'll discuss your needs and prepare a tailored plan with transparent pricing."
              />
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    className="block"
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      channel.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <Card className="hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-[#1a1a1a]">
                          {channel.title}
                        </h3>
                        <p className="text-[#6d6d6d]">{channel.description}</p>
                        <span className="text-sm font-semibold text-[#5bad6a]">
                          {channel.cta} →
                        </span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="section-compact bg-[#f6f6f6]">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Site survey checklist"
              title="What to prepare for your inspection"
              description="Providing detailed information helps us recommend the right treatment strategy from day one."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  Property layout
                </h3>
                <p className="text-[#6d6d6d]">
                  Floor plans, storage areas, and sensitive zones such as
                  kitchens, clinics, or food production lines.
                </p>
              </Card>
              <Card className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  Pest history
                </h3>
                <p className="text-[#6d6d6d]">
                  Recent sightings, affected areas, and any previous treatments
                  performed on-site.
                </p>
              </Card>
              <Card className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  Compliance
                </h3>
                <p className="text-[#6d6d6d]">
                  Share audit requirements, HACCP protocols, or export regulations
                  influencing your pest control plan.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

