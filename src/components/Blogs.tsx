import { Link } from 'react-router-dom';

interface Insight {
  id: number;
  title: string;
  image: string;
  category: string;
  readTime: string;
  dark: boolean;
}

export function Blogs() {
  const insights: Insight[] = [
    {
      id: 1,
      title: 'Why People Leave Your Website in 10 Seconds (and How to Make Them Stay)',
      image:
        '/wb.png',
      category: 'Web Design',
      readTime: '5 min read',
      dark: false,
    },
    {
      id: 2,
      title: 'The Untapped Goldmine: How Founders Can Win Big on LinkedIn',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Branding',
      readTime: '8 min read',
      dark: false,
    },
    {
      id: 3,
      title: "The Psychology of Selling on Instagram: How to Make People Want What You Offer",
      image:
        '/mb.png',
      category: 'Social Media',
      readTime: '6 min read',
      dark: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section
        id="insights"
        className="py-20 relative min-h-screen flex flex-col justify-center"
      >
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-white tracking-widest">
              INSIGHTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Latest <span className="italic font-['Instrument_Serif']">thoughts</span> from
            <br />
            the studio.
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                insight.dark
                  ? 'bg-black border border-gray-800'
                  : 'bg-white/5 border border-gray-700'
              }`}
            >
              {/* Image Section */}
              <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm text-white/80">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div
                className={`p-6 ${
                  insight.dark ? 'bg-black' : 'bg-white/5'
                } ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    {insight.readTime}
                  </span>
                </div>
                <h3
                  className={`text-xl font-light leading-tight ${
                    insight.dark ? 'text-white' : 'text-white'
                  }`}
                >
                  {insight.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
