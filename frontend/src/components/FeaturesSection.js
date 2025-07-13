import React from 'react';

const features = [
  {
    title: 'User-Friendly Interface 🖥️',
    description: 'Our system is designed with simplicity in mind, making it easy for anyone to navigate and use without technical expertise.',
  },
  {
    title: 'Automated Workflows 🤖',
    description: 'Reduce manual tasks with smart automation that boosts your team\'s productivity and efficiency.',
  },
  {
    title: 'Secure by Design 🔐',
    description: 'Security is integrated at every level to protect your data and maintain trust with robust safeguards.',
  },
  {
    title: 'Performance Optimized 🚀',
    description: 'Experience fast, reliable performance that keeps your operations running smoothly even under heavy loads.',
  },
  {
    title: 'Scalable Architecture 📈',
    description: 'EFIR grows with your needs, designed to scale effortlessly as your organization expands.',
  },
  {
    title: 'Real-Time Analytics & Insights 📊',
    description: 'Access up-to-date reports and dashboards to make informed decisions backed by data.',
  },
  {
    title: 'Seamless Integration 🔗',
    description: 'Easily connect EFIR with your existing tools and systems for a unified digital ecosystem.',
  },
  {
    title: 'Dedicated Support & Maintenance 🛠️',
    description: 'Our team provides ongoing support and regular updates to ensure your system stays current and reliable.',
  },
];

const FeaturesSection = () => {
  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Features We Provide</h2>
      <div>
        {features.map((feature, index) => (
          <div key={index} style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{feature.title}</h3>
            <p style={{ margin: 0 }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
